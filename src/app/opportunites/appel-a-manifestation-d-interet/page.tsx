import BlogList from "@/components/BlogList/BlogList";
import ListItem from "@/components/BlogList/ListItem";
import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import { Blog, categoryIdMap, categoryMap } from "@/data/blog-category";
import { LIMIT } from "@/data/helper";
import React from "react";

export const revalidate = 60 * 60;

const category = "Appel à Manifestation d’Intérêt (AMI)";

const ContratsPage = async () => {
	const url = `${process.env.NEXT_PUBLIC_API}/services/blogs/category/${
		categoryIdMap[category as keyof typeof categoryIdMap]
	}`;

	const blogs: Blog[] | null = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
		},
	})
		.then((res) => res.json())
		.then((res) => {
			if (res.error) throw new Error(res.message);
			return res.data;
		})
		.catch((err) => {
			console.error(err.message);
			return null;
		});

	if (!blogs) {
		return (
			<>
				<Hero
					heading={
						categoryMap[category as keyof typeof categoryMap].title
					}
				/>

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
				<Hero
					heading={
						categoryMap[category as keyof typeof categoryMap].title
					}
				/>

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

	const hasMore = blogs.length === LIMIT;
	let len = blogs.length;
	const cursor = blogs[len - 1].createdAt;

	return (
		<>
			<Hero
				heading={
					categoryMap[category as keyof typeof categoryMap].title
				}
			/>

			<BlogList hasMore={hasMore} url={url} cursor={cursor}>
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
