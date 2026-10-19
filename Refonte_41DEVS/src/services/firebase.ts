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

/**
 * Détecte si la configuration Firebase actuelle est un exemple / placeholder factice
 */
export function isPlaceholderConfig(): boolean {
  const apiKey = (firebaseConfig.apiKey || '').trim()
  const projectId = (firebaseConfig.projectId || '').trim()

  return (
    !apiKey ||
    !projectId ||
    apiKey === 'votre_api_key_ici' ||
    projectId === 'votre_projet_id' ||
    apiKey === 'AIzaSyA1b2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q' ||
    projectId === 'refonte-41devs' ||
    import.meta.env.VITE_FIREBASE_MOCK === 'true'
  )
}

/**
 * Vérifie si une configuration Firebase réelle est renseignée
 */
export function isFirebaseConfigured(): boolean {
  return !isPlaceholderConfig()
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
 * Helper de timeout — rejette après `ms` millisecondes pour éviter les attentes interminables
 */
function withTimeout<T>(promise: Promise<T>, ms = 3000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(
        () => reject(new Error(`Délai d'attente dépassé (${ms / 1000}s). Vérifiez vos clés Firebase ou votre connexion.`)),
        ms
      )
    ),
  ])
}

/**
 * Envoie les informations du formulaire de contact vers Cloud Firestore
 * Si des clés d'exemple ou fictives sont détectées, bascule automatiquement en mode
 * démonstration ultra-rapide (400ms) avec sauvegarde locale pour un test immédiat.
 */
export async function sendContactMessage(data: ContactData): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    if (!data.fullName || !data.fullName.trim()) {
      throw new Error('Le nom est obligatoire.')
    }

    if (!data.message || !data.message.trim()) {
      throw new Error('Le message est obligatoire.')
    }

    // MODE DÉMO / PLACEHOLDER : Réponse quasi-instantanée et fluide (400ms)
    if (isPlaceholderConfig()) {
      await new Promise((resolve) => setTimeout(resolve, 400))

      // Déclencheur de test pour afficher la page d'erreur si demandé
      const isErrorTest =
        data.fullName.toLowerCase().includes('erreur') ||
        data.fullName.toLowerCase().includes('error') ||
        data.message.toLowerCase().includes('erreur') ||
        data.message.toLowerCase().includes('error')

      if (isErrorTest) {
        return {
          success: false,
          error: "Test d'échec simulé : impossible d'enregistrer vos informations (mode test).",
        }
      }

      // Sauvegarde dans le localStorage pour persistance de test
      try {
        const stored = JSON.parse(localStorage.getItem('41devs_contact_submissions') || '[]')
        stored.unshift({
          id: 'demo_' + Date.now(),
          fullName: data.fullName.trim(),
          organization: data.organization ? data.organization.trim() : '',
          message: data.message.trim(),
          country: data.country || null,
          submittedAt: new Date().toISOString(),
        })
        localStorage.setItem('41devs_contact_submissions', JSON.stringify(stored.slice(0, 50)))
      } catch (storageErr) {
        console.warn('LocalStorage non disponible pour la démo :', storageErr)
      }

      console.info('⚡ [41DEVS Demo] Message envoyé avec succès en mode démo :', data)
      return { success: true, id: 'demo_' + Date.now() }
    }

    // MODE FIREBASE RÉEL : Connexion à Cloud Firestore avec timeout réduit (3s max)
    const firestore = getFirebaseDb()
    const contactsRef = collection(firestore, 'contacts')

    const docRef = await withTimeout(
      addDoc(contactsRef, {
        fullName: data.fullName.trim(),
        organization: data.organization ? data.organization.trim() : '',
        message: data.message.trim(),
        country: data.country || null,
        createdAt: serverTimestamp(),
        submittedAt: new Date().toISOString(),
      }),
      3000
    )

    return { success: true, id: docRef.id }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Une erreur inconnue est survenue.'
    console.error('Erreur Firebase Firestore:', err)
    return { success: false, error: errorMessage }
  }
}
