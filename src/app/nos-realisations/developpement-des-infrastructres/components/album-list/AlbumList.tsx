"use client";

import React, { useCallback, useRef, useState } from "react";

import { useIntersection } from "@/hooks/intersetion-observer/intersection-observer";
import { LIMIT } from "@/data/helper";
import Container from "@/components/Container/Container";
import Loader from "@/components/Loader/Loader";
import styles from "./albumList.module.scss";
import AlbumItem from "./AlbumItem";
import { Album } from "../../phase-1/page";

interface AlbumListProps {
	children: React.ReactNode;
	hasMore: boolean;
	url: string;
	cursor: string;
}

const AlbumList = ({ children, hasMore, url, cursor }: AlbumListProps) => {
	const [moreAlbums, setMoreAlbums] = useState<Album[]>([]);
	const hasMoreRef = useRef<boolean>(hasMore);
	const cursorRef = useRef<string>(cursor);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchMoreAlbums = async () => {
		if (!hasMoreRef.current || loading) return;

		setLoading(true);

		let cursor = cursorRef.current;
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
				let len = res.data.length;
				if (len < LIMIT) {
					hasMoreRef.current = false;
				}

				if (len <= 0) return;

				cursorRef.current = res.data[len - 1].createdAt;
				setMoreAlbums((prev) => {
					const newAlbums = res.data.filter(
						(album: Album) =>
							!prev.some(
								(exitingAlbum) => exitingAlbum.id === album.id
							)
					);
					return [...prev, ...newAlbums];
				});
			})
			.catch((err) => {
				console.error("can't fetch more albums");
			})
			.finally(() => setLoading(false));
	};

	const callback: IntersectionObserverCallback = useCallback(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					fetchMoreAlbums();
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

				{moreAlbums.map((item) => {
					return <AlbumItem key={item.id} details={item} />;
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

export default AlbumList;
