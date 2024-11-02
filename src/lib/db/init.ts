// src/lib/db/init.ts
import { prisma } from '../db'

async function enablePostgresExtensions() {
  try {
    // Need to use $executeRawUnsafe because Prisma doesn't have direct extension management
    const commands = [
      `CREATE EXTENSION IF NOT EXISTS vector;`,
      `CREATE EXTENSION IF NOT EXISTS pgvector;`,
      `CREATE EXTENSION IF NOT EXISTS pgai;`,
      `CREATE EXTENSION IF NOT EXISTS pg_trgm;`,
      `CREATE EXTENSION IF NOT EXISTS btree_gist;`
    ];

    for (const command of commands) {
      await prisma.$executeRawUnsafe(command);
    }

    console.log('PostgreSQL extensions enabled successfully');
  } catch (error) {
    console.error('Failed to enable PostgreSQL extensions:', error);
    throw error;
  }
}

export async function initDatabase() {
  try {
    await enablePostgresExtensions();
    // Add any other initialization logic here
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
}