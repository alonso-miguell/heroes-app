import type {Hero} from "@/interfaces/Hero.tsx";
import {createContext, type PropsWithChildren, useEffect, useState} from "react";

interface HeroesContextProps {
    favorites: Hero[],
    favoritesCount: number,
    toggleFavorite: (hero:Hero) => void,
    isFavorite:(slug:string)=>boolean,
}

export const HeroesContext = createContext<HeroesContextProps>({} as HeroesContextProps);

export const HeroesContextProvider=({children}: PropsWithChildren)=>{

    const localHeroes=localStorage.getItem("heroes");
    const parsedHeroes:Hero[]= localHeroes!=null? JSON.parse(localHeroes): [];

    const[ heroes, setHeroes] = useState<Hero[]>(parsedHeroes);

    const favoritesCount:number= heroes.length;

    useEffect(() => {
        localStorage.setItem("heroes",JSON.stringify(heroes));
    }, [heroes]);

    const isFavorite=(slug:string)=>{
        return heroes.some(hero=> hero.slug===slug );
    }

    const toggleFavorite=(hero:Hero)=>{

        if(heroes.some(favorites=> favorites.slug===hero.slug )){
            setHeroes( heroes.filter(favorites=>favorites.slug!==hero.slug) );
        }
        else{
            setHeroes([...heroes , hero]);
        }

    }

    const initialHeroContext: HeroesContextProps={
        favorites: heroes,
        favoritesCount,
        toggleFavorite,
        isFavorite,
    }

    return (
        <HeroesContext value={initialHeroContext}>
            {children}
        </HeroesContext>
    )

}