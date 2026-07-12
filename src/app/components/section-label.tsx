interface SectionLabelProps {
    children: React.ReactNode;
    className?: string;
}

// Shared section eyebrow used across every page for a consistent visual rhythm.
const SectionLabel = ({ children, className = "" }: SectionLabelProps) => (
    <div className={`mb-5 flex items-center gap-2.5 ${className}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa] shadow-[0_0_8px_rgba(96,165,250,0.7)]" />
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-zinc-400">{children}</span>
    </div>
);

export default SectionLabel;
