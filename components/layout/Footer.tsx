import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F14] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-[3px] items-end h-6">
                {[14, 18, 22, 16].map((h, i) => (
                  <div key={i} className="w-[4px] rounded-sm gradient-teal-blue" style={{ height: `${h}px` }} />
                ))}
              </div>
              <span className="text-white font-semibold tracking-tight">
                Four Stones <span className="text-gradient">AI</span>
              </span>
            </div>
            <p className="text-[#CBD5E1]/60 text-sm leading-relaxed">
              AI consulting for small businesses that are ready to stop talking about AI and start using it.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { href: '/services', label: 'Services' },
                { href: '/workshop', label: 'Workshop' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#CBD5E1]/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Find Us</h4>
            <address className="not-italic text-[#CBD5E1]/60 text-sm leading-relaxed">
              7771 Hwy 72 W, Suite C<br />
              Madison, AL 35758<br /><br />
              <a href="mailto:kyle@fourstones.ai" className="hover:text-white transition-colors">
                kyle@fourstones.ai
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#CBD5E1]/40 text-xs">
            © {new Date().getFullYear()} Four Stones AI — a DBA of Four Stones Digital LLC. All rights reserved.
          </p>
          <p className="text-[#CBD5E1]/40 text-xs">Huntsville / Madison, Alabama</p>
        </div>
      </div>
    </footer>
  );
}
