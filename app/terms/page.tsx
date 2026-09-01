import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — Four Stones AI',
};

export default function TermsPage() {
  const updated = 'September 1, 2026';

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-[#CBD5E1]/40 text-sm mb-12">Last updated: {updated}</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-[#CBD5E1]/70 leading-relaxed">

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">1. Agreement</h2>
            <p>By using the fourstones.ai website or engaging Four Stones AI (a DBA of Four Stones Digital LLC) for services, you agree to these terms. If you do not agree, do not use this site or our services.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">2. Services</h2>
            <p>Four Stones AI provides AI consulting services including workshops, process reviews, and custom AI development. Specific scope, deliverables, and pricing for consulting and build engagements are defined in a separate agreement prior to work beginning. All fees are flat and one-time unless otherwise agreed in writing.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">3. AI Implementation Workshop</h2>
            <p>Workshop registration is handled through Eventbrite. By registering you agree to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Attend in person at the Madison, AL location on the registered date</li>
              <li>The refund policy: full refund if cancelled at least 3 days before the session; if you miss due to illness or another unforeseen circumstance, we will transfer your registration to a future workshop date — no cash refund; no refund or transfer for no-shows without prior notice</li>
              <li>Eventbrite's own terms of service governing the transaction</li>
            </ul>
            <p className="mt-4">Four Stones AI reserves the right to cancel or reschedule sessions with reasonable notice. In the event of cancellation by Four Stones AI, a full refund will be issued.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">4. Intellectual Property</h2>
            <p>Upon receipt of full payment, Client owns all custom deliverables created specifically for Client under a paid engagement, including source code, configurations, and documentation. Four Stones AI retains no ongoing rights or access to Client-specific systems after handoff.</p>
            <p className="mt-3">Four Stones AI retains ownership of any pre-existing tools, frameworks, libraries, or general-purpose components (&ldquo;Background IP&rdquo;) incorporated into the deliverables. Client receives a perpetual, royalty-free license to use such Background IP solely as part of the delivered work.</p>
            <p className="mt-3">Four Stones AI further retains the right to develop similar solutions for other clients using general skills, knowledge, architectural patterns, and techniques acquired during any engagement, provided such work does not directly reproduce Client&rsquo;s proprietary business logic, confidential data, or unique trade secrets.</p>
            <p className="mt-3">Website content, brand assets, and materials produced by Four Stones AI for its own use (including this website) remain the property of Four Stones Digital LLC.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">5. No Guarantees</h2>
            <p>AI tools and automations are built to the agreed specification and tested before delivery. Four Stones AI does not guarantee specific business outcomes (revenue, cost savings, efficiency gains) from any tool or engagement. Results depend on how the client implements and uses the tools provided.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Four Stones AI's liability for any claim arising from services provided is limited to the amount paid for those services. Four Stones AI is not liable for indirect, incidental, or consequential damages.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">7. Website Use</h2>
            <p>This website is provided for informational purposes. You may not use it for unlawful purposes or in any way that could damage the site or interfere with other users' access. We reserve the right to deny access to anyone for any reason.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">8. Dispute Resolution &amp; Arbitration</h2>
            <p>Any dispute, claim, or controversy arising out of or relating to these terms or any services provided by Four Stones AI — including questions about the existence, validity, or termination of this agreement — will be resolved exclusively through binding individual arbitration, not in court.</p>
            <p className="mt-3">Arbitration will be conducted by a single arbitrator under the rules of the American Arbitration Association (AAA) or a mutually agreed alternative. The arbitration will take place in Madison County, Alabama, or remotely by mutual agreement. The arbitrator&rsquo;s decision is final and may be entered as a judgment in any court of competent jurisdiction.</p>
            <p className="mt-3"><strong className="text-white">Class action waiver:</strong> All claims must be brought in an individual capacity. You waive any right to bring or participate in a class action, class arbitration, or representative proceeding.</p>
            <p className="mt-3"><strong className="text-white">Exceptions:</strong> Either party may seek emergency injunctive relief from a court to prevent irreparable harm pending arbitration. Claims that qualify for small claims court may be brought there instead of arbitration.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">9. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Alabama, without regard to conflict-of-law principles. To the extent any dispute proceeds in court (including enforcement of an arbitration award), the parties consent to jurisdiction in Madison County, Alabama.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">10. Changes</h2>
            <p>We may update these terms at any time. Changes are effective when posted. Continued use of this site after changes constitutes acceptance.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">11. Contact</h2>
            <p>Questions about these terms:</p>
            <address className="not-italic mt-3">
              Four Stones AI / Four Stones Digital LLC<br />
              7771 Hwy 72 W, Suite C<br />
              Madison, AL 35758<br />
              (256) 809-0048<br />
              <a href="mailto:support@fourstones.ai">support@fourstones.ai</a><br />
              <Link href="/contact" className="text-[#1488AA] hover:text-[#0686D4]">Contact form</Link>
            </address>
          </div>

        </div>
      </div>
    </section>
  );
}
