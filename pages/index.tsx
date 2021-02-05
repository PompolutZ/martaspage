import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

export default function Home() {
    return (
        <div className="grid grid-rows-1 grid-cols-1">
            <div className="bg-gray-900 row-start-1 col-span-full">
                <img src="/hero-2.jpg" />
            </div>
            <div className="bg-gradient-to-b from-transparent to-gray-900 row-start-1 col-span-full"></div>
            <div className="row-start-1 col-span-full">
                <ProjectsList />
            </div>
        </div>
    );
}

type Play = {
    title: string;
    img: string;
    role: string;
    source?: string;
};

const plays: Play[] = [
    {
        title: 'KUCKEL',
        img: '/kuckel.jpg',
        role: 'LJUSTEKNIKER',
    },
    {
        title: 'HANSEL OCH GRETTEL',
        img: '/hansel_och_gretel.jpeg',
        role: 'LJUSTEKNIKER',
    },
    {
        title: 'PÅ SPÅNING EFTER DEN TID SOM FLYTT',
        img: '/pa_spaning.jpg',
        role: 'LJUSTEKNIKER',
    },
    {
        title: '1900',
        img: '/1900.jpg',
        role: 'LJUSTEKNIKER',
    },
    {
        title: 'KASTA LOSS',
        img: '/kasta_loss.jpeg',
        role: 'LJUSMÄSTARE',
    },
    {
        title: 'JULIUS CESAR',
        img: '/julius_cesar.jpg',
        role: 'LJUSTEKNIKER',
    },
    {
        title: 'Monster & Gudar',
        img: '/monster_och_gudar.jpg',
        role: 'LJUSTEKNIKER',
    },
    {
        title: 'Rannsakningen',
        img: '/rannsakningen.jpg',
        role: 'LJUSTEKNIKER',
    },
];

function ProjectsList() {
    const ref = useRef();

    return (
        <Parallax ref={ref} pages={plays.length + 2}>
            <ParallaxLayer>
                <div className="w-full h-full flex items-center justify-center flex-col">
                    <h1 className="font-allura text-5xl sm:text-8xl lg:text-9xl">
                        Marta Khomenko
                    </h1>
                    <h3 className="font-open-sans-cond text-sm sm:text-base lg:text-xl">
                        LJUSTEKNIKER
                    </h3>
                </div>
            </ParallaxLayer>
            {plays.map((play, index) => (
                <div key={play.title} className="group">
                    <ParallaxLayer
                        offset={index + 1}
                        className="flex items-center justify-center"
                    >
                        <LayerContent url={play.img} title={play.title} />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={index + 1}
                        speed={-0.1}
                        className="flex items-center justify-center"
                    >
                        <section className="w-4/5vmin h-4/5vmin relative">
                            <article className="absolute -mr-8 mb-12 right-0 bottom-0 bg-gray-800 p-8 rounded-md">
                                <span className="inline-block text-white uppercase font-open-sans-cond">
                                    {play.title}
                                </span>
                                <span className="inline-block text-gray-400 uppercase font-open-sans-cond">
                                    {play.role}
                                </span>
                            </article>
                        </section>
                    </ParallaxLayer>
                </div>
            ))}
        </Parallax>
    );
}

function LayerContent({ url, title }: { url: string; title: string }) {
    return (
        <div
            className="bg-white p-2 md:p-4 lg:p-8 rounded-lg flex shadow-lg cursor-pointer w-4/5vmin h-4/5vmin"
            // style={{ width: '80vmin', height: '80vmin' }}
        >
            <div className="flex-1 bg-black relative overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-105 duration-500"
                    style={{ backgroundImage: `url(${url})` }}
                ></div>
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transform group-hover:scale-105 duration-500 group-hover:opacity-0"
                    style={{
                        backgroundImage: `url(${url})`,
                        filter: 'grayscale(100%)',
                    }}
                ></div>
                {/* <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 text-9xl">
                    {title}
                </div> */}
            </div>
        </div>
    );
}
