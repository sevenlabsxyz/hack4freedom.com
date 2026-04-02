import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-background text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="outline" className="mb-4 bg-pink-700">
          Sponsors and Supporters
        </Badge>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 max-w-2xl mx-auto">
          <Link
            href="https://btrust.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/partners/btrust.svg"
              alt="Btrust"
              className="h-12 md:h-16 w-auto hover:opacity-80 transition-opacity mx-auto"
            />
          </Link>
          <Link
            href="https://vinteum.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/partners/vinteum.png"
              alt="Vinteum"
              className="h-10 md:h-14 w-auto hover:opacity-80 transition-opacity mx-auto"
            />
          </Link>
          <Link
            href="https://breez.technology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/partners/breez.svg"
              alt="Breez"
              className="h-12 md:h-16 w-auto hover:opacity-80 transition-opacity mx-auto"
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
              className="h-12 md:h-16 w-auto hover:opacity-80 transition-opacity mx-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export { Partners };
