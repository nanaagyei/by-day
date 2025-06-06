import { CheckCircle, Search, CalendarCheck, Star } from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="min-h-[80vh] bg-muted/50 py-12">
      {/* Hero Section */}
      <section className="container mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">How ByDay Works</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          ByDay connects you with skilled professionals for any task, any day. Here's how you can get things done, fast and easy.
        </p>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {/* Step 1 */}
        <div className="flex flex-col items-center bg-white dark:bg-[#17494d]/80 rounded-xl shadow p-6">
          <Search className="h-12 w-12 text-accent mb-4" />
          <h2 className="text-xl font-bold mb-2 text-primary">1. Find a Service</h2>
          <p className="text-muted-foreground">Browse or search for the service you need from our wide range of categories.</p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center bg-white dark:bg-[#17494d]/80 rounded-xl shadow p-6">
          <CalendarCheck className="h-12 w-12 text-accent mb-4" />
          <h2 className="text-xl font-bold mb-2 text-primary">2. Book Instantly</h2>
          <p className="text-muted-foreground">Choose your professional, select a time, and book instantly—no waiting, no hassle.</p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center bg-white dark:bg-[#17494d]/80 rounded-xl shadow p-6">
          <CheckCircle className="h-12 w-12 text-accent mb-4" />
          <h2 className="text-xl font-bold mb-2 text-primary">3. Get the Job Done</h2>
          <p className="text-muted-foreground">Your pro arrives and gets the job done efficiently and professionally.</p>
        </div>
        {/* Step 4 */}
        <div className="flex flex-col items-center bg-white dark:bg-[#17494d]/80 rounded-xl shadow p-6">
          <Star className="h-12 w-12 text-accent mb-4" />
          <h2 className="text-xl font-bold mb-2 text-primary">4. Rate & Repeat</h2>
          <p className="text-muted-foreground">Rate your experience and book again anytime you need help!</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto text-center">
        <Link href="/services">
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow hover:bg-primary/80 transition">
            Get Started with ByDay
          </button>
        </Link>
      </section>
    </main>
  );
}
