function Hero() {
    return (
        <section id="home" className="py-8 h-screen relative">
            <img src="src/assets/fahmi-ilham.jpg" alt="fahmi ilham photo" className="rounded-full w-52 md:w-56 border-4 border-solid border-secondary mx-auto" />
            <div className="description px-4 prose md:mx-16 md:my-6">
                <h1 className="m-0 my-4">
                    Fahmi <span className="text-primary">Ilham</span>
                </h1>
                <p className="font-medium my-4">Seorang pemuda ulet yang selalu mencoba hal baru dalam menggapai keinginannya.</p>
                <button className="btn btn-primary">Contact Me!</button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="separator">
                <path
                    fill="oklch(48.4952% .110985 355.095988 / 1)"
                    fill-opacity="1"
                    d="M0,224L26.7,197.3C53.3,171,107,117,160,90.7C213.3,64,267,64,320,90.7C373.3,117,427,171,480,181.3C533.3,192,587,160,640,133.3C693.3,107,747,85,800,74.7C853.3,64,907,64,960,64C1013.3,64,1067,64,1120,96C1173.3,128,1227,192,1280,202.7C1333.3,213,1387,171,1413,149.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
}

export default Hero;
