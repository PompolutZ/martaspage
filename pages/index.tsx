import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

export default function Home() {
    return (
        <div className="grid grid-rows-1 grid-cols-1">
            <div className="bg-gray-900 row-start-1 col-span-full">
                <img src="/hero.jpg" />
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
    source?: string;
};

const plays: Play[] = [
    {
        title: 'KUCKEL',
        img: '/kuckel.jpg',
    },
    {
        title: 'PÅ SPÅNING EFTER DEN TID SOM FLYTT',
        img: '/pa_spaning.jpg',
    },
    {
        title: 'JULIUS CESAR',
        img: '/julius_cesar.jpg',
    },
    {
        title: '1900',
        img: '/1900.jpg',
    },
    {
        title: 'KASTA LOSS',
        img: '/kasta_loss.jpeg',
    },
    {
        title: 'HANSEL OCH GRETTEL',
        img: '/hansel_och_gretel.jpeg',
    },
];

function ProjectsList() {
    const ref = useRef();

    return (
        <Parallax ref={ref} pages={plays.length + 2}>
            {plays.map((play, index) => (
                <ParallaxLayer
                    key={play.title}
                    offset={index + 1}
                    className="flex items-center justify-center"
                >
                    <LayerContent url={play.img} title={play.title} />
                </ParallaxLayer>
            ))}
        </Parallax>
    );
}

function LayerContent({ url, title }: { url: string; title: string }) {
    return (
        <div
            className="bg-white p-8 rounded-lg flex shadow-lg cursor-pointer group"
            style={{ width: '80vmin', height: '80vmin' }}
        >
            <div className="flex-1 bg-black relative">
                <div
                    className="w-full h-full bg-cover bg-center flex group-hover:opacity-50 transition"
                    style={{ backgroundImage: `url(${url})` }}
                ></div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 text-9xl">
                    {title}
                </div>
            </div>
        </div>
    );
}
