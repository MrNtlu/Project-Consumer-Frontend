import { BsGooglePlay } from "react-icons/bs";

export default function Custom404() {
    return (
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-6xl font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Not Available on Web 😔</h1>
                <p className="mt-6 text-2xl leading-7">You need to download the application to see the contents.</p>
                <a href="https://play.google.com/store/apps/details?id=com.mrntlu.projectconsumer">
                    <button className="bg-blue-500 inline-flex mt-8 py-3 px-5 rounded-lg items-center hover:bg-blue-700 focus:outline-none">
                        <BsGooglePlay size={25} color={"white"} />
                        <span className="ml-4 flex items-start flex-col leading-none">
                            <span className="text-xs text-gray-200 mb-1">GET IT ON</span>
                            <span className="text-white title-font font-medium">Google Play</span>
                        </span>
                    </button>
                </a>
            </div>
        </main>
    )
}