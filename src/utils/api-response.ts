import { User } from "@prisma/client";

export interface USERAPIRESPONSE{
    success: boolean,
    message: string,
    user:User
}