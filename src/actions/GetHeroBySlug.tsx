import {HeroApi} from "@/api/heroes.api.tsx";
import type {Hero} from "@/interfaces/Hero.tsx";

const baseUrl= import.meta.env.VITE_APP_URL;

export const getHeroBySlug = async (slug:string):Promise<Hero> => {
    const {data}= await HeroApi.get<Hero>(`${slug}`);

    return{ ...data, image:`${baseUrl}/images/${data.image}` };
}