import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {HeroHeader} from "@/components/heroes/HeroHeader.tsx";
import {HeroStatsDashboard} from "@/components/heroes/HeroStatsDashboard.tsx";
import {HeroGrid} from "@/components/heroes/HeroGrid.tsx";
import {useEffect, useMemo, useState} from "react";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import {CustomBreadcrumbs} from "@/components/custom/CustomBreadcrumbs.tsx";
import {getHeroesByPage} from "@/actions/GetHeroesByPage.tsx";
import {useQuery} from "@tanstack/react-query";
import {useSearchParams} from "react-router";

export default function SuperheroApp() {

    // const [heroTab, setHeroTab] = useState<HeroTab>("all");
    const [searchParams, setSearchParams] = useSearchParams('?tab=all');
    const selectedTab = searchParams.get("tab") ?? 'all'; //uses ?? to assign all if tab is null or undefined
    const page = searchParams.get("page") ?? '1';
    const limit = searchParams.get("limit") ?? '6';

    /*
    This creates a dtaobject using tanstack query which will track
    TTL for that data and autonmatically updated it when it has
    expired and it's required  again
     */

    /**
     * Whenever using params for a request we need to also add them to tan stackquery
     * to refresh these as dependencies.
     * Since these url params aren't strictly positional we should use {} to indicate that
     * order doens't matter:
     * {'page':page, 'limit': limit }
     *
     * Or since the keys/variables share the same name
     * {page, limit}
     *
     * Without {} we would be indicating that the params are positional (strict param order)
     */
    const {data} = useQuery(
        {
            queryKey: ['heroes', {page, limit}],
            queryFn: () => getHeroesByPage(Number(limit),Number(page)),
            staleTime: 1000 * 10, //5 seconds
        }
    );

    console.log(`data: ${data}`);


    // useEffect(() => {
    //     getHeroesByPage().then(console.log);
    // }, []);



    //we use Memo to keep track of valid tabs, this will return all iuf the tab is invalid but it will stay the same in the url
    //we dopn't use a type because those are erased at runtime
    const memoTab = useMemo(() => {
        const validTabs = ["all", "favorites", "heroes", "villains"];
        return validTabs.includes(selectedTab) ? selectedTab : "all";
    }, [selectedTab])

    return (
        <>
            <>
                {/* Header */}
                <HeroHeader
                    title="Superhero Universe"
                    description="Discover, explore, and manage your favorite superheroes and villains"
                />


                <CustomBreadcrumbs currentPage="Super Héroes"/>


                {/* Stats Dashboard */}
                <HeroStatsDashboard/>

                {/* Tabs */}
                <Tabs value={memoTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        {/*<TabsTrigger onClick={() => setHeroTab('all')} value="all">All Characters (16)</TabsTrigger>*/}

                        {/*USING setSearchParams('?tab=all') works but deletes other params
                        so we used prev to keep other params and only set the tab */}
                        <TabsTrigger
                            value="all"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'all');
                                return prev;
                            })}>
                            All Characters (16)
                        </TabsTrigger>

                        <TabsTrigger
                            value="favorites"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'favorites');
                                return prev;
                            })}>
                            Favorites (3)
                        </TabsTrigger>

                        <TabsTrigger
                            value="favorites"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'heroes');
                                return prev;
                            })}>
                            Heroes (12)
                        </TabsTrigger>

                        <TabsTrigger
                            value="favorites"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'villains');
                                return prev;
                            })}>
                            Villains (2)
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ALL</div>
                        {/* Character Grid */}
                        <HeroGrid heroes={data?.heroes ? data.heroes : []}/>
                    </TabsContent>

                    <TabsContent value="favorites">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> FAVORITES</div>
                    </TabsContent>

                    <TabsContent value="heroes">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> HEROES</div>
                    </TabsContent>

                    <TabsContent value="villains">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> VILLAINS</div>
                    </TabsContent>
                </Tabs>


                {/* Pagination */}
                <CustomPagination totalPages={data?.pages ?? 1 }/>
            </>
        </>
    )
}