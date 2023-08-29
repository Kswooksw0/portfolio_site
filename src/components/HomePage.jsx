import React from "react";
// import SketchWrapper from "./SketchWrapper";
import P5Sketch from "./sketch";
// import { Navbar } from "./Navbar";

const HomePage = () => {
	return (
		<div className="flex w-screen">
			<P5Sketch/>
            <div className="w-fit absolute top-1/4 left-72 z-10 text-7xl font-bold leading-relaxed" >
                I'm Sangwoo <br/>
                Web Developer <br/>
                Blockchain Enthusiast
            </div>
		</div>
	);
};

export default HomePage;
