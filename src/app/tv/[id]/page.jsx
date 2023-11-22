import Image from 'next/image';
import React from 'react'
import { Banner } from "../../../../public/static/images/twitter_banner.png"
import Head from 'next/head';

const API_URL = process.env.BASE_URL;

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
        <Head>
          <title>{movieTitle}</title>
          <meta name="description" content={tvDescription} />

          {/* Twitter metadata */}
          <meta name="twitter:card" content={tvDetails.backdrop || Banner} />
          <meta name="twitter:title" content={tvTitle} />
          <meta name="twitter:description" content={tvDescription} />
          <meta name="twitter:image" content={tvImage} />

          {/* Facebook Open Graph metadata */}
          <meta property="og:title" content={tvTitle} />
          <meta property="og:description" content={tvDescription} />
          <meta property="og:image" content={tvImage} />
          <meta property="og:url" content={`${API_URL}/tv/${params.id}`} />
          <meta property="og:type" content="website" />
        </Head>

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
