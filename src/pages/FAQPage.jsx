import React from 'react';
import SEO from '../components/common/SEO';
import FAQSection from '../components/home/FAQSection';
import CtaBanner from '../components/home/CtaBanner';

export default function FAQPage() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions — Hextorq Hosting"
        description="Find answers to common questions about Hextorq Shared Hosting, Flexible Bursting, dedicated VPS, and root server administration."
        canonical="https://hosting.hextorq.tech/faq"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        <FAQSection />
        <CtaBanner />
      </div>
    </>
  );
}
