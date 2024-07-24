"use server";

import { createSessionClient } from "../appwrite";

export const signIn = async () => {
    try {
        // Mutation / Database / Make fetch
    } catch (error) {
        console.error("Error", error);
    }
}

export const signUp = async (userData: SignUpParams) => {
    try {
        // Create a user account
    } catch (error) {
        console.error("Error", error);
    }
}


export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const result = await account.get();
        return await account.get();
    } catch (error) {
        return null;
    }
}