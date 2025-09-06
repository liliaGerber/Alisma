import {Blog8} from "@/ui/components/shadcn/blog8";
import {useEffect} from "react";

export default function NewsPage(){
    useEffect(() => {
        window.scroll(0,0)
    }, []);
    return(
        <>
        <Blog8/>
        </>
    )
}