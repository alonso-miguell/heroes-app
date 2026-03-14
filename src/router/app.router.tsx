import {createBrowserRouter} from "react-router";
import {AdminPage} from "@/pages/AdminPage.tsx";
import SuperheroApp from "@/pages/HomePage.tsx";
import {HeroPage} from "@/pages/HeroPage.tsx";
import {HeroLayout} from "@/layouts/HeroLayout.tsx";
import {AdminLayout} from "@/layouts/AdminLayout.tsx";
import {lazy} from "react";

const SearchPage = lazy(() => import("@/pages/SearchPage.tsx"));

export const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <HeroLayout />,
        children: [
            {
                // path: "", //we can let path empty or add index as true for indicating the root page for the path
                index:true,
                element: <SuperheroApp/>
            },
            {
                path: "hero/1",
                element: <HeroPage/>
            },
            {
                path: "search",
                element: <SearchPage/>
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <AdminPage/>
            }
        ],
    },


]);