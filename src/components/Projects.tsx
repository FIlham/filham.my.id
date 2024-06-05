import TrackingAnime from "./TrackingAnime";
function Projects() {
    return (
        <section id="projects">
            <h1 className="m-0 md:text-center">Karya Saya</h1>
            <h4 className="mt-2 mb-4 md:mb-8 md:text-center">Karya apa yang telah saya buat?</h4>
            <p className="font-medium w-[28rem] md:text-center md:mx-auto">Untuk karya/project biasanya saya upload di Instagram atau Github untuk sekedar publishing/promosi atau hanya sekedar untuk menyimpan nya saja.</p>
            <div className="card bg-base-content text-base-100">
                <div className="card-body">
                    <h1 className="card-title mb-0 text-base-100">Tracking Anime</h1>
                    <p className="p-0 mt-0">
                        API from{" "}
                        <a href="https://jikan.moe/" className="text-base-100">
                            Jikan.moe
                        </a>
                    </p>
                    <TrackingAnime />
                </div>
            </div>
        </section>
    );
}

export default Projects;
