import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const socialIcon = [
        {
            img: "/images/icon/github-icon.svg",
            href: "https://github.com/Swotboysandy",
            icon: "GitHub"
        },
        {
            img: "/images/icon/linkedin-icon.svg",
            href: "https://www.linkedin.com/in/s7-chauhan/",
            icon: "LinkedIn"
        },
        {
            img: "/images/icon/twitter-icon.svg",
            href: "https://x.com/swotboysandy",
            icon: "Twitter"
        },
    ];
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image src={"/images/hero-sec/banner-bg-img.png"} alt="banner-img" width={1080} height={267} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image src={"https://avatars.githubusercontent.com/u/121404041?v=4"} alt="user-img" width={145} height={145} className="border-4 border-background rounded-full bg-background" />
                                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1>Sunny Kishor Singh</h1>
                                <p className="text-violet-700 font-normal">Full Stack Developer</p>
                                <div className="flex items-center gap-2">
                                    <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} className="invert" />
                                    <p className="text-primary">India</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {socialIcon?.map((value, index) => {
                                        return (
                                            <Link href={value?.href} key={index} className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full">
                                                <Image src={value?.img} alt={value?.icon} width={18} height={18} className="invert" />
                                            </Link>
                                        )
                                    })}
                                </div>
                                <Button asChild className="h-auto rounded-full p-0.5! shadow-[0_0_20px_rgba(146,130,248,0.2)] hover:shadow-[0_0_30px_rgba(146,130,248,0.4)] transition-all duration-300">
                                    <Link
                                        href="mailto:sunnysinghchauhan760@gmail.com"
                                        className="inline-block p-[1px] rounded-full bg-[linear-gradient(96.09deg,_#9282F8_0%,_#F3CA4D_100%)]"
                                    >
                                        <span className="flex items-center gap-3 bg-white hover:bg-black group/btn py-2.5 px-6 rounded-full transition-all duration-300">
                                            <Image
                                                src="/images/icon/spark-icon.svg"
                                                alt="spark-icon"
                                                width={16}
                                                height={16}
                                                className="animate-pulse invert group-hover/btn:invert-0"
                                            />
                                            <span className="text-sm sm:text-base font-bold text-black group-hover/btn:text-white tracking-wide transition-colors">Get in touch</span>
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

