
import { Card, CardContent } from "./card";
import { Separator } from "./separator";
import timelineData from "../../../assets/data/historyOfIntelligenceTests.json"



const Timeline9 = () => {
  return (
    <section className="bg-white py-28">
      <div className="container">
        <h1 className="mb-15 text-center text-2xl font-bold tracking-tighter text-foreground sm:text-6xl">
          The History of IQ Tests
        </h1>
        <div className="relative ml-[20vw] max-w-[70vw]">
          <Separator
            orientation="vertical"
            className="absolute top-6 left-4 bg-muted"
          />
          {timelineData.map((entry, index) => (
            <div key={index} className="relative mb-6 pl-9">
              <div className="absolute top-3.5 left-0 flex size-4 mb-0 items-center justify-center rounded-full bg-foreground" />
              <h4 className="rounded-xl pb-0 pt-2 text-xl font-bold tracking-tight xl:px-3">
                {entry.title}
              </h4>

              <h5 className="text-md top-3 -left-34 rounded-xl tracking-tight text-muted-foreground xl:absolute">
                {entry.date}
              </h5>

              <Card className="my-0 border-none shadow-none">
                <CardContent className="px-0 xl:px-2">
                  <div
                    className="prose text-foreground"
                    dangerouslySetInnerHTML={{ __html: entry.content }}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Timeline9 };
