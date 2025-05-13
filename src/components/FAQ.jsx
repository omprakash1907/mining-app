import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function FAQ() {
  const [activeItem, setActiveItem] = useState(null)

  const faqs = [
    {
      id: "faq1",
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button in the top right corner of the page. You'll need to provide your email address, create a password, and verify your email to complete the registration process."
    },
    {
      id: "faq2",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All transactions are securely processed through our payment gateway."
    },
    {
      id: "faq3",
      question: "How can I reset my password?",
      answer: "If you've forgotten your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to reset your password. Make sure to check your spam folder if you don't see the email in your inbox."
    },
    {
      id: "faq4",
      question: "Is there a mobile app available?",
      answer: "Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store. The app provides all the functionality of our web platform with additional mobile-specific features."
    },
    {
      id: "faq5",
      question: "How do I contact customer support?",
      answer: "Our customer support team is available 24/7. You can reach us through the live chat feature on our website, by email at support@example.com, or by phone at 1-800-123-4567 during business hours."
    }
  ]

  const terms = [
    {
      id: "terms1",
      title: "Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services."
    },
    {
      id: "terms2",
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password."
    },
    {
      id: "terms3",
      title: "Privacy Policy",
      content: "Our Privacy Policy, which sets out how we will use your information, can be found at [Privacy Policy Link]. By using this website, you consent to the processing described therein and warrant that all data provided by you is accurate."
    },
    {
      id: "terms4",
      title: "Intellectual Property",
      content: "All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of our company or its content suppliers and protected by international copyright laws."
    },
    {
      id: "terms5",
      title: "Limitation of Liability",
      content: "We shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if we have been advised of the possibility of such damages."
    }
  ]

  return (
    <div className="bg-gray-50 py-12 ">
      <div className="container mx-auto px-4 sm:px-4 lg:px-4">
        {/* Stack cards vertically on mobile, side by side on larger screens */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* FAQ Card */}
          <Card className='w-full'>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center mb-6">
                Find answers to common questions about our products and services.
              </p>

              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={activeItem}
                onValueChange={setActiveItem}
              >
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left hover:no-underline px-4 py-3 hover:cursor-pointer">
                      <span className="font-medium text-base sm:text-lg">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground px-4 pb-3">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Terms Card - Hidden on small screens unless there's space */}
          <Card className='w-full hidden md:block'>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center mb-6">
                Terms & Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center mb-6">
                Please read these terms carefully before using our services.
              </p>

              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={activeItem}
                onValueChange={setActiveItem}
              >
                {terms.map((term) => (
                  <AccordionItem key={term.id} value={term.id}>
                    <AccordionTrigger className="text-left hover:no-underline px-4 py-3 hover:cursor-pointer">
                      <span className="font-medium text-base sm:text-lg">{term.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground px-4 pb-3">
                      {term.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Terms as tabs on mobile */}
        <div className="md:hidden mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Terms & Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center mb-6">
                Please read these terms carefully before using our services.
              </p>

              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={activeItem}
                onValueChange={setActiveItem}
              >
                {terms.map((term) => (
                  <AccordionItem key={term.id} value={term.id}>
                    <AccordionTrigger className="text-left hover:no-underline px-4 py-3">
                      <span className="font-medium text-base">{term.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground px-4 pb-3">
                      {term.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}