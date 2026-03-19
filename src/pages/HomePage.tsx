
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {HeroHeader} from "@/components/heroes/HeroHeader.tsx";
import {HeroStatsDashboard} from "@/components/heroes/HeroStatsDashboard.tsx";
import {HeroGrid} from "@/components/heroes/HeroGrid.tsx";
import {useState} from "react";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import {CustomMenu} from "@/components/custom/CustomMenu.tsx";
import {CustomBreadcrumbs} from "@/components/custom/CustomBreadcrumbs.tsx";

type HeroTab = | "all"
    | "favorites"
    | "heroes"
    | "villains";


export default function SuperheroApp() {

    const [heroTab, setHeroTab] = useState<HeroTab>("all");
    return (
        <>
            <>
                {/* Header */}
                <HeroHeader
                    title="Superhero Universe"
                    description="Discover, explore, and manage your favorite superheroes and villains"
                />
                

                <CustomBreadcrumbs currentPage="Super Héroes" />


                {/* Stats Dashboard */}
                <HeroStatsDashboard />

                {/* Tabs */}
                <Tabs value={heroTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger onClick={() => setHeroTab('all')} value="all">All Characters (16)</TabsTrigger>
                        <TabsTrigger onClick={() => setHeroTab('favorites')} value="favorites"> Favorites
                            (3) </TabsTrigger>
                        <TabsTrigger onClick={() => setHeroTab('heroes')} value="heroes">Heroes (12)</TabsTrigger>
                        <TabsTrigger onClick={() => setHeroTab('villains')} value="villains">Villains (2)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ALL</div>
                        {/* Character Grid */}
                        <HeroGrid/>
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
                <CustomPagination totalPages={8} currentPage={3} />
            </>
        </>
    )
}