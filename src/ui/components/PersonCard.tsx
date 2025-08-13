import {Card} from "./shadcn/card";
import {Button} from "@/ui/components/shadcn/button";
import {Link} from "react-router-dom";
import {DribbbleIcon, TwitterIcon} from "lucide-react";

interface ProfileCardProps {
    imageUrl: string
    name: string
    description: string
}

export default function PersonCard({imageUrl, name, description}: ProfileCardProps) {
    return (
        <Card className="flex flex-col items-center h-full text-center shadow-none border-transparent text-primary rounded-xl transition-transform hover:scale-[1.02]">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full max-w-[300px] aspect-square rounded-lg object-cover bg-secondary mx-auto"
                />
            <div className={"flex-row gap-2 my-0"}>
                <h3 className=" text-lg text-primary font-semibold">{name}</h3>
                <div className="gap-1 flex-row justify-center items-center">
                    <Button
                        className="hover:scale-[1.1] bg-transparent text-primary shadow-none"
                        size="icon"
                        asChild
                    >
                        <Link to="#" target="_blank">
                            <TwitterIcon className="stroke-muted-foreground"/>
                        </Link>
                    </Button>
                    <Button
                        className="hover:scale-[1.1] bg-transparent text-primary hover:bg-muted  shadow-none"
                        size="icon"
                        asChild
                    >
                        <Link to="#" target="_blank">
                            <DribbbleIcon className="stroke-muted-foreground"/>
                        </Link>
                    </Button>
                </div>
                <p className="mt-0 text-sm text-primary line-clamp-4 max-w-[90%] mx-auto">{description}</p>
            </div>
        </Card>

    );
}


