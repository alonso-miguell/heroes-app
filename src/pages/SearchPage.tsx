import {HeroHeader} from "@/components/custom/HeroHeader.tsx";
import {HeroStatsBoard} from "@/components/custom/HeroStatsBoard.tsx";
import {SearchControls} from "@/components/custom/SearchControls.tsx";
import {SearchFilters} from "@/components/custom/SearchFilters.tsx";

export const SearchPage=()=>{
    return (
        <>
            <HeroHeader
                title="Superhero Universe Search"
                description="Discover, explore, and manage your favorite superheroes and villains"
            />

            <HeroStatsBoard/>
            <SearchControls />
            <SearchFilters />

        </>


    )
};

export default SearchPage;