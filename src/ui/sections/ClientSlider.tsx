import ClientLogo01 from '../../assets/img/clients/logo01.svg?react'
import ClientLogo02 from '../../assets/img/clients/logo02.svg?react'
import ClientLogo03 from '../../assets/img/clients/logo03.svg?react'
import ClientLogo04 from '../../assets/img/clients/logo04.svg?react'
import ClientLogo05 from '../../assets/img/clients/logo05.svg?react'
import ClientLogo06 from '../../assets/img/clients/logo06.svg?react'
import {CarouselWrapper} from "../components/generics/CarouselWrapper";
// import {Carousel, CarouselContent, CarouselItem} from "@/ui/shadcn/carousel";

export default function ClientSlider() {

    const logos = [
        ClientLogo01,
        ClientLogo02,
        ClientLogo03,
        ClientLogo04,
        ClientLogo05,
        ClientLogo06,
        ClientLogo03,
        ClientLogo04,
        ClientLogo01,
        ClientLogo02,
    ]

    return (
        <CarouselWrapper className="flex flex-row bg-"
                         items={logos.map((LogoElement, index) => (
                             <div
                                 key={index}
                                 className="flex items-center justify-center w-full h-[250px] cursor-pointer focus:outline-none">
                                 <LogoElement/>
                             </div>
                         ))}
                         intervalMs={5000}
        >
        </CarouselWrapper>
    )
}

/*
<Carousel {...settings}>
  <CarouselContent>
    {logos.map((logo, index) => (
        <CarouselItem
            key={index}
            className="flex items-center justify-center w-full h-[150px] cursor-pointer focus:outline-none"
        >
          <img src={logo} alt="client logo" className="w-full h-full p-10" />
        </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>*/
