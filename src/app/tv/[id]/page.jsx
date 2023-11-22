import Image from 'next/image';
import React from 'react'

const API_URL = process.env.BASE_URL;

export async function generateMetadata({ params }) {
  const tvId = params.id;

  const res = await fetch(`${API_URL}/tv/details?id=${tvId}`);
  const { data: tvDetails } = await res.json();

  // Dynamic metadata
  const pageTitle = tvDetails.title_en || tvDetails.title_original;
  const description = tvDetails.description;
  const imageUrl = tvDetails.backdrop || tvDetails.image_url;

  return {
    title: pageTitle,
    description: description,
    openGraph: {
      type: 'website',
      url: `https://watchlistfy.com/tv/${tvId}`,
      title: pageTitle,
      description: description,
      images: [{ url: imageUrl, alt: 'TV Series Poster' }],
    },
    twitter: {
      cardType: 'summary_large_image',
      title: pageTitle,
      description: description,
      images: [imageUrl],
    },
  };
}

async function getTVDetails(tvId) {
    const res = await fetch(
        `${API_URL}/tv/details?id=${tvId}`,
        { next: { revalidate: 10000 } }
    )

    return await res.json();
}

export default async function TVDetailsPage({ params }) {
    const data = await getTVDetails(params.id);
    const tvDetails = data.data;

    const tvTitle = tvDetails.title_en || tvDetails.title_original;
    const tvDescription = tvDetails.description;
    const tvImage = tvDetails.backdrop || tvDetails.image_url;

    return (
      <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={tvImage}
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
              {tvTitle}
            </h2>
            <p className="text-lg mb-3">
              <span className="font-semibold mr-1">Overview:</span>
              {tvDescription}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Date Released:</span>
              {tvDetails.release_date || "Unknown"}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Rating:</span>
              {tvDetails.tmdb_vote}
            </p>
          </div>
        </div>
      </div>
    );
}
