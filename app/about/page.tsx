import Image from "next/image";
import Link from "next/link";
import { Users, Zap, ShieldCheck, Globe2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-[80vh] bg-muted/50 py-12">
      {/* Hero Section */}
      <section className="container mx-auto text-center mb-12 flex flex-col items-center">
        <Image
          src="/images/by-day-icon.png"
          alt="ByDay Logo"
          width={120}
          height={120}
          className="mb-4 drop-shadow-md dark:drop-shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">About ByDay</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          ByDay is on a mission to make finding and booking skilled professionals effortless, safe, and vibrant—empowering people to get things done, every day.
        </p>
      </section>

      {/* Our Story & Values */}
      <section className="container mx-auto mb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            ByDay was born from the idea that everyone should have easy access to trusted help for any task, big or small. We saw how hard it could be to find reliable professionals, and set out to build a platform that brings together skilled workers and people who need them—quickly, safely, and with a smile.
          </p>
          <h2 className="text-2xl font-bold text-primary mb-3">Our Values</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Trust & Transparency</li>
            <li>Empowerment for all</li>
            <li>Community & Connection</li>
            <li>Innovation & Simplicity</li>
            <li>Diversity & Inclusion</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/hero/tech.jpg"
            alt="ByDay Community"
            width={400}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* What Makes ByDay Unique */}
      <section className="container mx-auto mb-16">
        <h2 className="text-2xl font-bold text-center text-primary mb-8">What Makes ByDay Unique?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-white dark:bg-[#17494d]/80 rounded-xl shadow p-6">
            <Globe2 className="h-10 w-10 text-accent mb-3" />
            <h3 className="font-semibold text-lg mb-1 text-primary">Diverse Services</h3>
            <p className="text-muted-foreground text-center">From home repairs to tech, wellness, and more—find help for anything, any day.</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-[#17494d]/80 rounded-xl shadow p-6">
            <Zap className="h-10 w-10 text-accent mb-3" />
            <h3 className="font-semibold text-lg mb-1 text-primary">Instant Booking</h3>
            <p className="text-muted-foreground text-center">Book a professional in seconds. No waiting, no stress—just results.</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-[#17494d]/80 rounded-xl shadow p-6">
            <ShieldCheck className="h-10 w-10 text-accent mb-3" />
            <h3 className="font-semibold text-lg mb-1 text-primary">Trusted Pros</h3>
            <p className="text-muted-foreground text-center">All professionals are vetted, reviewed, and committed to quality service.</p>
          </div>
          <div className="flex flex-col items-center bg-white dark:bg-[#17494d]/80 rounded-xl shadow p-6">
            <Users className="h-10 w-10 text-accent mb-3" />
            <h3 className="font-semibold text-lg mb-1 text-primary">Vibrant Community</h3>
            <p className="text-muted-foreground text-center">Join a growing network of helpers and doers, making life easier for everyone.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto text-center mt-12">
        <Link href="/services">
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow hover:bg-primary/80 transition">
            Explore Services
          </button>
        </Link>
        <span className="mx-2 text-muted-foreground">or</span>
        <Link href="/sign-up">
          <button className="px-8 py-3 rounded-full bg-yellow-400 text-primary font-bold text-lg shadow hover:bg-yellow-300 transition">
            Join ByDay
          </button>
        </Link>
      </section>
    </main>
  );
}
