initdb();

import { openDB } from 'idb';

// Constants to hold the database name and version for ease of updates
const DB_NAME = 'jate';
const DB_VERSION = 1;

// Database initialization
const initDB = async () => {
  // Try opening the database with the specified name and version
  try {
    const jateDB = await openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        // If the object store already exists, log a message and return
        if (db.objectStoreNames.contains(DB_NAME)) {
          console.log(`${DB_NAME} database already exists`);
          return;
        }
        // Otherwise, create a new object store with auto-incrementing keys
        db.createObjectStore(DB_NAME, { keyPath: 'id', autoIncrement: true });
        console.log(`${DB_NAME} database created`);
      },
    });
    return jateDB; // Return the opened database
  } catch (error) {
    console.error('Error opening the database:', error);
  }
};

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Check if the database exists, if not, create it before doing any database operations
  const isExisting = (await window.indexedDB.databases()).map(db => db.name).includes(DB_NAME);
  if (!isExisting) {
    await initDB();
  }

  // Open the database
  const jateDb = await openDB(DB_NAME, DB_VERSION);
  const tx = jateDb.transaction(DB_NAME, 'readwrite');
  const store = tx.objectStore(DB_NAME);
  
  // Put the content into the database with auto-generated key
  const request = store.put({ value: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  const isExisting = (await window.indexedDB.databases()).map(db => db.name).includes(DB_NAME);
  if (!isExisting) {
    await initDB();
  }


  const jateDb = await openDB(DB_NAME, DB_VERSION);
  const tx = jateDb.transaction(DB_NAME, 'readonly');
  const store = tx.objectStore(DB_NAME);

  const request = store.get(1);
  const result = await request;
  console.log('result.value', result);

  return (result) ? result.value : false;
};

// Initialize the database when the module is imported
initDB();

