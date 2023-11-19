// Card
export function Card({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <div className="shadow overflow-hidden border-b border-zinc-200 dark:border-zinc-800 rounded-lg w-full max-w-3xl">
        {children}
        </div>
    )
    }


// Card Content without clsx
export function CardContent({
    children,
    className,
    }: {
    children: React.ReactNode
    className?: string
    }) {
    return (
        <div className={`px-4 py-5 bg-white dark:bg-zinc-900 sm:p-6 ${className}`}>
        {children}
        </div>
    )
    }
