import Hero from "@/components/Hero/Hero";
import { BlogItem } from "@/data/blog-category";
import React from "react";
import "@/styles/abstracts/blog.scss";
import styles from "./difficulties.module.scss";
import Container from "@/components/Container/Container";
import SocialShare from "@/components/socialShare/SocialShare";

const blogId = "dc45b058-9035-4922-b6c5-c38293f2fa69";

export const revalidate = 604800;

const DifficultiesPage = async () => {
	const url = `${process.env.NEXT_PUBLIC_API}/services/blog/${blogId}`;
	const blogItem: BlogItem | null = await fetch(url, {
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

	if (!blogItem) {
		return (
			<>
				<Hero heading="Difficultés" />

				<div className={styles.empty}>
					<p>Oops! Something went wrong.</p>
				</div>
			</>
		);
	}

	let blogHTML = {
		__html: blogItem.content,
	};

	return (
		<>
			<Hero heading="Difficultés" />

			<Container className={styles.container}>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={blogHTML}
				></div>

				<SocialShare title={blogItem.title} />
			</Container>
		</>
	);
};

export default DifficultiesPage;
