import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import Link from 'next/link';

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
    url?: string;
};

const plays: Play[] = [
    {
        title: 'KUCKEL',
        img: '/kuckel.jpg',
        role: 'LJUSTEKNIKER',
        url: 'http://orionteatern.se/arkivet/kuckel/',
    },
    {
        title: 'HANSEL OCH GRETTEL',
        img: '/hansel_och_gretel.jpeg',
        role: 'LJUSTEKNIKER',
        url: 'http://orionteatern.se/arkivet/hans-och-greta/',
    },
    {
        title: 'PÅ SPÅNING EFTER DEN TID SOM FLYTT',
        img: '/pa_spaning.jpg',
        role: 'LJUSTEKNIKER',
        url:
            'http://orionteatern.se/arkivet/pa-spaning-efter-den-tid-som-flytt/',
    },
    {
        title: '1900',
        img: '/1900.jpg',
        role: 'LJUSTEKNIKER',
        url: 'http://orionteatern.se/arkivet/1900/',
    },
    {
        title: 'KASTA LOSS',
        img: '/kasta_loss.jpg',
        role: 'LJUSMÄSTARE',
        url: 'https://cirkusmania.se/program2020/kasta-loss/',
    },
    {
        title: 'JULIUS CESAR',
        img: '/julius_cesar.jpg',
        role: 'LJUSTEKNIKER',
        url: 'http://orionteatern.se/arkivet/julius-caesar/',
    },
    {
        title: 'Monster & Gudar',
        img: '/monster_och_gudar.jpg',
        role: 'LJUSTEKNIKER',
        url: 'http://orionteatern.se/arkivet/monster-gudar/',
    },
    {
        title: 'Rannsakningen',
        img: '/rannsakningen.jpg',
        role: 'LJUSTEKNIKER',
        url: 'http://orionteatern.se/arkivet/rannsakningen/',
    },
];

function ProjectsList() {
    const ref = useRef();

    return (
        <Parallax ref={ref} pages={plays.length + 2}>
            <ParallaxLayer>
                <div className="w-full h-full flex items-center justify-center sm:justify-start pt-8 flex-col">
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
                        offset={index + 0.7}
                        className="flex items-center justify-center"
                    >
                        <section className="w-4/5vmin h-4/5vmin relative">
                            <LayerContent img={play.img} url={play.url} />
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

function LayerContent({ url, img }: { img: string; url: string }) {
    return (
        <Link href={url}>
            <div className="bg-white p-2 md:p-4 lg:p-8 rounded-lg flex shadow-lg cursor-pointer w-4/5vmin h-4/5vmin">
                <div className="flex-1 bg-black relative overflow-hidden">
                    <div
                        className="w-full h-full bg-cover bg-center transform group-hover:scale-105 duration-500"
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center transform group-hover:scale-105 duration-500 group-hover:opacity-0"
                        style={{
                            backgroundImage: `url(${img})`,
                            filter: 'grayscale(100%)',
                        }}
                    ></div>
                </div>
            </div>
        </Link>
    );
}
