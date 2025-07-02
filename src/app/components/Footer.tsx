import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">NetSec</h3>
          <p>Smart Tech. Strong Security.</p>
          <p className="mt-2 text-sm">© 2025 NetSec. All rights reserved.</p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blogs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Cybersecurity Consulting</li>
            <li>Desktop Software</li>
            <li>Mobile Apps</li>
            <li>Technical Training</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <p className="text-sm">netsec@gmail.com</p>
          <p className="text-sm">+233-XX-XXX-XXXX</p>
          <p className="text-sm">Accra, Ghana</p>
        </div>
      </div>

      <div className="text-center py-4 border-t text-sm">
        <Link href="/terms" className="mr-4 hover:text-accent">Terms and Conditions</Link>
        <Link href="/privacy" className="hover:text-accent">Privacy Policy</Link>
      </div>
    </footer>
  );
}
