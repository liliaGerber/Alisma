import { FcGoogle } from "react-icons/fc";

import { Button } from "./button";
import { Input } from "./input";
import  Logo  from '@/assets/icons/Logo.svg?react';
import mainInfo from '@/assets/data/mainInformation.json'

interface Login1Props {
  heading?: string;
  logo: {
    url: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Login1 = ({
  heading = "Login",
  logo = {
    url: "/",
    title: "Home",
  },
  buttonText = "Login",
  googleText = "Sign in with Google",
  signupText = "Don't have an account?",
  signupUrl = "https://shadcnblocks.com",
}: Login1Props) => {
  return (
    <section className="h-screen bg-muted">
      <div className="flex h-full items-center justify-center">
        <div className="flex w-full max-w-sm flex-col items-center gap-y-8 rounded-md border border-muted bg-primary px-6 pb-12 pt-4 shadow-md">
          <div className="flex flex-col items-center gap-y-2">
            {/* Logo */}
            <div className="flex flex-row items-center gap-3 lg:justify-start  ml-[-350px]">
              <a href={logo.url}>
                <Logo
                    className="h-10"
                />
              </a>
              <h1 className="text-xl font-extrabold text-secondary">{mainInfo.company_name}</h1>
            </div>
            {heading && <h1 className="text-3xl font-semibold">{heading}</h1>}
          </div>
          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  className="bg-primary"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Button type="submit" className="mt-2 border  border-secondary">
                  {buttonText}
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  {googleText}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-1 text-sm text-muted-foreground">
            <p>{signupText}</p>
            <a
              href={signupUrl}
              className="font-medium text-secondary hover:underline"
            >
              Sign up here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login1 };
