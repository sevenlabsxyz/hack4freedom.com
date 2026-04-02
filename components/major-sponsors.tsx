import { Badge } from "@/components/ui/badge";
import { SponsorTestimonial } from "./sponsor-testimonial";
import { cn } from "@/lib/utils";

interface MajorSponsorsProps {
  className?: string;
}

function MajorSponsors({ className }: MajorSponsorsProps) {
  return (
    <section id="major-sponsors" className={cn("py-16 md:py-24 bg-background text-center", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="outline" className="mb-4 bg-pink-700">
          Major Sponsors
        </Badge>
        <div className="flex flex-col gap-8 md:gap-12 mt-8 max-w-4xl mx-auto">
          <SponsorTestimonial
            logoUrl="/partners/btrust.svg"
            logoAlt="Btrust"
            logoHref="https://btrust.tech"
            quote="Hack4Freedom is doing valuable work creating an effective pipeline of female Bitcoin developers, which is a net positive for the entire Bitcoin open-source ecosystem. This is a core part of our priorities at Btrust, as we cannot have a truly decentralized effort without it, so we are proud to continue supporting them."
            personName="Abubakar Nur Khalil"
            personTitle="CEO, Btrust"
            className="border-b border-border"
          />
          <SponsorTestimonial
            logoUrl="/partners/vinteum.png"
            logoAlt="Vinteum"
            logoHref="https://vinteum.org"
            quote="Expanding who gets to build Bitcoin isn't a social goal, it's a technical one. Today, that builder set is still extremely narrow. If Bitcoin is meant to be global, the people building it need to reflect more of the realities it serves. Hack4Freedom is about bringing more capable builders into the arena, and turning users into builders."
            personName="Lucas Ferreira"
            personTitle="Co-Founder & Executive Director, Vinteum"
          />
        </div>
      </div>
    </section>
  );
}

export { MajorSponsors };
export type { MajorSponsorsProps };
