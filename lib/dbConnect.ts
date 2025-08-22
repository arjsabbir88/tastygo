// import { MongoClient, ServerApiVersion } from "mongodb"

// export const collectionNames = {
//   userCollection: "users"
// }


// function dbConnect(collectionName) {
//     const uri = process.env.MONGODB_URI

//     // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//     const client = new MongoClient(uri, {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     });

//     return client.db(process.env.DB_NAME).collection(collectionName)
// }

// export default dbConnect;


import { MongoClient, ServerApiVersion } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error("❌ Please add MONGODB_URI to .env.local")
}
if (!process.env.DB_NAME) {
  throw new Error("❌ Please add DB_NAME to .env.local")
}

const uri = process.env.MONGODB_URI
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options)
    ;(global as any)._mongoClientPromise = client.connect()
  }
  clientPromise = (global as any)._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// ✅ function to get collection
async function dbConnect(collectionName: string) {
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  return db.collection(collectionName)
}

export const collectionNames = {
  userCollection: "users",
}

export default dbConnect
