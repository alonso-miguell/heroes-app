import {createBrowserRouter} from "react-router";
import {AdminPage} from "@/pages/AdminPage.tsx";
import {HomePage} from "@/pages/HomePage.tsx";
import {HeroPage} from "@/pages/HeroPage.tsx";
import {SearchPage} from "@/pages/SearchPage.tsx";
import {HeroLayout} from "@/layouts/HeroLayout.tsx";
import {AdminLayout} from "@/layouts/AdminLayout.tsx";

export const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <HeroLayout />,
        children: [
            {
                // path: "", //we can let path empty or add index as true for indicating the root page for the path
                index:true,
                element: <HomePage/>
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