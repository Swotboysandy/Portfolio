import Link from "next/link"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-background border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-7 py-4 md:py-7">
                        <p className="text-primary">© 2025 swotboysandy. All rights reserved.</p>
                        <p className="text-primary">Built with ❤️</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer