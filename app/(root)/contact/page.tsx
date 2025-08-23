import ContactForm from "@/components/forms/contact-form";
import { Dot, Home, Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Contact us",
};

function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto max-md:p-2.5 overflow-hidden">
      <div className="relative min-h-[40vh] flex items-center justify-center flex-col">
        <h2 className="text-center text-4xl section-title font-crete-round">
          <span>Contact</span>
        </h2>

        <div className="flex gap-1 items-center mt-4">
          <Home className="size-4" />
          <Link
            href={"/"}
            className="opacity-90 hover:underline hover:opacity-100"
          >
            Home
          </Link>
          <Dot />
          <p className="text-muted-foreground">Contact</p>
        </div>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6">
        <div className="flex flex-col">
          <h1 className="text-4xl font-crete-round">Contact Muhiddinov</h1>
          <p className="mt-2 text-muted-foreground">
            I am here to help and answer any question you might have. I look
            forward to hearing from you
          </p>

          <div className="mt-12 flex items-center gap-3">
            <Mail className="size-4" />
            <p className="text-sm">muhiddinovnurmuhammadxon1@gmail.com</p>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <Phone className="size-4" />
            <p className="text-sm">+998 (93) 245 20 05</p>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-crete-round mb-2">Contact form</h1>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
