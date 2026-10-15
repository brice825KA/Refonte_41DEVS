import { initializeApp, getApps, type FirebaseApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp, type Firestore } from 'firebase/firestore'

export interface ContactData {
  fullName: string
  organization?: string
  message: string
  country?: {
    code: string
    name: string
    flag: string
  }
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

let app: FirebaseApp | null = null
let db: Firestore | null = null

export function isFirebaseConfigured(): boolean {
  return Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.apiKey !== 'votre_api_key_ici' &&
    firebaseConfig.projectId !== 'votre_projet_id'
  )
}

export function getFirebaseDb(): Firestore {
  if (!db) {
    if (!getApps().length) {
      app = initializeApp(firebaseConfig)
    } else {
      app = getApps()[0] as FirebaseApp
    }
    db = getFirestore(app)
  }
  return db
}

/**
 * Envoie les informations du formulaire de contact vers Cloud Firestore
 */
export async function sendContactMessage(data: ContactData): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    if (!isFirebaseConfigured()) {
      throw new Error("La configuration Firebase n'est pas encore renseignée dans le fichier .env.")
    }

    if (!data.fullName || !data.fullName.trim()) {
      throw new Error("Le nom est obligatoire.")
    }

    if (!data.message || !data.message.trim()) {
      throw new Error("Le message est obligatoire.")
    }

    const firestore = getFirebaseDb()
    const contactsRef = collection(firestore, 'contacts')

    const docRef = await addDoc(contactsRef, {
      fullName: data.fullName.trim(),
      organization: data.organization ? data.organization.trim() : '',
      message: data.message.trim(),
      country: data.country || null,
      createdAt: serverTimestamp(),
      submittedAt: new Date().toISOString(),
    })

    return { success: true, id: docRef.id }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Une erreur inconnue est survenue."
    console.error('Erreur Firebase Firestore:', err)
    return { success: false, error: errorMessage }
  }
}
