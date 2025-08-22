import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;

        const usersCollection = await dbConnect(collectionNames.userCollection)
        const user = await usersCollection.findOne({ email });
        
        if (!user) return null;

        if (password === user.password) {
          return { id: user._id.toString(), name: user.name, email: user.email };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/pages/login",
  },
};