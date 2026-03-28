import {HeroApi} from "@/api/heroes.api.tsx";
import type {HeroResponse} from "@/interfaces/HeroResponse.tsx";
import type {Hero} from "@/interfaces/Hero.tsx";

const baseUrl= import.meta.env.VITE_APP_URL;

export const getHeroesByPage = async (limit:number, page:number):Promise<HeroResponse> => {
    // We add failsafe values instead the paramas in the url have been manipulated and not getting a number
    // NaN "Not a Number" — a special JS value you get when a numeric operation fails,
    // example converting invalid strung value to a number
    if(isNaN(limit)){
        limit=6;
    }
    if(isNaN(page)){
        page=1;
    }

    //This just calls the BaseUrl ${BASE_URL}/api/heroes with a get method
    const {data}= await HeroApi.get("/", { params: { limit, offset: (page-1) * limit } });

    const heroes= data.heroes.map((hero:Hero) => ({ ...hero, image:`${baseUrl}/images/${hero.image}` }));


    return { ...data, heroes: heroes };
}