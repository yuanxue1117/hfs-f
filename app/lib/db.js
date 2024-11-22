import { Pool } from 'pg';

// 创建一个连接池，使用连接字符串（从环境变量读取 DATABASE_URL）
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, // 根据环境设置 SSL
});

// 导出数据库连接池实例
export default pool;
