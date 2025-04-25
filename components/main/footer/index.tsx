import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-gray-200 text-sm text-gray-600">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-6 px-6 text-center">
          {footerLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="hover:text-gray-900 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="w-full text-center mt-4">
          © {currentYear} AniverStudio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
