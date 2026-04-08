import {Button} from "@/components/ui/button.tsx";
import {Accordion, AccordionContent, AccordionItem} from "@/components/ui/accordion.tsx";
import {Slider} from "@/components/ui/slider.tsx";
import {useSearchParams} from "react-router";

interface SearchFiltersProps {
    toggleValue: string[];
}

export const SearchFilters = (props: SearchFiltersProps) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const selectedStrength = searchParams.get("strength") ? Number(searchParams.get("strength")) : 3;


    return (
        <>
            {/* Advanced Filters  value={activeAccordion} */}
            <Accordion multiple={false} value={props.toggleValue}>
                <AccordionItem value="advanced-filters">
                    <AccordionContent>
                        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">Advanced Filters</h3>
                                <Button variant="ghost">Clear All</Button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Team</label>
                                    <div
                                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                        All teams
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Category</label>
                                    <div
                                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                        All categories
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Universe</label>
                                    <div
                                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                        All universes
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Status</label>
                                    <div
                                        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                        All statuses
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="text-sm font-medium">
                                    Minimum Strength: {selectedStrength}/10
                                </label>
                                <Slider
                                    defaultValue={[selectedStrength]}
                                    onValueChange={(value) => {
                                        // console.log({value});
                                        setSearchParams(prev => {
                                            prev.set('strength', value.toString());
                                            return prev;
                                        });
                                    }
                                    }
                                    max={10}
                                    step={1}
                                />
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </>
    );
}