import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./shadcn/accordion";
import { Button } from "./shadcn/button";
import faqItems from "../../assets/data/faq.json";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";
type Lang = "en" | "de" | "fr";

const FAQComponent = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage as Lang;

  return (
      <section className="w-full h-full">
        <div className="container space-y-16 py-30 px-15">
          <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
              {t("faq.heading")}
            </h2>
            <p className="text-muted-foreground lg:text-lg">
              {t("faq.description")}
            </p>
          </div>
          <Accordion
              type="single"
              collapsible
              className="mx-auto w-full lg:max-w-3xl"
          >
            {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                    <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                      {item.question[lang]}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="sm:mb-1 lg:mb-2">
                    <div className="text-muted-foreground lg:text-lg">
                      {item.answer[lang]}
                    </div>
                  </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
          <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg  p-4 text-center md:rounded-xl md:p-6 lg:p-8">
            <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
              {t("faq.supportHeading")}
            </h3>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
              <Button className="w-full sm:w-auto btn-primary" asChild>
                <Link to="/contact" target="/contact">
                  {t("faq.supportButton")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
};

export { FAQComponent };
