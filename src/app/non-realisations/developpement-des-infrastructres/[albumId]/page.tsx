import Hero from "@/components/Hero/Hero";
import React from "react";
import { Album } from "../page";
import Container from "@/components/Container/Container";
import { LIMIT } from "@/data/helper";
import ImageList from "../components/images/ImageList";
import { rootLinks } from "@/data/navigation";

export const revalidate = 604800;

export const dynamicParams = true;

export async function generateStaticParams() {
	const url = `${process.env.NEXT_PUBLIC_API}/services/gallery/albums`;

	const albums = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
		},
	}).then((res) => res.json());

	if (albums.error) {
		return [];
	}

	return albums.data.map((album: Album) => {
		return {
			albumId: album.id,
		};
	});
}

export interface Photos {
	id: string;
	image: string;
	createdAt: string;
}

const page = async ({ params }: { params: { albumId: string } }) => {
	const url = `${process.env.NEXT_PUBLIC_API}/services/gallery/album/${params.albumId}`;

	const photos: Photos[] | null = await fetch(url, {
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

	if (!photos) {
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

	const hasMore = photos.length === LIMIT;
	let len = photos.length;
	const cursor = photos[len - 1].createdAt;

	return (
		<>
			<Hero heading={rootLinks.infrastructureDevelopment.title} />

			<ImageList hasMore={hasMore} cursor={cursor} url={url}>
				<div>
					{photos.map((item) => {
						return (
							<a key={item.id} href={item.image} target="_blank">
								<img src={item.image} alt="" />
							</a>
						);
					})}
				</div>
			</ImageList>
		</>
	);
};

export default page;
