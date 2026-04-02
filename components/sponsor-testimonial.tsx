import Link from "next/link";
import { cn } from "@/lib/utils";

interface SponsorTestimonialProps {
  logoUrl: string;
  logoAlt: string;
  logoHref: string;
  quote: string;
  personName: string;
  personTitle: string;
  className?: string;
}

function SponsorTestimonial({
  logoUrl,
  logoAlt,
  logoHref,
  quote,
  personName,
  personTitle,
  className,
}: SponsorTestimonialProps) {
  return (
    <div className={cn("flex flex-col items-center gap-6 py-10 md:py-14 text-center", className)}>
      <Link
        href={logoHref}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <img
          src={logoUrl}
          alt={logoAlt}
          className="h-12 md:h-16 w-auto mx-auto"
        />
      </Link>
      <q className="block max-w-4xl text-lg md:text-xl font-medium lg:text-2xl">
        {quote}
      </q>
      <p className="font-medium">
        {personName}, {personTitle}
      </p>
    </div>
  );
}

export { SponsorTestimonial };
export type { SponsorTestimonialProps };
