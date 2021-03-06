import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collab from "../components/Collab";
import Collaborators from "../components/Collaborators";
import CurrentTeam from "../components/CurrentTeam";
import Miniprofile from "../components/Miniprofile";
import Profilehero from "../components/Profilehero";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import CurrentProjects from "../components/CurrentProjects";
import PastProjects from "../components/PastProjects";
import Connect from "../components/Connect";
import Activity from "../components/Activity";
import Miniprop from "../components/Miniprop";

export default function IndexPage() {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(false);
    const [deliverables, setDeliverables] = useState(false);
    const [profile, setProfile] = useState(false);
    return (
        <>
            <div>
                <Header />
            </div>
            {/* Top Section */}
            <div>
                <Profilehero />
            </div>
            {/* Top Section Ends */}
            {/* Body Section */}

            <div className="container pt-6 mx-auto">
                <div className="flex flex-wrap gap-0">
                    {/* Left Side */}
                    <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
                        <Collab />
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="rounded " />
                    </div>
                    {/* Left Side Ends */}
                    {/* Right Side Begins */}
                    <div className="md:w-1/3 w-full items-center sm:w-full">
                        <Miniprofile />

                        <div className="rounded flex w-full h-auto" />
                    </div>
                    {/* Right Side Ends */}
                </div>

            </div>
            {/* Stats Section Begins */}
            <div>
                <Stats />
            </div>
            {/* Stats Section Ends */}
            {/* Individual Section Begins */}
            <div className="container pt-6 mx-auto">
                <div className="flex flex-wrap gap-0">
                    {/* Left Side Begins */}
                    <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
                        <CurrentTeam />
                        <div className="rounded " />
                    </div>
                    <div className="md:w-1/3 w-full items-center sm:w-full">
                        <Activity />

                        <div className="rounded flex w-full h-auto" />
                    </div>
                    <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
                        <Collaborators />
                        <div className="rounded " />
                    </div>
                    <div>
                        <Miniprop />
                    </div>
                    {/* Left Side Ends */}


                    {/* Right Side Ends */}
                </div>
                {/* Top Section Ends */}
            </div>

            {/* Individual Section Ends */}
            {/* Testimonial Section Begins */}
            <div className="xs:hidden">
                <Testimonial />
            </div>
            {/* Testimonial Section Ends */}
            <div>
                <CurrentProjects />
            </div>
            <div>
                <PastProjects />
            </div>
            {/* Connect Section Begins */}
            <div>
                <Connect />
            </div>
            {/* Connect Section Ends */}
            {/* Body Ends */}
            <div className="">
                {/* Footer */}
                <Footer className="flex items-center" />

            </div>
        </>
    );
}
