"use client";

import React, { useCallback, useRef, useState } from "react";
import Container from "../Container/Container";
import styles from "./blogList.module.scss";
import { Blog } from "@/data/blog-category";
import { useIntersection } from "@/hooks/intersetion-observer/intersection-observer";
import ListItem from "./ListItem";
import { LIMIT, PageInfo } from "@/data/helper";
import Loader from "../Loader/Loader";
import { Phase } from "@/data/phases";

interface BlogListProps {
	children: React.ReactNode;
	url: string;
	pageInfo: PageInfo;
	phase: Phase;
}

const BlogList = ({ children, pageInfo, url, phase }: BlogListProps) => {
	const [moreBlogs, setMoreblogs] = useState<Blog[]>([]);
	const pageInfoRef = useRef<PageInfo>(pageInfo);

	const [loading, setLoading] = useState<boolean>(false);

	const fetchMoreBlogs = async () => {
		if (loading) return;
		if (!pageInfoRef.current.nextPage) return;

		setLoading(true);

		let cursor = pageInfoRef.current.cursor;
		let token = process.env.NEXT_PUBLIC_TOKEN;
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		let cursorUrl = url + `?cursor=${cursor}`;

		fetch(cursorUrl, {
			method: "GET",
			headers,
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.error) throw new Error(res.message);
				pageInfoRef.current = res.data.pageInfo;
				setMoreblogs((prev) => {
					const newBlogs = res.data.blogs.filter(
						(blog: Blog) =>
							!prev.some(
								(existingBlog) =>
									existingBlog.blogId === blog.blogId
							)
					);
					return [...prev, ...newBlogs];
				});
			})
			.catch((err) => {
				console.error("can't fetch more blogs");
			})
			.finally(() => setLoading(false));
	};

	const callback: IntersectionObserverCallback = useCallback(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					fetchMoreBlogs();
				}
			});
		},
		[]
	);

	const elementRef = useIntersection(callback);

	return (
		<>
			<Container className={styles.container}>
				{children}
				{moreBlogs.length > 0 &&
					moreBlogs.map((item) => {
						return (
							<ListItem
								key={item.blogId}
								details={item}
								phase={phase}
							></ListItem>
						);
					})}
				<div
					style={{
						visibility: "hidden",
					}}
					ref={elementRef}
				></div>
			</Container>

			{loading && <Loader variant="small" />}
		</>
	);
};

export default BlogList;
