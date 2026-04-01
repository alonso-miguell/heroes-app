import {useQuery} from "@tanstack/react-query";
import {getHeroBySlug} from "@/actions/GetHeroBySlug.tsx";

export const useHeroBySlug = (slug:string) =>{
    return useQuery(
        {
            queryKey: ['hero', {slug}],
            queryFn: () => getHeroBySlug(slug),
            staleTime: 1000 * 10, //5 seconds
        }
    );
}