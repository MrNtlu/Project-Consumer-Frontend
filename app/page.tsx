import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div>
        <Image src="/static/images/logo.png" alt='Logo' height="164" width="164" />
      </div>
      <div className="flex items-center flex-grow">
        <div className="justify-center text-white grid grid-cols-1">
          <h1 className="text-center text-5xl text-white tracking-tight max-w-3xl font-semibold mb-4">
            We&apos;ll be back.
          </h1>
          <p className="text-gray-500 text-xl">
            We&apos;re busy updating the site for you and will be back soon.
          </p>
        </div>
      </div>

    </div>
  )
}
