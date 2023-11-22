import Image from 'next/image';
import React from 'react'
import { Banner } from "../../../../public/static/images/twitter_banner.png"
import Head from 'next/head';

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

    const movieTitle = movieDetails.title_en || movieDetails.title_original;
    const movieDescription = movieDetails.description;
    const movieImage = movieDetails.backdrop || movieDetails.image_url;

    return (
      <div className="w-full">
        <Head>
          <title>{movieTitle}</title>
          <meta name="description" content={movieDescription} />

          {/* Twitter metadata */}
          <meta name="twitter:card" content={movieDetails.backdrop || Banner} />
          <meta name="twitter:title" content={movieTitle} />
          <meta name="twitter:description" content={movieDescription} />
          <meta name="twitter:image" content={movieImage} />

          {/* Facebook Open Graph metadata */}
          <meta property="og:title" content={movieTitle} />
          <meta property="og:description" content={movieDescription} />
          <meta property="og:image" content={movieImage} />
          <meta property="og:url" content={`${API_URL}/movie/${params.id}`} />
          <meta property="og:type" content="website" />
        </Head>

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
