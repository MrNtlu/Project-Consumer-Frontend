import Image from 'next/image';
import React from 'react'

const API_URL = process.env.BASE_URL;

export async function generateMetadata({ params }) {
  const animeId = params.id;

  const res = await fetch(`${API_URL}/anime/details?id=${animeId}`);
  const { data: animeDetails } = await res.json();

  // Dynamic metadata
  const pageTitle = animeDetails.title_en || animeDetails.title_original;
  const description = animeDetails.description;
  const imageUrl = animeDetails.backdrop || animeDetails.image_url;

  return {
    title: pageTitle,
    description: description,
    openGraph: {
      type: 'website',
      url: `https://watchlistfy.com/anime/${animeId}`,
      title: pageTitle,
      description: description,
      images: [{ url: imageUrl, alt: 'Anime Poster' }],
    },
    twitter: {
      cardType: 'summary_large_image',
      title: pageTitle,
      description: description,
      images: [imageUrl],
    },
  };
}

async function getAnimeDetails(animeId) {
    const res = await fetch(
        `${API_URL}/anime/details?id=${animeId}`,
        { next: { revalidate: 10000 } }
    )

    return await res.json();
}

export default async function AnimeDetailsPage({ params }) {
    const data = await getAnimeDetails(params.id);
    const animeDetails = data.data;

    const animeTitle = animeDetails.title_en || animeDetails.title_original;
    const animeDescription = animeDetails.description;
    const animeImage = animeDetails.backdrop || animeDetails.image_url;

    return (
      <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={animeImage}
            width={500}
            height={300}
            className="rounded-lg"
            style={{
              maxWidth: "100%",
              height: "100%",
            }}
            placeholder="blur"
            blurDataURL="/image_spinner.svg"
            alt="Movie poster" />
          <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">
              {animeTitle}
            </h2>
            <p className="text-lg mb-3">
              <span className="font-semibold mr-1">Overview:</span>
              {animeDescription}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Date Released:</span>
              {animeDetails.release_date || "Unknown"}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Rating:</span>
              {animeDetails.mal_score}
            </p>
          </div>
        </div>
      </div>
    );
}