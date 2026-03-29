import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {HeroHeader} from "@/components/heroes/HeroHeader.tsx";
import {HeroStatsDashboard} from "@/components/heroes/HeroStatsDashboard.tsx";
import {HeroGrid} from "@/components/heroes/HeroGrid.tsx";
import {useEffect, useMemo, useState} from "react";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import {CustomBreadcrumbs} from "@/components/custom/CustomBreadcrumbs.tsx";
import {useSearchParams} from "react-router";
import {useSummary} from "@/hooks/useSummary.tsx";
import {useHeroesByPage} from "@/hooks/useHeroesByPage.tsx";

export default function SuperheroApp() {

    // const [heroTab, setHeroTab] = useState<HeroTab>("all");
    const [searchParams, setSearchParams] = useSearchParams('?tab=all');
    const selectedTab = searchParams.get("tab") ?? 'all'; //uses ?? to assign all if tab is null or undefined
    const page = searchParams.get("page") ?? '1';
    const limit = searchParams.get("limit") ?? '6';
    const category = searchParams.get("category") ?? 'all';

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
    const {data:heroesByPage} = useHeroesByPage(page, limit, category);

    const {data:summary} = useSummary();


    console.log(`data: ${heroesByPage}`);


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
                                prev.set('category', 'all');
                                prev.set('page', '1');
                                return prev;
                            })}>
                            All Characters ({summary?.totalHeroes})
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
                            value="heroes"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'heroes');
                                prev.set('category', 'hero');
                                prev.set('page', '1');
                                return prev;
                            })}>
                            Heroes ({summary?.heroCount})
                        </TabsTrigger>

                        <TabsTrigger
                            value="villains"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'villains');
                                prev.set('category', 'villain');
                                prev.set('page', '1');
                                return prev;
                            })}>
                            Villains ({summary?.villainCount})
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ALL</div>
                        {/* Character Grid */}
                        <HeroGrid heroes={heroesByPage?.heroes ? heroesByPage.heroes : []}/>
                    </TabsContent>

                    <TabsContent value="favorites">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> FAVORITES</div>
                        <HeroGrid heroes={heroesByPage?.heroes ? heroesByPage.heroes : []}/>
                    </TabsContent>

                    <TabsContent value="heroes">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> HEROES</div>
                        <HeroGrid heroes={heroesByPage?.heroes ? heroesByPage.heroes : []}/>
                    </TabsContent>

                    <TabsContent value="villains">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> VILLAINS</div>
                        <HeroGrid heroes={heroesByPage?.heroes ? heroesByPage.heroes : []}/>
                    </TabsContent>
                </Tabs>


                {/* Pagination */}
                <CustomPagination totalPages={heroesByPage?.pages ?? 1 }/>
            </>
        </>
    )
}