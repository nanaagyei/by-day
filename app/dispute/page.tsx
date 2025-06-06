import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft, Scale, FileText, MessageCircle, Clock, CheckCircle, AlertCircle, Phone } from "lucide-react"

export default function DisputePage() {
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
              <Scale className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Dispute Resolution</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            We're committed to fair resolution of any disputes between clients and service providers. 
            Our mediation process ensures both parties are heard and treated fairly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Dispute Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    File a Dispute
                  </CardTitle>
                  <CardDescription>
                    Please provide detailed information about your dispute. We'll review and respond within 24-48 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Your Information</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input id="fullName" placeholder="Enter your full name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="userType">I am a</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select user type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="client">Client (Service Seeker)</SelectItem>
                              <SelectItem value="professional">Professional (Service Provider)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Service Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Service Details</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="bookingId">Booking ID</Label>
                          <Input id="bookingId" placeholder="e.g., BYD-2024-001234" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="serviceDate">Service Date</Label>
                          <Input id="serviceDate" type="date" />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Category</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="home">Home Services</SelectItem>
                              <SelectItem value="construction">Construction</SelectItem>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="creative">Creative Services</SelectItem>
                              <SelectItem value="automotive">Automotive</SelectItem>
                              <SelectItem value="wellness">Wellness</SelectItem>
                              <SelectItem value="hospitality">Hospitality</SelectItem>
                              <SelectItem value="security">Security</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="amount">Service Amount</Label>
                          <Input id="amount" type="number" placeholder="0.00" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="otherParty">Other Party's Name</Label>
                        <Input id="otherParty" placeholder="Name of the other party involved" />
                      </div>
                    </div>

                    {/* Dispute Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Dispute Information</h3>
                      <div className="space-y-2">
                        <Label htmlFor="disputeType">Type of Dispute</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select dispute type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="quality">Service Quality Issues</SelectItem>
                            <SelectItem value="payment">Payment Disputes</SelectItem>
                            <SelectItem value="cancellation">Cancellation Issues</SelectItem>
                            <SelectItem value="damage">Property Damage</SelectItem>
                            <SelectItem value="communication">Communication Problems</SelectItem>
                            <SelectItem value="safety">Safety Concerns</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Detailed Description</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Please provide a detailed description of the dispute, including what happened, when it occurred, and what resolution you're seeking."
                          className="min-h-[120px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="evidence">Supporting Evidence</Label>
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                          <div className="space-y-2">
                            <FileText className="h-8 w-8 mx-auto text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                              Upload photos, documents, or other evidence (Max 10MB each)
                            </p>
                            <Button variant="outline" size="sm">
                              Choose Files
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="resolution">Desired Resolution</Label>
                        <Textarea 
                          id="resolution" 
                          placeholder="What outcome are you looking for? (e.g., refund, service redo, compensation)"
                          className="min-h-[80px]"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1">
                        Submit Dispute
                      </Button>
                      <Button type="button" variant="outline">
                        Save Draft
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Process Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Resolution Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-1">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">1. Submit Dispute</h4>
                      <p className="text-sm text-muted-foreground">Fill out the dispute form with all relevant details</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-1">
                      <MessageCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">2. Review & Contact</h4>
                      <p className="text-sm text-muted-foreground">We review and contact both parties within 24-48 hours</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-1">
                      <Scale className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">3. Mediation</h4>
                      <p className="text-sm text-muted-foreground">Professional mediation to find fair resolution</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">4. Resolution</h4>
                      <p className="text-sm text-muted-foreground">Implementation of agreed solution within 5-7 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border">
                    <h4 className="font-semibold mb-2">Urgent Disputes</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      For safety concerns or urgent matters
                    </p>
                    <Button variant="outline" className="w-full">
                      Call: +1 (800) URGENT-1
                    </Button>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border">
                    <h4 className="font-semibold mb-2">General Support</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      For questions about the dispute process
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full">
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    Tips for Success
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Provide as much detail as possible</li>
                    <li>• Include photos or documentation</li>
                    <li>• Be honest and factual</li>
                    <li>• Respond promptly to our requests</li>
                    <li>• Keep communication respectful</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Dispute Resolution FAQ</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Common questions about our dispute resolution process
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does resolution take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most disputes are resolved within 5-7 business days. Complex cases may take up to 14 days. 
                    We'll keep you updated throughout the process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if the other party doesn't respond?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We give all parties 48 hours to respond. If someone doesn't participate, we'll make a 
                    decision based on available evidence and platform policies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I get a refund through dispute resolution?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Refunds are possible depending on the circumstances. We evaluate each case individually 
                    based on our service guarantee and the evidence provided.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What happens after resolution?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Once resolved, the agreed solution is implemented. Both parties receive a summary of the 
                    resolution, and the case is closed in our system.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Prevention Section */}
          <div className="mt-16 p-8 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
            <div className="text-center mb-6">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                Preventing Disputes
              </h2>
              <p className="text-green-700 dark:text-green-300">
                Most issues can be avoided with clear communication and expectations
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
              <div className="text-green-700 dark:text-green-300">
                <h3 className="font-semibold mb-2">For Clients:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Clearly describe your needs</li>
                  <li>• Ask questions before booking</li>
                  <li>• Review professional profiles</li>
                  <li>• Communicate any changes promptly</li>
                </ul>
              </div>
              <div className="text-green-700 dark:text-green-300">
                <h3 className="font-semibold mb-2">For Professionals:</h3>
                <ul className="text-sm space-y-1">
                  <li>• Set clear expectations upfront</li>
                  <li>• Document your work with photos</li>
                  <li>• Communicate any delays immediately</li>
                  <li>• Follow up after service completion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
