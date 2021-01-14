export default function Home() {
    return (
        <div className="grid grid-rows-3 grid-cols-1">
            <div className="bg-gray-900 row-start-1 col-span-full">
                <img src="/hero.jpg" />
            </div>
            <div className="bg-gradient-to-b from-transparent to-gray-900 row-start-1 col-span-full"></div>
        </div>
    );
}
