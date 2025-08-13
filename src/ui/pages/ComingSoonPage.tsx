export default function ComingSoonPage() {
    return (
        <main className="flex items-center justify-center min-h-screen px-6 text-center bg-background text-foreground">
            <div className="max-w-xl space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Something exciting is on the way!
                </h1>
                <p className="text-lg text-muted-foreground">
                    We’re a young startup still crafting our first products. While things are
                    under construction, rest assured — something great is coming your way soon.
                </p>
                <p className="text-base text-muted-foreground">
                    In the meantime, feel free to check out our other resources or reach out to us
                    at <span className="font-medium text-primary">cebras@thecebras.com</span>.
                </p>
            </div>
        </main>
    )
}
