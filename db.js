const { Pool } = require("pg");
const DATABASE_URL = 'postgresql://neondb_owner:npg_9sYt6UcBamuh@ep-curly-dew-a8pxtnmw-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

module.exports = pool;