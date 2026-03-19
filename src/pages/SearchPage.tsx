import {HeroHeader} from "@/components/heroes/HeroHeader.tsx";
import {HeroStatsDashboard} from "@/components/heroes/HeroStatsDashboard.tsx";
import {SearchControls} from "@/components/heroes/SearchControls.tsx";
import {SearchFilters} from "@/components/heroes/SearchFilters.tsx";
import {CustomBreadcrumbs} from "@/components/custom/CustomBreadcrumbs.tsx";

export const SearchPage=()=>{
    return (
        <>
            <HeroHeader
                title="Superhero Universe Search"
                description="Discover, explore, and manage your favorite superheroes and villains"
            />

            <CustomBreadcrumbs
                currentPage="Buscador de héroes"
                breadcrumbs={[
                  { label: 'Home1', to: '/' },
                  { label: 'Home2', to: '/' },
                  { label: 'Home3', to: '/' },
                ]}
            />

            <HeroStatsDashboard/>
            <SearchControls />
            <SearchFilters />

        </>


    )
};

export default SearchPage;