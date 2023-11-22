import Image from 'next/image';
import React from 'react'

const API_URL = process.env.BASE_URL;

export async function generateMetadata({ params }) {
  const movieId = params.id;

  const res = await fetch(`${API_URL}/movie/details?id=${movieId}`);
  const { data: movieDetails } = await res.json();

  // Dynamic metadata
  const pageTitle = movieDetails.title_en || movieDetails.title_original;
  const description = movieDetails.description;
  const imageUrl = movieDetails.backdrop || movieDetails.image_url;

  return {
    title: pageTitle,
    description: description,
    openGraph: {
      type: 'website',
      url: `https://watchlistfy.com/movie/${movieId}`,
      title: pageTitle,
      description: description,
      images: [{ url: imageUrl, alt: 'Movie Poster' }],
    },
    twitter: {
      cardType: 'summary_large_image',
      title: pageTitle,
      description: description,
      images: [imageUrl],
    },
  };
}

async function getMovieDetails(movieId) {
    const res = await fetch(
        `${API_URL}/movie/details?id=${movieId}`,
        { next: { revalidate: 10000 } }
    )

    return await res.json();
}

export default async function MovieDetailsPage({ params }) {
    const data = await getMovieDetails(params.id);
    const movieDetails = data.data;

    const movieTitle = movieDetails.title_en || movieDetails.title_original;
    const movieDescription = movieDetails.description;
    const movieImage = movieDetails.backdrop || movieDetails.image_url;

    return (
      <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={movieImage}
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
              {movieTitle}
            </h2>
            <p className="text-lg mb-3">
              <span className="font-semibold mr-1">Overview:</span>
              {movieDescription}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Date Released:</span>
              {movieDetails.release_date || "Unknown"}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Rating:</span>
              {movieDetails.tmdb_vote}
            </p>
          </div>
        </div>
      </div>
    );
}
