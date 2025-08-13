import {Badge} from "./shadcn/badge";
import {Button} from "./shadcn/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./shadcn/card";
import {Label} from "./shadcn/label";
import {Switch} from "./shadcn/switch";
import {CheckIcon} from "lucide-react";
import {useState} from "react";
import {cn} from "@/config/shadcn_utils";

import plans from "@/assets/data/pricingPlans.json"

export default function PricingSectionCards() {
    const [pricingModel, setPricingModel] = useState(false);
    console.log("pricingModel:", pricingModel)
    return (
        <>
            {/* Pricing */}
            <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
                {/* Title */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold text-primary tracking-tight transition-colors first:mt-0">
                        Pricing
                    </h2>
                    <p className="mt-1 text-primary">
                        Whatever your status, our offers evolve according to your needs.
                    </p>
                </div>
                {/* End Title */}
                {/* Switch */}
                <div className="flex justify-center items-center text-primary  p-4">
                    <Label htmlFor="payment-schedule" className="me-3 rounded p-2 bg-secondary-400  shadow-lg/10">
                        Monthly
                    </Label>
                    <Switch
                        id="payment-schedule"
                        checked={pricingModel}
                        onCheckedChange={setPricingModel}
                    >
                    </Switch>
                    <Label htmlFor="payment-schedule" className="relative ms-3 p-2 bg-secondary-400  rounded shadow-lg/10">
                        Annual
                        <span className="absolute -top-10 start-auto -end-28">
              <span className="flex items-center">
                <svg
                    className="w-14 h-8 -me-6"
                    width={45}
                    height={25}
                    viewBox="0 0 45 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                      fill="currentColor"
                      className="text-primary"
                  />
                </svg>
                <Badge className="mt-3 uppercase">Save up to 10%</Badge>
              </span>
            </span>
                    </Label>
                </div>
                {/* End Switch */}

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
                    {plans.map((plan) => (
                        <Card key={plan.title} className={cn("flex flex-col text-sm p-4 text-primary rounded-lg shadow-2xl border-gray-200 drop-shadow-2xl", plan.className)}>
                            {plan.badge && (
                                <div
                                    className="uppercase bg-secondary-400 rounded p-1 text-[0.5rem] w-fit font-semibold ml-0 top-0 mb-2 z-10">{plan.badge}</div>
                            )}
                            <CardHeader className="text-center text-primary   pb-1 top-0">
                                <CardTitle className={`mb-4 text-lg ${plan.badge ? `mt-[-0.6rem]` : `mt-10`}`}>{plan.title}</CardTitle>
                                <span className="font-bold text-2xl">
                {pricingModel ? plan.priceAnnual : plan.priceMonthly}
              </span>
                            </CardHeader>

                            <CardDescription className="text-center mb-3">
                                {plan.description}
                            </CardDescription>

                            <CardContent className="flex-1">
                                <ul className="space-y-1">
                                    <li className="flex space-x-2">
                                        <CheckIcon className="h-4 w-4 mt-0.5 flex-shrink-0"/>
                                        <span>{plan.users}</span>
                                    </li>
                                    {plan.features.map((feat) => (
                                        <li key={feat} className="flex space-x-2">
                                            <CheckIcon className="h-4 w-4 mt-0.5 flex-shrink-0"/>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button className="w-full bg-primary">
                                    Sign up
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                {/* End Grid */}
            </div>
            {/* End Pricing */}
        </>
    );
}
