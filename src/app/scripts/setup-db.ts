import { initDatabase } from "../../lib/db/init";


async function setup() {
  try {
    await initDatabase();
    process.exit(0);
  } catch (error) {
    console.error('Setup failed:', error);
    process.exit(1);
  }
}

setup();