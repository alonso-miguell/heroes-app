import {createBrowserRouter} from "react-router";
import {AdminPage} from "@/pages/AdminPage.tsx";
import {HomePage} from "@/pages/HomePage.tsx";
import {HeroPage} from "@/pages/HeroPage.tsx";
import {SearchPage} from "@/pages/SearchPage.tsx";

export const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/admin",
        element: <AdminPage/>
    },
    {
        path: "/hero/1",
        element: <HeroPage/>
    },
    {
        path: "/search",
        element: <SearchPage/>
    },
]);