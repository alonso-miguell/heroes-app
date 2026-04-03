import {RouterProvider} from "react-router";
import {appRouter} from "@/router/app.router.tsx";
import {useEffect} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {HeroesContextProvider} from "@/HeroesContext.tsx";

export const HeroesApp = () => {

    const queryClient = new QueryClient()
    // Access the client
    // const queryClient = useQueryClient()
    //
    // // Queries
    // const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })
    //
    // // Mutations
    // const mutation = useMutation({
    //     mutationFn: postTodo,
    //     onSuccess: () => {
    //         // Invalidate and refetch
    //         queryClient.invalidateQueries({ queryKey: ['todos'] })
    //     },
    // })
    return (

        <>
            <QueryClientProvider client={queryClient}>
                <HeroesContextProvider>
                    <RouterProvider router={appRouter}/>
                    <ReactQueryDevtools initialIsOpen={false}/>
                </HeroesContextProvider>
            </QueryClientProvider>
        </>
    )
}