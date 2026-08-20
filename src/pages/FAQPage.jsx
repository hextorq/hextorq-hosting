import React from 'react';
import SEO from '../components/common/SEO';
import FAQSection from '../components/home/FAQSection';
import CtaBanner from '../components/home/CtaBanner';
import { HelpCircle } from 'lucide-react';

export default function FAQPage() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions — Hextorq Hosting Knowledge Base"
        description="Find comprehensive answers regarding Hextorq Shared Application hosting, flexible bursting, dedicated VPS servers, root access, and migrations."
        canonical="https://hosting.hextorq.tech/faq"
      />

      <div className="pt-28 pb-20 bg-[#06090E] min-h-screen text-slate-100">
        <FAQSection showAll={true} />
        <CtaBanner />
      </div>
    </>
  );
}
