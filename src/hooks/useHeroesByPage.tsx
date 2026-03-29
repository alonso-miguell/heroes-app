import {useQuery} from "@tanstack/react-query";
import {getHeroesByPage} from "@/actions/GetHeroesByPage.tsx";

export const useHeroesByPage = (page:string, limit: string, category: string) =>{
    return useQuery(
        {
            queryKey: ['heroes', {page, limit, category}],
            queryFn: () => getHeroesByPage(Number(limit),Number(page), category),
            staleTime: 1000 * 10, //5 seconds
        }
    );
}