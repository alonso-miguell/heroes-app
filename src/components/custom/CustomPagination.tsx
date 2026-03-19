import {ChevronLeft, ChevronRight, MoreHorizontal} from "lucide-react";
import {Button} from "@/components/ui/button.tsx"

interface Props {
    totalPages: number;
    currentPage: number;
}

export const CustomPagination = ({totalPages=3, currentPage=2}:Props) => {

    return (
        <>
            <div className="flex items-center justify-center space-x-2">
                <Button variant="outline" size="sm" disabled={currentPage===1 }>
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
                        <Button key={i} variant={i+1===currentPage?`default`:`outline` } size="sm">
                            {i+1}
                        </Button>
                    ))
                }


                <Button variant="ghost" size="sm" >
                    <MoreHorizontal className="h-4 w-4"/>
                </Button>

                <Button variant="outline" size="sm" disabled={currentPage===1 }>
                    Next
                    <ChevronRight className="h-4 w-4"/>
                </Button>
            </div>
        </>);
}