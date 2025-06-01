import BlogList from "@/components/BlogList/BlogList";
import ListItem from "@/components/BlogList/ListItem";
import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import {
	Blog,
	categoryIdPhase2Map,
	categoryPhase2Map,
} from "@/data/blog-category";
import { PageInfo } from "@/data/helper";
import { Phase } from "@/data/phases";
import React from "react";

export const revalidate = 60 * 60;

const category = "Contrats";

const ContratsPage = async () => {
	const url = `${process.env.NEXT_PUBLIC_API}/services/blogs/category/${
		categoryIdPhase2Map[category as keyof typeof categoryIdPhase2Map]
	}`;

	let pageInfo: PageInfo = {
		nextPage: false,
		cursor: "",
	};

	const blogs: Blog[] | null = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_PHASE_II}`,
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
				<Hero
					heading={
						categoryPhase2Map[
							category as keyof typeof categoryPhase2Map
						].title
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
						categoryPhase2Map[
							category as keyof typeof categoryPhase2Map
						].title
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

	return (
		<>
			<Hero
				heading={
					categoryPhase2Map[
						category as keyof typeof categoryPhase2Map
					].title
				}
			/>

			<BlogList pageInfo={pageInfo} url={url} phase={Phase.TWO}>
				{blogs.map((item) => {
					return (
						<ListItem
							key={item.blogId}
							details={item}
							phase={Phase.TWO}
						></ListItem>
					);
				})}
			</BlogList>
		</>
	);
};

export default ContratsPage;
