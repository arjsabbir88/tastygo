"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  console.log("Payload received in registerUser:", payload);
  try {
    const { email } = payload;

    const users = await dbConnect(collectionNames.userCollection);

    const existing = await users.findOne({ email });

    if (existing) {
      return {
        success: false,
        message: "User already exists",
      };
    }
    
    const result = await users.insertOne(payload);
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  } catch (error) {
    console.error("Register User Error:", error);
    throw error;
  }
};
