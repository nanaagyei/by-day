import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, FileText, Users, CreditCard, Shield, AlertTriangle, Scale } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container px-4 md:px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-primary/10 p-3">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Please read these terms carefully as they govern your use of ByDay's service marketplace platform 
            and outline the rights and responsibilities of all users.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Agreement to Terms */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Agreement to Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing and using ByDay's platform, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
                <p>
                  If you do not agree with these terms, please do not use our platform. ByDay reserves the 
                  right to modify these terms at any time, and continued use constitutes acceptance of such changes.
                </p>
              </div>
            </div>

            {/* Platform Description */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Platform Description</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ByDay operates an online marketplace platform that connects service seekers ("Clients") 
                  with service providers ("Professionals") across various categories including home services, 
                  construction, technology, creative services, and more.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Role</h3>
                  <ul className="space-y-1">
                    <li>• Facilitate connections between Clients and Professionals</li>
                    <li>• Provide secure payment processing</li>
                    <li>• Maintain platform safety and quality standards</li>
                    <li>• Offer customer support and dispute resolution services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">What We Don't Do</h3>
                  <ul className="space-y-1">
                    <li>• ByDay does not provide services directly</li>
                    <li>• We do not employ or control service providers</li>
                    <li>• We are not responsible for the quality of services performed</li>
                    <li>• We do not guarantee availability of any specific service or provider</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Accounts & Registration */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <h2 className="text-2xl font-bold mb-4">User Accounts & Registration</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Account Creation</h3>
                  <ul className="space-y-1">
                    <li>• You must be at least 18 years old to create an account</li>
                    <li>• Provide accurate, current, and complete information</li>
                    <li>• Maintain the security of your account credentials</li>
                    <li>• Notify us immediately of any unauthorized access</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Professional Verification</h3>
                  <p>
                    Service providers must complete our verification process, including background checks, 
                    skill assessments, and documentation of relevant licenses or certifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Bookings & Payments */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Service Bookings & Payments</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Booking Process</h3>
                  <ul className="space-y-1">
                    <li>• Service bookings are contracts between Clients and Professionals</li>
                    <li>• ByDay facilitates the booking but is not party to the service contract</li>
                    <li>• Cancellation policies vary by service and are set by Professionals</li>
                    <li>• Both parties must honor confirmed bookings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Payment Terms</h3>
                  <ul className="space-y-1">
                    <li>• Payments are processed securely through our platform</li>
                    <li>• Service fees are disclosed before booking confirmation</li>
                    <li>• Payment is held in escrow and released after service completion</li>
                    <li>• ByDay charges a service fee on each transaction</li>
                    <li>• Refunds are subject to our refund policy and dispute resolution</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Conduct & Responsibilities */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <h2 className="text-2xl font-bold mb-4">User Conduct & Responsibilities</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Acceptable Use</h3>
                  <p>Users must:</p>
                  <ul className="space-y-1">
                    <li>• Use the platform only for lawful purposes</li>
                    <li>• Provide honest and accurate information</li>
                    <li>• Treat all users with respect and professionalism</li>
                    <li>• Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Prohibited Activities</h3>
                  <p>Users must not:</p>
                  <ul className="space-y-1">
                    <li>• Create fake accounts or misrepresent identity</li>
                    <li>• Attempt to circumvent platform fees</li>
                    <li>• Post false reviews or manipulate ratings</li>
                    <li>• Engage in harassment, discrimination, or illegal activities</li>
                    <li>• Share contact information to bypass the platform</li>
                    <li>• Use the platform for any commercial purpose outside of service provision</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Safety & Insurance */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Safety & Insurance</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Safety Measures</h3>
                  <ul className="space-y-1">
                    <li>• All Professionals undergo background verification</li>
                    <li>• We maintain a rating and review system</li>
                    <li>• Report any safety concerns immediately</li>
                    <li>• Emergency contact information is available 24/7</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Insurance Coverage</h3>
                  <p>
                    While ByDay encourages all Professionals to maintain appropriate insurance, 
                    we do not provide insurance coverage for services. Users are responsible for 
                    verifying insurance coverage directly with service providers when necessary.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The ByDay platform, including its design, features, content, and technology, 
                  is protected by intellectual property laws. Users may not copy, modify, or 
                  distribute our platform or content without permission.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">User Content</h3>
                  <p>
                    By posting content (reviews, photos, messages) on ByDay, you grant us a 
                    non-exclusive license to use, display, and distribute such content for 
                    platform operations and marketing purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12 p-6 rounded-lg border bg-yellow-50 dark:bg-yellow-950/20">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-yellow-700 dark:text-yellow-300">
                <p>
                  <strong>Important:</strong> ByDay's liability is limited to the maximum extent permitted by law. 
                  We are not liable for:
                </p>
                <ul className="space-y-1">
                  <li>• Quality, safety, or legality of services performed by Professionals</li>
                  <li>• Property damage or personal injury during service provision</li>
                  <li>• Disputes between Clients and Professionals</li>
                  <li>• Loss of data, profits, or business opportunities</li>
                  <li>• Third-party actions or platform downtime</li>
                </ul>
                <p>
                  Our total liability in any case shall not exceed the amount of fees paid to ByDay 
                  in connection with the specific transaction giving rise to the claim.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <h2 className="text-2xl font-bold mb-4">Account Termination</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">By Users</h3>
                  <p>
                    You may terminate your account at any time through your account settings. 
                    Termination does not affect any outstanding obligations or completed transactions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">By ByDay</h3>
                  <p>
                    We may suspend or terminate accounts for violations of these terms, safety concerns, 
                    or other reasons at our discretion. We will provide notice when possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <h2 className="text-2xl font-bold mb-4">Governing Law & Disputes</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These terms are governed by the laws of the State of California, United States. 
                  Any disputes will be resolved through binding arbitration in accordance with the 
                  rules of the American Arbitration Association.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Dispute Resolution</h3>
                  <p>
                    Before pursuing formal legal action, we encourage users to contact our support team 
                    to resolve disputes. We provide mediation services for service-related disputes 
                    between Clients and Professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12 p-6 rounded-lg border bg-primary/5">
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you have questions about these Terms of Service, please contact our legal team:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="gap-2">
                      Contact Support
                    </Button>
                  </Link>
                  <Button variant="outline">
                    Email: legal@byday.com
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground border-t pt-8">
              <p>
                These Terms of Service constitute the entire agreement between you and ByDay regarding 
                the use of our platform. Any modifications to these terms will be posted on this page 
                with an updated effective date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
