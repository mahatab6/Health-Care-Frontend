"use server"

import { httpClient } from "@/lib/axios/httpClient"
import { ApiResponse } from "@/types/api.types";
import { IDoctor } from "@/types/doctor.types"


export const getDoctors = async () => {
    try {
    const response = await httpClient.get<ApiResponse<IDoctor[]>>('/doctors');
    return response.data
    } catch (error) {
        console.log("Error fetching doctors:", error)
        throw error;

    }
}

