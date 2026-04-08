import {useQuery} from "@tanstack/react-query";
import {searchHero, type SearchHeroRequest} from "@/actions/SearchHero.tsx";

export const useSearchHero = (
    {    name,
    team,
    category,
    universe,
    status,
    strength}: SearchHeroRequest
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
            staleTime: 1000 * 60,
            retry: false,
        }
    );
}