/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpClient } from "@/lib/axios/httpClient";
import { setTokenInCookies } from "@/lib/tokenUtils";
import { ApiErrorResponse } from "@/types/api.types";
import { ILoginResponse } from "@/types/auth.types";
import { ILoginPayload, loginZodSchema } from "@/zod/auth.validation";
import { redirect } from "next/navigation";



export const LoginAction = async (payload: ILoginPayload): Promise<ILoginResponse | ApiErrorResponse> => {

    const parsedPaylod = loginZodSchema.safeParse(payload);

        if(!parsedPaylod.success){
            const firstError = parsedPaylod.error.issues[0].message || "Invalid input";
            return{
                success: false,
                message: firstError,
            }
        }

    try {
        const response = await httpClient.post<ILoginResponse>('/auth/login', parsedPaylod.data);
        
        const {accessToken, refreshToken, token} = response.data;
        await setTokenInCookies("acceessToken", accessToken);
        await setTokenInCookies("refreshToken", refreshToken);
        await setTokenInCookies("better-auth.session_token", token)

        redirect("/dashboard");
        
    } catch (error: any) {
        return {
            success: false,
            message: `Login failed: ${error.message}`
        }
    }
}