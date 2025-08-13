
 type CourseCardProps = {
    id: string,
    title: string,
    description: string,
     url: string,
    imageUrl: string,
    avaiable: boolean,
}
const CourseCard = ({title, id, avaiable, description, url, imageUrl} : CourseCardProps) => {
    return (

        <div className="h-full p-8 md:p-3 lg:p-5 xl:p-7" id={id}>
            <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-secondary shadow-sm overflow-hidden">

                {/* Image takes 35% of the card */}
                <div className=" h-[50%] lg:h-[35%] xl:h-[45%] w-full overflow-hidden bg-cover">
                    <img
                        src={imageUrl}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Content takes 65% */}
                <div className="flex h-[50%] lg:h-[65%] xl:h-[55%] flex-col justify-between p-4 border">
                    <h5 className="line-clamp-2 text-4xl lg:text-xl font-bold tracking-tight mt-5 lg:mt-0 text-primary">
                        {title}
                    </h5>
                    <p className="line-clamp-4 text-2xl mt-4 lg:mt-0 lg:text-sm text-gray-400">
                        {description}
                    </p>
                    <a
                        href={url}
                        className="mt-5 items-center inline-flex  text-2xl lg:text-sm font-medium text-primary"
                    >
                        {avaiable ? "Read More" : "Coming soon"}
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    )
}
export default CourseCard;