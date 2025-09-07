import {ArrowRight} from "lucide-react";

import {Card} from "@/ui/components/shadcn/card";
import posts from "@/assets/data/posts.json"
import {Link} from "react-router-dom";

interface Post {
    id: string;
    title: string;
    summary: string;
    label: string;
    author: string;
    published: string;
    url: string;
    image: string;
    tags?: string[];
}

interface Blog8Props {
    heading?: string;
    description?: string;
    posts?: Post[];
}

const Blog8 = ({
                   heading = "Blog Posts",
                   description = "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
               }: Blog8Props) => {
    return (
        <section className="py-32 px-15 lg:px-5">
            <div className="container flex flex-col items-center gap-10">
                <div className="text-center">
                    <h2 className="mx-auto mb-6 text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl">
                        {heading}
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                        {description}
                    </p>
                </div>

                <div className="grid gap-y-10 grid-cols-1 lg:grid-cols-12 sm:gap-y-10 md:gap-y-20 lg:gap-y-25">
                    {posts.map((post) => (
                        <Card
                            key={post.id}
                            className="order-last border-transparent bg-transparent shadow-none sm:order-first w-full col-span-full lg:col-span-10 lg:col-start-2"
                        >
                            <div
                                className="grid grid-cols-1 lg:grid-cols-10 gap-y-5 sm:gap-x-5 lg:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                                <div className=" col-span-5 w-[95%] mx-auto">
                                    <div className="mb-4">
                                        <div
                                            className="flex flex-wrap gap-2 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                                            {post.tags?.map((tag) => <span key={tag}
                                                                           className={"bg-primary-100 py-1 px-2 rounded-2xl"}>{tag}</span>)}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl ">
                                        <Link
                                            to={post.url}
                                            target="_blank"
                                            className="hover:underline"
                                        >
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-4 text-muted-foreground md:mt-5">
                                        {post.summary}
                                    </p>
                                    <div className={"flex flex-row  gap-x-8"}>
                                        <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                                            <span className="text-muted-foreground">{post.author}</span>
                                            <span className="text-muted-foreground">•</span>
                                            <span className="text-muted-foreground">
                      {post.published}
                    </span>
                                            <span className="text-muted-foreground">•</span>
                                            <div className="flex items-center space-x-2">
                                                <Link
                                                    to={`/news/${post.id}`}
                                                    target="_blank"
                                                    className="inline-flex text-muted-foreground items-center hover:scale-[1.03] text-sm"
                                                >
                                                    <span>Read more</span>
                                                    <ArrowRight className="ml-2 size-3 transition-transform"/>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="order-first sm:order-last sm:col-span-5">
                                    <Link to={`/news/${post.id}`} target="_blank" className="block">
                                        <div className="aspect-16/9 overflow-clip rounded-lg shadow-sm">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export {Blog8};
