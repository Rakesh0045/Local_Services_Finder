import pool from "./Service.js";
 
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log(" DB connected successfully");
    connection.release();
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
  }
})();