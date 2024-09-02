import { db } from "@/lib/db";

export const findIfUserExists = async (email : string) => {
    try {
        const existing_user = await db.user.findFirst({
            where: { email: email },
        });
        return existing_user;
    } catch {
        return null;
    }
}

export const findUserById= async (id : string) => {
    try {
        const existing_user = await db.user.findUnique({
            where: { id: id }
        });
        return existing_user;
    } catch {
        return null;
    }
}