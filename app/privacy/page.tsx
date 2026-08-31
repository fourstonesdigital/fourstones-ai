import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Four Stones AI',
};

export default function PrivacyPage() {
  const updated = 'August 29, 2026';

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-[#CBD5E1]/40 text-sm mb-12">Last updated: {updated}</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-[#CBD5E1]/70 leading-relaxed">

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">1. Who We Are</h2>
            <p>Four Stones AI is a DBA of Four Stones Digital LLC, located at 7771 Hwy 72 W, Suite C, Madison, AL 35758. We provide AI consulting services to small and medium-sized businesses in Huntsville, Madison, Decatur, and surrounding North Alabama communities. You can reach us at (256) 809-0048, support@fourstones.ai, or through the contact form at <Link href="/contact" className="text-[#1488AA] hover:text-[#0686D4]">fourstones.ai/contact</Link>.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">2. Information We Collect</h2>
            <p>When you submit our contact form, we collect:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Your name and email address</li>
              <li>Your phone number</li>
              <li>Your business name and industry (optional)</li>
              <li>Your message and stated interest</li>
              <li>Whether you have consented to receive SMS messages</li>
            </ul>
            <p className="mt-4">We do not collect payment information directly. Workshop registrations are processed through Eventbrite, which has its own privacy policy.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Respond to your inquiry</li>
              <li>Schedule and conduct consultations</li>
              <li>Send you information about our services and workshops</li>
              <li>Send SMS messages, if you have explicitly consented</li>
            </ul>
            <p className="mt-4">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">4. SMS Communications</h2>
            <p>If you check the SMS consent box on our contact form, you agree to receive text messages from Four Stones AI at the phone number you provide. Message frequency varies. Message and data rates may apply.</p>
            <p className="mt-3">You can opt out at any time by replying STOP to any message we send. For help, reply HELP. Consent to receive SMS messages is not a condition of purchasing any service.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">5. Data Retention</h2>
            <p>We retain contact form submissions for as long as necessary to respond to your inquiry and maintain a business relationship. You may request deletion of your information at any time by contacting us at (256) 809-0048 or support@fourstones.ai.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">6. Third-Party Services</h2>
            <p>This website uses the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li><strong className="text-white">Vercel</strong> — website hosting</li>
              <li><strong className="text-white">Postmark</strong> — email delivery of contact form submissions</li>
              <li><strong className="text-white">Eventbrite</strong> — workshop registration and ticketing</li>
            </ul>
            <p className="mt-4">Each of these services has its own privacy policy governing their use of data.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">7. Cookies</h2>
            <p>This website does not use tracking cookies or analytics. We do not run advertising pixels or behavioral tracking of any kind.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">8. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of any personal information we hold about you. To exercise these rights, contact us at (256) 809-0048, support@fourstones.ai, or through the <Link href="/contact" className="text-[#1488AA] hover:text-[#0686D4]">contact form</Link>.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">9. Changes to This Policy</h2>
            <p>We may update this policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-semibold mb-3">10. Contact</h2>
            <p>Questions about this policy? Reach us at:</p>
            <address className="not-italic mt-3">
              Four Stones AI / Four Stones Digital LLC<br />
              7771 Hwy 72 W, Suite C<br />
              Madison, AL 35758<br />
              (256) 809-0048<br />
              <a href="mailto:support@fourstones.ai">support@fourstones.ai</a>
            </address>
          </div>

        </div>
      </div>
    </section>
  );
}
