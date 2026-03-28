import {useQuery} from "@tanstack/react-query";
import {getSummary} from "@/actions/GetSummary.tsx";

export const useSummary = () =>{
    return useQuery(
        {
            queryKey: ['summary'],
            queryFn: () => getSummary(),
            staleTime: 1000 * 10, //5 seconds
        }
    );
}