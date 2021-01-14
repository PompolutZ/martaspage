import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

export default function Home() {
    return (
        <div className="grid grid-rows-3 grid-cols-1">
            <div className="bg-gray-900 row-start-1 col-span-full">
                <img src="/hero.jpg" />
            </div>
            <div className="bg-gradient-to-b from-transparent to-gray-900 row-start-1 col-span-full"></div>

            <div className="row-start-2 col-span-full">
                <ProjectsList />
            </div>
        </div>
    );
}

function ProjectsList() {
    const ref = useRef();

    return (
        <Parallax ref={ref} pages={3}>
            <ParallaxLayer offset={0} speed={1} className="bg-red-500">
                <img src="/kuckel.jpg" />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1} className="bg-purple-500">
                <img src="/kasta_loss.jpeg" />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1} className="bg-green-500">
                <img src="/1900.jpg" />
            </ParallaxLayer>
        </Parallax>
    );
}
