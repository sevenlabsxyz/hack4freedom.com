import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/constants";

const BRAZIL_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSe4Y9ns_56-VDLB1znocWPLqGBHOIVBqsGWOYadswI3Q6xWsg/viewform?usp=send_form";
const CITY_REQUEST_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfJaZjvIERSdqiIDRt2EGe7leZ1hMfid7i0xFN3nZstWN4czA/viewform?usp=publish-editor";

const cities = [
  {
    city: "Lagos",
    country: "Nigeria",
    flag: "🇳🇬",
    date: "May 16-30",
    buttonText: "Register for Lagos",
    buttonLink: EXTERNAL_LINKS.APPLY,
  },
  // {
  //   city: "Nairobi",
  //   country: "Kenya",
  //   flag: "🇰🇪",
  //   date: "Q2 2026",
  //   buttonText: "Register for Nairobi",
  //   buttonLink: EXTERNAL_LINKS.APPLY,
  // },
  {
    city: "São Paulo",
    country: "Brazil",
    flag: "🇧🇷",
    date: "July 12-26",
    buttonText: "Register for São Paulo",
    buttonLink: BRAZIL_FORM_LINK,
  },
  // {
  //   city: "Belo Horizonte",
  //   country: "Brazil",
  //   flag: "🇧🇷",
  //   date: "Q3 2026",
  //   buttonText: "Register for Belo Horizonte",
  //   buttonLink: BRAZIL_FORM_LINK,
  // },
  // {
  //   city: "Port Harcourt",
  //   country: "Nigeria",
  //   flag: "🇳🇬",
  //   date: "Q3 2026",
  //   buttonText: "Register for Port Harcourt",
  //   buttonLink: EXTERNAL_LINKS.APPLY,
  // },
];

function Cities() {
  return (
    <section id="cities" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Badge variant="outline" className="mb-4 bg-pink-700">
            Locations
          </Badge>
        </div>
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4 text-center">
          2026 Cities
        </h2>
        <p className="text-brand-mute font-mono text-center mb-12 md:mb-16">
          Five stops. One mission: women building freedom tech in the Global
          South.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {cities.map((city, index) => (
            <a
              key={index}
              href={city.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full h-full"
            >
              <Card className="hover:border-primary rounded-3xl border-2 p-10 transition hover:-translate-y-3 bg-card relative h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="">
                    <Badge variant="outline" className="mb-4 bg-pink-700">
                      {city.date}
                    </Badge>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-2xl font-mono font-bold text-white mb-6">
                      {city.flag} {city.city},<br />
                      <span className="pl-10">{city.country}</span>
                    </h3>
                  </div>

                  <Button
                    variant="outline"
                    className="border-brand-green text-white font-mono group-hover:bg-brand-green/10 pointer-events-none mt-auto w-full"
                  >
                    {city.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}

          {/* CTA — Bring it to your city */}
          <a
            href={CITY_REQUEST_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full h-full"
          >
            <Card className="hover:border-brand-green rounded-3xl border-2 border-dashed p-10 transition hover:-translate-y-3 bg-card/50 relative h-full">
              <CardContent className="p-0 flex flex-col h-full">
                <div>
                  <Badge variant="outline" className="mb-4 bg-pink-700/80">
                    Next Up
                  </Badge>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-2xl font-mono font-bold text-white mb-6">
                    <MapPin className="inline-block h-6 w-6 mr-2 -mt-1" />
                    Your City?
                  </h3>
                </div>

                <Button
                  variant="outline"
                  className="border-brand-green text-white font-mono group-hover:bg-brand-green/10 pointer-events-none mt-auto w-full"
                >
                  Request Your City
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}

export { Cities };
