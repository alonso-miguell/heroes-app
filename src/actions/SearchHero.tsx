import {HeroApi} from "@/api/heroes.api.tsx";
import type {Hero} from "@/interfaces/Hero.tsx";
import type {SearchHeroResponse} from "@/interfaces/SearchHeroResponse.tsx";

const baseUrl = import.meta.env.VITE_APP_URL;

export interface SearchHeroRequest {
    name?: string;
    team?: string;
    category?: string;
    universe?: string;
    status?: string;
    strength?: number;
}

export const searchHero = async ({
                                     name,
                                     team,
                                     category,
                                     universe,
                                     status,
                                     strength
                                 }: SearchHeroRequest): Promise<SearchHeroResponse> => {

    if (!name && !team && !category && !universe && !status && !strength) {
        return {heroes: []}
    }

    const {data} = await HeroApi.get<Hero[]>("/search", {
        params: {
            name,
            team,
            category,
            universe,
            status,
            strength
        }
    });

    const heroes = data.map((hero: Hero) => ({...hero, image: `${baseUrl}/images/${hero.image}`}));


    return {...data, heroes: heroes};
}