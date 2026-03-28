import {HeroApi} from "@/api/heroes.api.tsx";
import type {SummaryResponse} from "@/interfaces/SummaryResponse.tsx";

export const getSummary = async (): Promise<SummaryResponse> => {
    //This just calls the BaseUrl ${BASE_URL}/api/summary with a get method
    const {data}= await HeroApi.get("/summary");

    return data;
}