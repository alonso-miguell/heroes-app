import {useQuery} from "@tanstack/react-query";
import {getHeroesByPage} from "@/actions/GetHeroesByPage.tsx";

export const useHeroesByPage = (page:string, limit: string) =>{
    return useQuery(
        {
            queryKey: ['heroes', {page, limit}],
            queryFn: () => getHeroesByPage(Number(limit),Number(page)),
            staleTime: 1000 * 10, //5 seconds
        }
    );
}