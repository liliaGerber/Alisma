import {Button} from "./shadcn/button";
import {DribbbleIcon, TwitterIcon} from "lucide-react";
import {Link} from 'react-router-dom'

import teamMembers from '@/assets/data/team.json'
// TODO change icons to linkedin and instagram
const Team05Page = () => {
    return (
        <div className="flex flex-col justify-center pb-8 sm:py-12 px-6 lg:px-8 max-w-screen-xl h-fit mx-auto gap-16 ">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
                    Meet Our Team
                </h2>
                <p className="mt-6 text-base sm:text-lg">
                    Our philosophy is simple — hire a team of diverse, passionate people
                    and foster a culture that empowers you to do you best work.
                </p>
            </div>

            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="flex flex-col items-center text-center text-secondary p-4 rounded-xl transition-transform hover:scale-[1.02]"
                        >
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full max-w-[300px] aspect-square rounded-lg object-cover bg-secondary mx-auto"
                            />
                            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                            <p className="text-muted-foreground text-sm">{member.title}</p>
                            <p className="mt-3 text-sm text-secondary text-foreground line-clamp-4">{member.bio}</p>
                            <div className="mt-2 flex gap-1 ">
                                <Button
                                    className="hover:bg-accent text-muted-foreground shadow-none"
                                    size="icon"
                                    asChild
                                >
                                    <Link to="#" target="_blank">
                                        <TwitterIcon className="stroke-muted-foreground"/>
                                    </Link>
                                </Button>
                                <Button
                                    className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                                    size="icon"
                                    asChild
                                >
                                    <Link to="#" target="_blank">
                                        <DribbbleIcon className="stroke-muted-foreground"/>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Team05Page;
