import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import { rootLinks } from "@/data/navigation";
import React from "react";
import AlbumList from "./components/album-list/AlbumList";
import AlbumItem from "./components/album-list/AlbumItem";
import { LIMIT } from "@/data/helper";

export const revalidate = 604800;

export interface Album {
	id: string;
	name: string;
	cover: string;
	createdAt: string;
}

const page = async () => {
	const url = `${process.env.NEXT_PUBLIC_API}/services/gallery/albums`;

	const albums: Album[] | null = await fetch(url, {
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

	if (!albums) {
		return (
			<>
				<Hero heading={rootLinks.infrastructureDevelopment.title} />

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

	const hasMore = albums.length === LIMIT;
	let len = albums.length;
	const cursor = albums[len - 1].createdAt;

	return (
		<>
			<Hero heading={rootLinks.infrastructureDevelopment.title} />

			<AlbumList url={url} cursor={cursor} hasMore={hasMore}>
				{albums.map((item) => {
					return <AlbumItem key={item.id} details={item} />;
				})}
			</AlbumList>
		</>
	);
};

export default page;
