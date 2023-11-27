import Image from 'next/image';
import React from 'react'

const API_URL = process.env.BASE_URL;

export async function generateMetadata({ params }) {
  const gameId = params.id;

  const res = await fetch(`${API_URL}/game/details?id=${gameId}`);
  const { data: gameDetails } = await res.json();

  // Dynamic metadata
  const pageTitle = gameDetails.title_en || gameDetails.title_original;
  const description = gameDetails.description;
  const imageUrl = gameDetails.backdrop || gameDetails.image_url;

  return {
    title: pageTitle,
    description: description,
    openGraph: {
      type: 'website',
      url: `https://watchlistfy.com/game/${gameId}`,
      title: pageTitle,
      description: description,
      images: [{ url: imageUrl, alt: 'Game Poster' }],
    },
    twitter: {
      cardType: 'summary_large_image',
      title: pageTitle,
      description: description,
      images: [imageUrl],
    },
  };
}

async function getGameDetails(gameId) {
    const res = await fetch(
        `${API_URL}/game/details?id=${gameId}`,
        { next: { revalidate: 10000 } }
    )

    return await res.json();
}

export default async function GameDetailsPage({ params }) {
    const data = await getGameDetails(params.id);
    const gameDetails = data.data;

    const gameTitle = gameDetails.title_en || gameDetails.title_original;
    const gameDescription = gameDetails.description;
    const gameImage = gameDetails.backdrop || gameDetails.image_url;

    return (
      <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={gameImage}
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
              {gameTitle}
            </h2>
            <p className="text-lg mb-3">
              <span className="font-semibold mr-1">Overview:</span>
              {gameDescription.replace(/<\/?p>/g, '')}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Date Released:</span>
              {gameDetails.release_date || "Unknown"}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Rating:</span>
              {gameDetails.rawg_rating}
            </p>
          </div>
        </div>
      </div>
    );
}