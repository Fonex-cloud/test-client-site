import { HeroSection } from '@/components/blocks/HeroSection';
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid';
import { TestimonialSection } from '@/components/blocks/TestimonialSection';
import { PricingCard } from '@/components/blocks/PricingCard';
import { FooterSection } from '@/components/blocks/FooterSection';

export default function SmileTreeDentalPage() {
  return (
    <main>
      <HeroSection
        title="Rooted in Care, Growing Smiles"
        subtitle="SmileTree Dental blends advanced technology with a warm, nature-inspired atmosphere to nurture your smile for life. Book your visit today and experience dentistry that truly cares."
        primaryButtonText="Book Online"
        secondaryButtonText="Explore Our Services"
        imageUrl="https://via.placeholder.com/800x400"
      />

      <FeaturesGrid
        heading="Four Branches of Care for Every Smile"
        features={[
          {
            title: 'Preventive & General Care — The Roots',
            description:
              'Build a strong foundation with comprehensive exams, digital X-rays, professional cleanings, fluoride treatments, oral cancer screenings, and custom night guards to protect your long-term oral health.'
          },
          {
            title: 'Pediatric Dentistry — The Saplings',
            description:
              'Gentle, engaging care for patients from infancy to age 18. Early assessments, habit management, behavioral guidance, and custom sports mouthguards help young smiles grow strong and confident.'
          },
          {
            title: 'Restorative Solutions — The Trunk',
            description:
              'Repair and restore with tooth-colored fillings, same-day ceramic crowns and bridges via in-house CAD/CAM technology, dental implants, and gentle root canal therapy using rotary instrumentation.'
          },
          {
            title: 'Cosmetic Enhancements — The Blossoms',
            description:
              'Reveal your most radiant smile with professional laser whitening, porcelain veneers, Invisalign® clear aligners, and laser gum contouring — all tailored to your unique aesthetic goals.'
          },
          {
            title: 'Digital-First Convenience',
            description:
              'Book appointments online with real-time availability, access your secure patient portal to review treatment plans and insurance estimates, and stay informed with educational videos specific to your care.'
          },
          {
            title: 'Comfort-Centered Experience',
            description:
              'Ease dental anxiety with noise-canceling headphones, ceiling-mounted TVs, and aromatherapy options in every operatory. We have designed every detail to make your visit calm, safe, and welcoming.'
          }
        ]}
      />

      <TestimonialSection
        quote="SmileTree Dental completely changed how I feel about going to the dentist. The team is warm, the technology is impressive, and my smile has never looked better. I finally found a practice that feels like family."
        authorName="Megan Torres"
        authorRole="SmileTree Patient since 2022"
        authorImage="https://via.placeholder.com/100x100"
      />

      <section className="py-[var(--spacing-4xl)] px-[var(--spacing-lg)] bg-[var(--color-neutral-50)]">
        <div className="container mx-auto max-w-[var(--container-max-width)]">
          <h2
            style={{
              textAlign: 'center',
              marginBottom: 'var(--spacing-2xl)',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--color-neutral-900)'
            }}
          >
            SmileTree Membership Plans
          </h2>
          <div className="grid gap-[var(--spacing-2xl)] grid-cols-1 md:grid-cols-3">
            <PricingCard
              planName="Sapling Plan"
              price="$199/yr"
              features={[
                '2 routine exams per year',
                '2 professional cleanings',
                'Annual digital X-rays',
                'Oral cancer screening',
                '10% off restorative services',
                'Ideal for children & teens'
              ]}
              buttonText="Get Started"
            />
            <PricingCard
              planName="Grove Plan"
              price="$299/yr"
              features={[
                '2 comprehensive exams per year',
                '2 professional cleanings',
                'Annual full-mouth X-rays',
                'Oral cancer screening',
                'Fluoride treatment included',
                '15% off all other services',
                'Priority scheduling'
              ]}
              buttonText="Join Now"
              highlighted={true}
            />
            <PricingCard
              planName="Canopy Plan"
              price="$499/yr"
              features={[
                '2 comprehensive exams per year',
                '3 professional cleanings',
                'Full-mouth X-rays included',
                'Oral cancer screening',
                'Custom night guard discount',
                '20% off all other services',
                'Priority scheduling',
                'Dedicated care coordinator'
              ]}
              buttonText="Contact Us"
            />
          </div>
        </div>
      </section>

      <FooterSection
        copyrightText="© 2026 SmileTree Dental. All rights reserved. Rooted in Care, Growing Smiles."
        links={[
          { label: 'Book Online', href: '/book' },
          { label: 'Our Services', href: '/services' },
          { label: 'Patient Portal', href: '/portal' },
          { label: 'Membership Plans', href: '/membership' },
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Contact Us', href: '/contact' }
        ]}
      />
    </main>
  );
}