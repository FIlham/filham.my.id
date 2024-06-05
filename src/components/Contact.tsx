import { Icon } from "@iconify/react/dist/iconify.mjs";

function Contact() {
    return (
        <section id="contacts" className="my-8 max-w-2xl mx-auto z-20">
            <div className="card bg-base-200 text-base-content">
                <div className="card-body">
                    <h1 className="card-title text-3xl m-0 p-0 font-[800]">
                        Fahmi Ilham <span className="text-primary">S.</span>
                    </h1>
                    <p className="mb-4 mt-0 p-0">Layanan yang bisa dihubungi.</p>
                    <div className="flex gap-4 w-full">
                        <Icon icon="mdi:instagram" style={{ color: "oklch(16.9617% 0.001664 17.32068 / 1)" }} width={30} />

                        <a href="https://www.instagram.com/filham._">filham._</a>
                    </div>
                    <div className="flex gap-4 w-full">
                        <Icon icon="mdi:github" style={{ color: "oklch(16.9617% 0.001664 17.32068 / 1)" }} width={30} />
                        <a href="https://github.com/filham">filham</a>
                    </div>
                    <div className="flex gap-4 w-full">
                        <Icon icon="ic:baseline-email" style={{ color: "oklch(16.9617% 0.001664 17.32068 / 1)" }} width={30} />
                        <a href="mailto:fahmiilham281207@gmail.com">fahmiilham281207@gmail.com</a>
                    </div>
                    <div className="flex gap-4 w-full place-items-end">
                        <Icon icon="ic:baseline-telegram" style={{ color: "oklch(16.9617% 0.001664 17.32068 / 1)" }} width={30} />
                        <a href="https://t.me/thefilham">thefilham</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
