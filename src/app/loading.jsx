import Image from "next/image";

export default function loading() {
  return (
      <div className="flex justify-center">
        <Image className="scale-150" src="/spinner.svg" width={124} height={124} alt="Loading..." />
      </div>
    );
  }