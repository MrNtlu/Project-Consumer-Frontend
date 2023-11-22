import Image from 'next/image';
import React from 'react'

const API_URL = process.env.BASE_URL;

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

    return (
        <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={movieDetails.backdrop || movieDetails.image_url}
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
              {movieDetails.title_en || movieDetails.title_original}
            </h2>
            <p className="text-lg mb-3">
              <span className="font-semibold mr-1">Overview:</span>
              {movieDetails.description}
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
