import React from "react";
function Index() {
    return (
        <>
            <div className="container pt-6 mx-auto">
                <div className="flex flex-wrap gap-0">
                     {/* Left Side Begins */}
                    <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
                        
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded border-gray-300  dark:border-gray-700 border-2 h-24" />
                    </div>
                     {/* Left Side Ends */}
                     {/* Right Side Begins */}
                    <div className="md:w-1/3 w-full -ml-4">
                        
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded border-gray-300  dark:border-gray-700 border-2 h-24" />
                    </div>
                     {/* Right Side Ends */}
                </div>
            </div>
        </>
    );
}
export default Index;
