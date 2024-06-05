import React, { FormEventHandler, useEffect, useState } from "react";

function TrackingAnime() {
    const [anime, setAnime] = useState("");
    const [animeLoading, setAnimeLoading] = useState(true);
    const [animesData, setAnimesData] = useState<any>({});

    async function handleSubmit(e: any) {
        e.preventDefault();
        setAnimeLoading(true);
        setAnimesData({});
        console.log({ anime });
        const animes = await fetch("https://api.jikan.moe/v4/anime?q=" + anime + "&sfw&limit=10");
        if (animes.status === 200) {
            const animesData = await animes.json();
            console.log({ animesData });
            setAnimeLoading(false);
            setAnimesData({ heading: "Search for " + anime, data: animesData.data });
        }
    }

    useEffect(() => {
        let active = true;
        setAnimesData({});
        fetch("https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=6")
            .then((res) => res.json())
            .then((res: any) => {
                if (active && res) {
                    setAnimeLoading(false);
                    setAnimesData({ heading: "Top Anime", data: res.data });
                }
            });

        return () => {
            active = false;
        };
    }, []);

    return (
        <div className="tracking-anime">
            <form onSubmit={handleSubmit}>
                <label className="input input-bordered flex items-center gap-2 mb-4">
                    <input type="text" className="grow text-base-content" autoComplete="off" placeholder="Track Anime" id="track-anime" value={anime} onChange={(e) => setAnime(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                        <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                    </svg>
                </label>
            </form>

            {animeLoading ? (
                <span className="loading loading-spinner loading-lg"></span>
            ) : (
                <>
                    <h1 className="text-base-100 w-full">{animesData.heading}</h1>
                    <div className="anime-list grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 lg:grid-cols-6 gap-4 mx-auto justify-items-center">
                        {animesData?.data.map((el: any, i: any) => {
                            return <Anime anime={el} key={i} />;
                        })}
                    </div>
                </>
            )}
        </div>
    );
}

function Anime({ anime }: { anime: any }) {
    return (
        <a className={`anime-${anime.mal_id} w-36 rounded-md overflow-hidden bg-base-100 text-base-content relative m-0 p-0 block`} href={anime.url}>
            <img src={anime.images.jpg.image_url} alt="anime thumb" className="w-full h-full m-0 object-cover" />
            <span className="absolute badge badge-secondary top-0 -left-2 pl-4">{anime.score}</span>
            <h4 className="absolute bottom-0 w-full text-center bg-base-100 bg-opacity-50 p-2 m-0">{anime.title.substring(0, 13) + (anime.title.length > 13 ? "..." : "")}</h4>
        </a>
    );
}

export default TrackingAnime;
