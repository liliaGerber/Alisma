import React, {useEffect, useMemo} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {resolveColorBG, resolveColorText, resolveThemeTextHover} from "@/config/ThemeProvider";
// ⬇️ Replace with your actual data import path
import posts from "@/assets/data/posts.json";

type Post = {
    id: string;
    title: string;
    summary?: string;
    text?: string;
    label?: string;
    author?: string;
    published?: string;
    url?: string;
    image?: string;
    tags?: string[];
};

export default function BlogPostPage() {
    const {id} = useParams<{ id: string }>();
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const accentBG = resolveColorBG(pathname);                 // e.g. "bg-modernmen"
    const accentText = resolveColorText(pathname);             // e.g. "text-modernmen-600"
    const accentTextHover = resolveThemeTextHover(pathname);   // e.g. "text-modernmen-600 hover:text-modernmen-300"
    const accentBorder = useMemo(() => accentBG.replace("bg-", "border-"), [accentBG]);
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    const post = useMemo<Post | undefined>(() => {
        if (!Array.isArray(posts)) return undefined;
        return posts.find((p: Post) => p.id === id);
    }, [id]);

    if (!post) {
        return (
            <main className="mx-auto max-w-4xl px-6 py-16">
                <div className={`rounded-xl border ${accentBorder} p-6`}>
                    <h1 className={`text-2xl font-extrabold ${accentText}`}>Beitrag nicht gefunden</h1>
                    <p className="mt-2 text-foreground/80">Der angeforderte Beitrag existiert nicht oder wurde
                        verschoben.</p>
                    <button
                        onClick={() => navigate(-1)}
                        className={`mt-4 inline-flex items-center gap-2 underline ${accentTextHover}`}
                    >
                        ← Zurück
                    </button>
                </div>
            </main>
        );
    }

    const {
        title,
        summary,
        text,
        label,
        author = "ALISMA",
        published,
        url,
        image,
        tags = [],
    } = post;

    // Split plain text into paragraphs; if you use Markdown, swap this for a MD renderer
    const paragraphs = (text ?? "").trim()
        ? (text as string).split(/\n{2,}/g)
        : [];

    return (
        <main className="w-full ">
            {/* Hero */}
            <section className="relative w-full top-20 mb-20">
                <div className={`absolute inset-x-0 `}/>
                <div className="mx-auto max-w-6xl px-6 pt-30 sm:pt-12 ">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                        {/* Title + Meta */}
                        <div className="lg:col-span-7">
                            {label && (
                                <span
                                    className={`inline-flex items-center rounded-full ${accentBG} text-primary px-3 py-1 text-xs font-semibold`}>
                  {label}
                </span>
                            )}
                            <h1 className={`mt-3 text-3xl sm:text-4xl font-extrabold leading-tight ${accentText}`}>
                                {title}
                            </h1>
                            {summary && (
                                <p className="mt-3 text-base sm:text-lg text-foreground/80">
                                    {summary}
                                </p>
                            )}
                            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-foreground/60">
                                {author && <span>Von {author}</span>}
                                {published && (
                                    <>
                                        <span>•</span>
                                        <time>{published}</time>
                                    </>
                                )}
                                {url && (
                                    <>
                                        <span>•</span>
                                        <a href={url} className={`underline ${accentTextHover}`}>
                                            alisma.at
                                        </a>
                                    </>
                                )}
                            </div>
                            {tags.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`inline-flex items-center rounded-md border ${accentBorder} bg-primary-600 px-2.5 py-1 text-xs font-medium text-foreground/70`}
                                        >
                      #{tag}
                    </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        {/* Image */}
                        <div className="lg:col-span-5">
                            <div className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-zinc-100">
                                <div className="aspect-[16/9] w-full">
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={title}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className={`h-full w-full ${accentBG} opacity-20`}/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Body */}
            <section className="relative mx-auto max-w-6xl px-6 py-30 sm:py-12 ">
                <article className="">
                    {paragraphs.length > 0 ? (
                        <div className="rounded-2xl border border-zinc-200/70  p-6 sm:p-8 shadow-sm">
                            {paragraphs.map((p, i) => (
                                <p key={i} className="text-foreground/85 leading-relaxed">
                                    {p}
                                </p>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-zinc-200/70  p-6 shadow-sm">
                            <p className="text-foreground/75">
                                Für diesen Beitrag liegt derzeit kein ausführlicher Text vor.
                            </p>
                        </div>
                    )}
                </article>

                {/* Back & More */}
                <div className="mt-8 flex items-center justify-between">

                    {/* Optional: link to /news */}
                    <a href="/news" className={`underline ${accentTextHover}`}>
                        Alle Beiträge
                    </a>
                </div>
            </section>
        </main>
    );
}
