import React from "react";
import { Icon } from "@iconify/react";

function About() {
    return (
        <>
            <section id="about" className="relative bg-secondary text-secondary-content md:flex justify-center items-center flex-col">
                <h1 className="m-0 text-secondary-content">Tentang Saya</h1>
                <h4 className="mt-2 mb-4 md:mb-8 text-secondary-content">Apa yang spesial dari saya?</h4>
                <div className="about-me md:flex justify-around items-start min-w-full">
                    <div className="information">
                        <p className="max-w-[28rem] font-medium">
                            Saya Fahmi Ilham, seorang pemuda yang hidup di suatu tempat di Surabaya, Jawa Timur, Indonesia. Saya mempunyai pengalaman dalam dunia pemrograman selama kurang lebih 5 tahun, serta mempunyai bakat di bidang
                            fotografi serta editing foto dan video.
                        </p>
                        <p className="font-medium">
                            Lihat aktivitas saya di <br />
                            <div className="links">
                                <a href="https://www.instagram.com/filham._">
                                    <Icon icon="mdi:instagram" width={35} height={35} style={{ color: "oklch(89.699% 0.022197 355.095988 / 1)" }} className="z-50 static  inline mr-2" />
                                </a>
                                <a href="https://github.com/filham">
                                    <Icon icon="mdi:github" style={{ color: "oklch(89.699% 0.022197 355.095988 / 1)" }} width={35} height={35} className=" inline" />
                                </a>
                            </div>
                        </p>
                    </div>

                    <div className="card bg-secondary-content text-base-content md:w-[35rem]">
                        <div className="card-body">
                            <h1 className="card-title">Kemampuan Saya</h1>
                            <div className="contents md:flex flex-wrap justify-between">
                                <div className="programming-skill md:w-56">
                                    <Icon icon="icon-park:code" className=" inline" width={35} />
                                    <p className="m-0 p-0">Pemrograman</p>
                                    <progress className="progress w-full mr-4" value={86} max={100}></progress>
                                    <span>86%</span>
                                </div>
                                <div className="photography-skill md:w-56">
                                    <Icon icon="mdi:photography" className=" inline" width={35} />
                                    <p className="m-0 p-0">Fotografi</p>
                                    <progress className="progress w-full mr-4" value={54} max={100}></progress>
                                    <span>54%</span>
                                </div>
                                <div className="editing-skill md:w-56">
                                    <Icon icon="hugeicons:global-editing" className=" inline" width={35} />
                                    <p className="m-0 p-0">Editing Foto/video</p>
                                    <progress className="progress w-full mr-4" value={46} max={100}></progress>
                                    <span>46%</span>
                                </div>
                                <div className="programming-skill md:w-56">
                                    <Icon icon="mdi:speaking" className=" inline" width={35} />
                                    <p className="m-0 p-0">Public Speaking</p>
                                    <progress className="progress w-full mr-4" value={78} max={100}></progress>
                                    <span>78%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="bg-secondary">
                <path
                    fill="oklch(92.9519% .002163 17.197414 / 1)"
                    fill-opacity="1"
                    d="M0,64L34.3,80C68.6,96,137,128,206,117.3C274.3,107,343,53,411,32C480,11,549,21,617,26.7C685.7,32,754,32,823,42.7C891.4,53,960,75,1029,69.3C1097.1,64,1166,32,1234,16C1302.9,0,1371,0,1406,0L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
            </svg>
        </>
    );
}

export default About;
