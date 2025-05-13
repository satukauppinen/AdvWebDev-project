const { query } = require('./db/db');

async function testDatabase() {
    try {
        const result = await query("SELECT NOW();");
        console.log("✅ Database connection successful:", result.rows[0]);
    } catch (error) {
        console.error("❌ Database connection failed:", error);
    }
}

testDatabase();
// This function will test the database connection when this file is executed.