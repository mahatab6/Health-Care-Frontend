"use server"

import { httpClient } from "@/lib/axios/httpClient"
import { IAdminDashboardData } from "@/types/dashboardtypes"

export async function getDashboardData() {
    try {
        const response = await httpClient.get<IAdminDashboardData>("/stats");
        return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error, "From Dashboard Server action")
        return{
        success: false,
        message: error.message || "An error occurred while fetching dashboard data.",
        data: null,
        meta: null,
        }
    }
}