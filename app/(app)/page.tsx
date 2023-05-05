import Image from "next/image";
import fastIcon from "@/public/fast.png";
import simpleIcon from "@/public/simple.png";
import secureIcon from "@/public/secure.png";
import {Hero} from "@/app/components/server/hero";

export const runtime = 'edge';

const HomePage = () => {
    return (
        <div>
            <Hero />

            <div className={"px-5 xl:px-20 py-5 grid grid-cols-1 md:grid-cols-3 gap-5"}>

                <div className="p-7 flex flex-col items-center border border-gray-200 rounded-md shadow xl:flex-row xl:space-x-10 xl:max-w-xl bg-gray-100 md:bg-white hover:bg-gray-100">
                    <Image
                        className="object-cover w-28 md:rounded-none md:rounded-l-lg"
                        src={simpleIcon}
                        alt="simple"
                        priority
                    />
                    <div className="flex flex-col justify-between leading-normal space-y-2 mt-3 xl:mt-0">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                            Simple
                        </h5>
                        <p className="font-normal text-gray-700">
                            Our simplicity is so intuitive, that even your pet goldfish could use it.
                        </p>
                    </div>
                </div>

                <div className="p-7 flex flex-col items-center border border-gray-200 rounded-md shadow xl:flex-row xl:space-x-10 xl:max-w-xl bg-gray-100 md:bg-white hover:bg-gray-100">
                    <Image
                        className="object-cover w-16 md:rounded-none md:rounded-l-lg"
                        src={fastIcon}
                        alt="fast"
                        priority
                    />
                    <div className="flex flex-col justify-between leading-normal space-y-2 mt-2 xl:mt-0">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                            Fast
                        </h5>
                        <p className="font-normal text-gray-700">
                            Our over-engineered app is so fast, you&apos;ll need to watch out for the effects of relativity.
                        </p>
                    </div>
                </div>

                <div className="p-7 flex flex-col items-center border border-gray-200 rounded-md shadow xl:flex-row xl:space-x-10 xl:max-w-xl bg-gray-100 md:bg-white hover:bg-gray-100">
                    <Image
                        className="object-cover w-24 md:rounded-none md:rounded-l-lg"
                        src={secureIcon}
                        alt="secure"
                        priority
                    />
                    <div className="flex flex-col justify-between leading-normal space-y-2 mt-3 xl:mt-0">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                            Secured
                        </h5>
                        <p className="font-normal text-gray-700">
                            I bet you will wonder if we have built a digital Fort Knox just for you.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default HomePage;