import {ChevronLeft, ChevronRight, MoreHorizontal} from "lucide-react";
import {Button} from "@/components/ui/button.tsx"
import {useSearchParams} from "react-router";

interface Props {
    totalPages: number;
}

export const CustomPagination = ({totalPages=3}:Props) => {
    const[searchParams, setSearchParams ]= useSearchParams();
    const page=searchParams.get("page") ?? "1";

    //extra validation when getting validations from URL using searchParams
    const currentPage= isNaN(Number(page))? 1: Number(page);
    const handlePageChange = (page:number):void => {
        if(page<1 || page>totalPages){
            return;
        }

        setSearchParams( (prev) =>{
            prev.set('page', String(page));
            return prev;
        });
    }


    return (
        <>
            <div className="flex items-center justify-center space-x-2">
                <Button variant="outline" size="sm" disabled={currentPage===1 }
                        onClick={ ()=>handlePageChange(currentPage-1)} >
                <ChevronLeft className="h-4 w-4"/>
                    Previous
                </Button>

                {
                    /**
                     * In JSX you can't use for loops directly — you need an expression that returns a value.
                     * That's why Array.from().map() is the idiomatic React pattern.
                     *
                     * The {length: totalPages} trick creates an array-like object with totalPages slots
                     * and map iterates over them.
                     * The _ is just convention for "I don't need this argument" (the element value,
                     * which is undefined).
                     */
                    Array.from({length: totalPages}).map ((_, i) =>(
                        <Button key={i} variant={i+1===currentPage?`default`:`outline` } size="sm"
                                onClick={ () => handlePageChange(i+1)} >
                        {i+1}
                        </Button>
                    ))
                }


                <Button variant="ghost" size="sm" >
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>

                <Button variant="outline" size="sm" disabled={currentPage===totalPages }
                         onClick={ () => handlePageChange(currentPage+1)} >
                    Next
                    <ChevronRight className="h-4 w-4"/>
                </Button>
            </div>
        </>);
}