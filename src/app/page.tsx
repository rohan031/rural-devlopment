import Hero from "@/components/Home/Hero/Hero";
import Map from "@/components/Home/Map/Map";
import Opportunities from "@/components/Home/Opportunities/Opportunities";
import Project from "@/components/Home/Project/Project";
import Video from "@/components/Home/Video/Video";
import Word from "@/components/Home/Word/Word";
import React from "react";

const Home = () => {
	return (
		<>
			<Hero />
			<Word />
			<Project />
			<Map />

			<Opportunities />
			<Video />
		</>
	);
};

export default Home;
