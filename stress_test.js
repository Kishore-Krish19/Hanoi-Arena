const { io } = require("socket.io-client");
const axios = require("axios");

// 1. USE Node.js process.env FOR THE LIVE URL
// Replace the URL below with your actual Railway URL if not using a .env file
const API_URL = process.env.VITE_API_URL || "https://hanoi-arena-production.up.railway.app";
const PLAYER_COUNT = 180; 

async function simulatePlayers() {
    console.log(`🚀 Starting PRODUCTION stress test with ${PLAYER_COUNT} players...`);
    console.log(`🔗 Target API: ${API_URL}`);

    for (let i = 1; i <= PLAYER_COUNT; i++) {
        const username = `prod_user_${i}`;
        const password = "password123";

        try {
            // 2. REGISTER THE PLAYER
            try {
                await axios.post(`${API_URL}/api/auth/register`, { username, password });
                console.log(`📝 Registered: ${username}`);
            } catch (regErr) {
                if (regErr.response && regErr.response.status !== 400) throw regErr;
            }

            // 3. LOGIN THE PLAYER
            const loginRes = await axios.post(`${API_URL}/api/auth/login`, { username, password });
            const { token } = loginRes.data;
            console.log(`🔑 Logged in: ${username}`);

            // 4. CONNECT VIA SOCKET.IO (WITH LIVE HEADERS)
            const socket = io(API_URL, {
                extraHeaders: { Authorization: `Bearer ${token}` },
                transports: ['websocket'],
                reconnection: true // Added for cloud stability
            });

            socket.on("connect", () => {
                console.log(`✅ ${username} Socket Connected to Railway`);
            });

            // 5. SIMULATE GAME START
            await axios.post(`${API_URL}/api/game/start`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // 6. LONGER DELAY (Important for Cloud Stability)
            // Increased to 500ms to allow TiDB to process each write without hitting Request Unit limits
            await new Promise(r => setTimeout(r, 500));

        } catch (err) {
            console.error(`❌ Error with ${username}:`, err.response ? err.response.data : err.message);
        }
    }
    console.log("🏁 Production stress test sequence complete.");
}

simulatePlayers();