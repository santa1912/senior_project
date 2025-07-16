import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore'

// กำหนด config Firebase ของคุณ
const firebaseConfig = {
  apiKey: "AIzaSyD1A8d4QRcl4u1sJW2kv54Wq7VxbZsLvmI",
  authDomain: "senior-project-b22c5.firebaseapp.com",
  projectId: "senior-project-b22c5",
  storageBucket: "senior-project-b22c5.firebasestorage.app",
  messagingSenderId: "373525259993",
  appId: "1:373525259993:web:5953268cf0e320732800c8",
  measurementId: "G-HNH1KDSFG8"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function createAdminUser() {
  try {
    const adminEmail = 'admin@mfu.ac.th'
    const adminDocRef = doc(db, 'users', adminEmail)

    await setDoc(adminDocRef, {
    email: 'admin@mfu.ac.th',
    displayName: 'Admin',
    role: 'admin',
    isActive: true,
    createdAt: serverTimestamp(),
    lastLogin: serverTimestamp(),
    photoURL: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
   })

    console.log(`Admin user (${adminEmail}) created successfully!`)
  } catch (error) {
    console.error('Failed to create admin user:', error)
  }
}

createAdminUser()