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
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt iste distinctio corporis, alias illum."
            personName="Laura Mipsum"
            personTitle="Chief Operating Officer at Btrust"
          />
          <SponsorTestimonial
            logoUrl="/partners/vinteum.png"
            logoAlt="Vinteum"
            logoHref="https://vinteum.org"
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nesciunt iste distinctio corporis, alias illum."
            personName="Vinteum Person"
            personTitle="Title at Vinteum"
          />
        </div>
      </div>
    </section>
  );
}

export { MajorSponsors };
export type { MajorSponsorsProps };
