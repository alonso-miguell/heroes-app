import {HeroApi} from "@/api/heroes.api.tsx";
import type {HeroesResponse} from "@/interfaces/HeroeResponse.tsx";
import type {Hero} from "@/interfaces/Hero.tsx";

const baseUrl= import.meta.env.VITE_APP_URL;

export const getHeroesByPage = async ():Promise<HeroesResponse> => {
    //This just calls the BaseUrl ${BASE_URL}/api/heroes with a get method
    const {data}= await HeroApi.get("/");

    const heroes= data.heroes.map((hero:Hero) => ({ ...hero, image:`${baseUrl}/images/${hero.image}` }));


    return { ...data, heroes: heroes };
}