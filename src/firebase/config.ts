
// src/firebase/config.ts
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // Provide a default placeholder if the env var is not set during build.
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL || "https://your-project-id.firebaseio.com",
  // Provide a default placeholder if the env var is not set during build.
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "your-project-id",
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};
