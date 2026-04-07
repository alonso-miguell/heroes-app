import {useQuery} from "@tanstack/react-query";
import {searchHero} from "@/actions/SearchHero.tsx";

export const useSearchHero = (
    name?: string,
    team?: string,
    category?: string,
    universe?: string,
    status?: string,
    strength?: number,
) => {
    return useQuery(
        {
            queryKey: ['searchedHeroes', {
                name,
                team,
                category,
                universe,
                status,
                strength
            }],
            queryFn: () => searchHero({
                name,
                team,
                category,
                universe,
                status,
                strength
            }),
            staleTime: 1000 * 10, //5 seconds
            retry: false,
        }
    );
}