import {HeroApi} from "@/api/heroes.api.tsx";

export const getHeroesByPage = async () => {
    const {data}= await HeroApi.get("/");
    return data;
}