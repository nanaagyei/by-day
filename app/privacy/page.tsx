import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, UserCheck, ArrowRight } from "lucide-react"

export default function PrivacyPage() {
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            At ByDay, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy outlines how we collect, use, and safeguard your data.
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

            {/* Information We Collect */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Information We Collect</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Name, email address, and phone number</li>
                    <li>• Profile photo and biographical information</li>
                    <li>• Physical address and location data</li>
                    <li>• Payment information (processed securely through third-party providers)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Service Information</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Service requests and booking history</li>
                    <li>• Reviews and ratings</li>
                    <li>• Communication with service providers</li>
                    <li>• Professional certifications and qualifications (for service providers)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Information</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Device information and IP address</li>
                    <li>• Browser type and operating system</li>
                    <li>• Usage patterns and app interactions</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Service Delivery</h3>
                  <p>We use your information to connect you with qualified service providers, process bookings, facilitate payments, and ensure quality service delivery.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Platform Improvement</h3>
                  <p>We analyze usage patterns to improve our platform features, user experience, and service recommendations.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Communication</h3>
                  <p>We send service updates, booking confirmations, promotional offers, and important platform notifications.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Safety & Security</h3>
                  <p>We verify user identities, prevent fraud, ensure platform safety, and comply with legal requirements.</p>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Data Protection & Security</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
                <ul className="space-y-1">
                  <li>• End-to-end encryption for sensitive data</li>
                  <li>• Secure payment processing through certified providers</li>
                  <li>• Regular security audits and vulnerability assessments</li>
                  <li>• Strict access controls and employee training</li>
                  <li>• Data backup and disaster recovery procedures</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Access & Control</h3>
                  <p>You can access, update, or delete your personal information through your account settings at any time.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Data Portability</h3>
                  <p>You can request a copy of your data in a machine-readable format for transfer to another service.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Marketing Preferences</h3>
                  <p>You can opt out of promotional communications while continuing to receive service-related messages.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Account Deletion</h3>
                  <p>You can permanently delete your account, which will remove your personal information from our systems.</p>
                </div>
              </div>
            </div>

            {/* Cookies Policy */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <h2 className="text-2xl font-bold mb-4">Cookies & Tracking</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. 
                  You can manage cookie preferences through your browser settings.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Types of Cookies</h3>
                  <ul className="space-y-1">
                    <li>• <strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                    <li>• <strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</li>
                    <li>• <strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                    <li>• <strong>Marketing Cookies:</strong> Used to show relevant advertisements (with consent)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12 p-6 rounded-lg border bg-card">
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We work with trusted third-party providers for payment processing, identity verification, 
                  communication services, and analytics. These partners are bound by strict data protection agreements.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Key Partners</h3>
                  <ul className="space-y-1">
                    <li>• Payment processors (Stripe, PayPal) for secure transactions</li>
                    <li>• Cloud services (AWS, Google Cloud) for data storage and processing</li>
                    <li>• Communication platforms for messaging and notifications</li>
                    <li>• Analytics tools for platform improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12 p-6 rounded-lg border bg-primary/5">
              <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you have questions about this privacy policy or how we handle your data, please contact our privacy team:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button className="gap-2">
                      Contact Support
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline">
                    Email: privacy@byday.com
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground border-t pt-8">
              <p>
                This privacy policy may be updated periodically to reflect changes in our practices or legal requirements. 
                We will notify you of any significant changes through email or platform notifications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
