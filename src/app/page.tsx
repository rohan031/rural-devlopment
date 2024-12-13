import Hero from "@/components/Home/Hero/Hero";
import Map from "@/components/Home/Map/Map";
import Opportunities from "@/components/Home/Opportunities/Opportunities";
import Project from "@/components/Home/Project/Project";
import Video from "@/components/Home/Video/Video";
import Word from "@/components/Home/Word/Word";
import { Blog, categoryIdMap } from "@/data/blog-category";
import React from "react";

export const revalidate = 60 * 60;

const limit = 3;

const categories = [
	categoryIdMap["Appels d'offres"],
	categoryIdMap["Appel à Manifestation d’Intérêt (AMI)"],
];

const Home = async () => {
	const promises = categories.map((item) => {
		const url = `${process.env.NEXT_PUBLIC_API}/services/blogs/category/${item}`;
		return fetch(url, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
			},
		});
	});

	const results = await Promise.allSettled(promises);
	const blogs: Blog[][] = [];
	for (const result of results) {
		if (result.status === "fulfilled") {
			var res = await result.value.json();

			if (res.error) {
				blogs.push([]);
				continue;
			}

			const tempBlogs: Blog[] = res.data.blogs;
			blogs.push(tempBlogs.slice(0, limit));
		} else {
			blogs.push([]);
		}
	}

	return (
		<>
			<Hero />
			<Word />
			<Project />
			<Map />

			<Opportunities blogs={blogs} />
			<Video />
		</>
	);
};

export default Home;
