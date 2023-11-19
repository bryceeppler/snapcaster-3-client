// Props for the Button component

type Props = {
    className?: string;
    variant?: "default" | "outline";
    children: React.ReactNode;
};


export default function Button({ className, variant, children }: Props) {
    const variants = {
        default: "bg-zinc-900 text-white p-4 shadow-lg rounded-lg text-lg font-bold hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-100",
        outline: "bg-transparent text-zinc-900 border border-zinc-900 p-4 shadow-lg rounded-lg text-lg font-bold hover:bg-zinc-50 dark:text-zinc-50 dark:border-zinc-50 dark:hover:bg-zinc-900",
    };

    return (
        <button className={`${variants[variant || "default"]} ${className}`}>
            {children}
        </button>
    );
}
