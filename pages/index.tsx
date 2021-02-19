import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { readFileSync } from 'fs';
import ResponsiveImage from '../components/ResponsiveImage';
import ResponsiveHeroImage from '../components/ResponsiveHeroImage';

type Project = {
    title: string;
    img: string;
    role: string;
    url?: string;
    copyrights?: string;
    description?: string;
};

type HomePageProps = {
    projects: Project[];
};

type ProjectListProps = HomePageProps;

export default function HomePage({ projects }: HomePageProps): React.ReactNode {
    return (
        <div className="grid grid-rows-1 grid-cols-1">
            <div className="bg-gray-900 row-start-1 col-span-full">
                <ResponsiveHeroImage
                    name="hero"
                    alt="Kuckel's rehearsal, photograph by Marta Khomenko"
                />
            </div>
            <div className="bg-gradient-to-b from-transparent to-gray-900 row-start-1 col-span-full"></div>
            <div className="row-start-1 col-span-full">
                <ProjectsList projects={projects} />
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = readFileSync(
        `${process.cwd()}/data/projects.json`,
        'utf-8'
    );

    return {
        props: {
            projects: JSON.parse(projects),
        },
    };
};

function ProjectsList({ projects }: ProjectListProps) {
    const ref = useRef();

    return (
        <Parallax ref={ref} pages={projects.length + 2}>
            <ParallaxLayer>
                <div className="w-full h-full flex items-center justify-center sm:justify-start pt-8 flex-col">
                    <h1 className="font-allura text-5xl sm:text-8xl lg:text-9xl">
                        Marta Khomenko
                    </h1>
                    <h3 className="font-open-sans-cond text-sm sm:text-base lg:text-xl uppercase">
                        Lighting designer
                    </h3>
                </div>
            </ParallaxLayer>
            {projects.map((play, index) => (
                <div key={play.title} className="group">
                    <ParallaxLayer
                        offset={index + 0.7}
                        className="flex items-center justify-center"
                    >
                        <section className="w-4/5vmin h-4/5vmin relative text-sm sm:text-base">
                            <LayerContent {...play} />
                            <article className="absolute -mr-8 mb-12 right-0 bottom-0 bg-gray-800 p-4 lg:p-8 rounded-md">
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

type LayerContentProps = Pick<
    Project,
    'img' | 'url' | 'copyrights' | 'description'
>;

function LayerContent({
    url,
    img,
    copyrights,
    description,
}: LayerContentProps) {
    return (
        <Link href={url}>
            <div className="bg-white p-2 md:p-4 lg:p-8 rounded-lg flex shadow-lg cursor-pointer w-4/5vmin h-4/5vmin">
                <div className="flex-1 bg-black relative overflow-hidden">
                    {copyrights && (
                        <small className="absolute left-0 bottom-0 z-10 font-open-sans-cond ml-2 mb-2 ">
                            &copy; {copyrights}
                        </small>
                    )}
                    <ResponsiveImage
                        className="w-full transform group-hover:scale-105 duration-500"
                        name={img}
                        alt={description}
                    />
                    <ResponsiveImage
                        className="group-hover:opacity-0 absolute inset-0 transform group-hover:scale-105 duration-500 grayscale"
                        name={img}
                        alt={description}
                    />
                </div>
            </div>
        </Link>
    );
}
