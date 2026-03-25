import {HeroGridCard} from "@/components/heroes/HeroGridCard.tsx";
import type {Hero} from "@/interfaces/Hero.tsx";

interface HeroGridProps {
    heroes: Hero[],
}

export const HeroGrid=( {heroes}:HeroGridProps)=>{
    return(
      <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {
                  heroes.map((hero, index) => (
                      <HeroGridCard hero={hero} key={index}/>
                  ))
              }
          </div>
      </>
    );
}