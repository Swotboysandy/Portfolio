import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
    const servicesBedge = ["React", "Next.js", "JavaScript", "TypeScript", "React Native", "Expo", "Node.js", "PHP", "Laravel", "WordPress", "Webflow", "Shopify", "Framer", "REST APIs", "GSAP", "UI/UX"];
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">About Me</p>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">Full Stack Developer with 3+ years of experience in web and mobile development. Skilled in <span className="bg-[linear-gradient(90deg,_rgba(146,130,248,0.2)_0%,_rgba(146,130,248,0)_100%)] border-b border-[#9282F8]/40">React, Next.js, and React Native</span>. Experienced with WordPress, Webflow, and building high-performance solutions.</h2>
                            <h5 className="text-primary/60 font-normal">Currently leading frontend projects at DraftssTech, and pursuing MCA at VIT Vellore.</h5>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-primary uppercase font-medium">Technical Skills</p>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {servicesBedge?.map((value, index) => {
                                    return (
                                        <Badge variant={"outline"} key={index} className="py-1.5 px-3 rounded-lg">
                                            <p className="text-xs sm:text-sm font-medium text-primary">{value}</p>
                                        </Badge>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe