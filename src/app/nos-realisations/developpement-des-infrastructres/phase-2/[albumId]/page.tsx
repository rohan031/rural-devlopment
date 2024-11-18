import Hero from "@/components/Hero/Hero";
import React from "react";
import Container from "@/components/Container/Container";
import { LIMIT, PageInfo } from "@/data/helper";
import { Album } from "../../phase-1/page";
import ImageList from "../../components/images/ImageList";

export const revalidate = 60 * 60;

export const dynamicParams = true;

export async function generateStaticParams() {
	const url = `${process.env.NEXT_PUBLIC_API}/services/gallery/albums`;

	const albums = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_PHASE_II}`,
		},
	}).then((res) => res.json());

	if (albums.error) {
		return [];
	}

	return albums.data.albums.map((album: Album) => {
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
	const nameUrl = `${process.env.NEXT_PUBLIC_API}/services/gallery/album/${params.albumId}/name`;

	let pageInfo: PageInfo = {
		nextPage: false,
		cursor: "",
	};
	const photosPromise = fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_PHASE_II}`,
		},
	})
		.then((res) => res.json())
		.then((res) => {
			if (res.error) throw new Error(res.message);
			pageInfo = res.data.pageInfo;
			return res.data.photos;
		});
	const namePromise = fetch(nameUrl, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_PHASE_II}`,
		},
	})
		.then((res) => res.json())
		.then((res) => {
			if (res.error) throw new Error(res.message);
			return res.data;
		});

	const [photosResult, nameResult] = await Promise.allSettled([
		photosPromise,
		namePromise,
	]);

	const photos: Photos[] | null =
		photosResult.status === "fulfilled" ? photosResult.value : null;

	const name: string | null =
		nameResult.status === "fulfilled" ? nameResult.value : null;

	if (!photos) {
		return (
			<>
				<Hero heading={name ?? ""} />

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

	if (photos.length === 0) {
		return (
			<>
				<Hero heading={name ?? ""} />

				<Container
					style={{
						height: "20rem",
						display: "grid",
						placeItems: "center",
					}}
				>
					<h4>There are no photos in {name ?? "this album"}.</h4>
				</Container>
			</>
		);
	}

	return (
		<>
			<Hero heading={name ?? ""} />

			<ImageList phase2={true} pageInfo={pageInfo} url={url}>
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
