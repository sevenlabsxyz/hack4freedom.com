import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-background text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="outline" className="mb-4 bg-pink-700">
          Partners
        </Badge>
        <div className="flex justify-center gap-8 md:gap-12 mt-8 max-w-xl mx-auto">
          <Link
            href="https://breez.technology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/partners/breez.svg"
              alt="Breez"
              className="h-12 md:h-16 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link
            href="https://soapbox.pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/partners/soapbox.png"
              alt="Soapbox"
              className="h-12 md:h-16 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export { Partners };
