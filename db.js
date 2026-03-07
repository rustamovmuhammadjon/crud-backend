const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_9sYt6UcBamuh@ep-curly-dew-a8pxtnmw-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;