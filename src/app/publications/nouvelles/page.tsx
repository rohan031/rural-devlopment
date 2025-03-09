import BlogList from "@/components/BlogList/BlogList";
import ListItem from "@/components/BlogList/ListItem";
import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import { Blog, categoryIdMap, categoryMap, news } from "@/data/blog-category";
import { LIMIT, PageInfo } from "@/data/helper";
import React from "react";

export const revalidate = 60 * 60;

const ContratsPage = async () => {
	const url = `${process.env.NEXT_PUBLIC_API}/services/blogs/category/${news}`;

	let pageInfo: PageInfo = {
		nextPage: false,
		cursor: "",
	};

	const blogs: Blog[] | null = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
		},
	})
		.then((res) => res.json())
		.then((res) => {
			if (res.error) throw new Error(res.message);

			pageInfo = res.data.pageInfo;
			return res.data.blogs;
		})
		.catch((err) => {
			console.error(err.message);
			return null;
		});

	if (!blogs) {
		return (
			<>
				<Hero heading={"Nouvelles"} />

				<Container
					style={{
						height: "20rem",
						display: "grid",
						placeItems: "center",
					}}
				>
					<h4>Oops! Something went wrong.</h4>
				</Container>
			</>
		);
	}

	if (blogs.length === 0) {
		return (
			<>
				<Hero heading={"Nouvelles"} />

				<Container
					style={{
						height: "20rem",
						display: "grid",
						placeItems: "center",
					}}
				>
					<h4>There are no items here.</h4>
				</Container>
			</>
		);
	}

	return (
		<>
			<Hero heading={"Nouvelles"} />

			<BlogList pageInfo={pageInfo} url={url}>
				{blogs.map((item) => {
					return (
						<ListItem key={item.blogId} details={item}></ListItem>
					);
				})}
			</BlogList>
		</>
	);
};

export default ContratsPage;
