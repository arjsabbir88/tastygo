import dbConnect, { collectionNames } from "@/lib/dbConnect";
// import NextAuth  from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions  = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "jsmith@gmail.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials;

//         const usersCollection = await dbConnect(collectionNames.userCollection);
//         const user = await usersCollection.findOne({ email });
        

//         if (!user) {
//           console.log(" No user found for email:", email);
//           return null;
//         }

//         console.log("User found:", user);

//         if (password === user.password) {
//           console.log(" Password matched");
//           return {
//             id: user._id.toString(),
//             name: user.name,
//             email: user.email,
//           };
//         } else {
//           console.log("Password mismatch:", password, "!=", user.password);
//           return null;
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/pages/login",
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

