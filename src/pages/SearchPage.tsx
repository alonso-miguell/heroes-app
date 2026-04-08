import {HeroHeader} from "@/components/heroes/HeroHeader.tsx";
import {HeroStatsDashboard} from "@/components/heroes/HeroStatsDashboard.tsx";
import {SearchControls} from "@/components/heroes/SearchControls.tsx";
import {CustomBreadcrumbs} from "@/components/custom/CustomBreadcrumbs.tsx";
import {HeroGrid} from "@/components/heroes/HeroGrid.tsx";
import {useSearchParams} from "react-router";
import {useSearchHero} from "@/hooks/useSearchHero.tsx";

export const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name") ?? "";
    const strength = Number(searchParams.get("strength")) ?? 0;

    const {data: searchResponse, isLoading} = useSearchHero({name, strength});

    if (isLoading) {
        return (
            <div> LOADING...</div>
        )
    }

    return (
        <>
            <HeroHeader
                title="Superhero Universe Search"
                description="Discover, explore, and manage your favorite superheroes and villains"
            />

            <CustomBreadcrumbs
                currentPage="Buscador de héroes"
                breadcrumbs={[
                    {label: 'Home1', to: '/'},
                    {label: 'Home2', to: '/'},
                    {label: 'Home3', to: '/'},
                ]}
            />

            <HeroStatsDashboard/>
            <SearchControls/>

            <HeroGrid heroes={searchResponse?.heroes ?? []}/>


        </>


    )
};

export default SearchPage;