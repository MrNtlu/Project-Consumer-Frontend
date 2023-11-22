import Image from "next/image";
import Link from "next/link";

export default function Card({ type, result }) {
    const isGame = type === "game";

    return (
        <div className="cursor-pointer sm:shadow-md rounded-lg sm:m-2 transition-shadow duration-200 group">
        <Link href={`/${type}/${result._id}`}>
            <Image
                src={result.image_url}
                width={500}
                height={100}
                className="rounded-lg sm:rounded-t-lg group-hover:opacity-50 transition-opacity duration-200"
                style={{
                    maxWidth: "100%",
                    height: isGame ? "75%" : "auto",
                }}
                placeholder="blur"
                blurDataURL="/image_spinner.svg"
                alt="Image is not available"
            />
            <div className="p-2">
                <h2 className="truncate text-lg font-bold text-justify">
                    {result.title_en || result.title_original}
                </h2>
            </div>
        </Link>
        </div>
  );
}