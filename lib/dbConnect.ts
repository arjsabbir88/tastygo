
import { MongoClient, ServerApiVersion } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error("Please add MONGODB_URI to .env.local")
}
if (!process.env.DB_NAME) {
  throw new Error("Please add DB_NAME to .env.local")
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
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
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    ;global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

async function dbConnect(collectionName: string) {
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)
  return db.collection(collectionName)
}

export const collectionNames = {
  userCollection: "users",
}

export default dbConnect
