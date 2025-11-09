function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-600">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
            <span className="font-semibold text-gray-800">Vibe Portal</span>
          </div>
          <p className="mt-3">A clean, secure gateway to your organization's tools and data.</p>
        </div>
        <div>
          <p className="font-medium text-gray-800">Company</p>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-gray-900" href="#about">About</a></li>
            <li><a className="hover:text-gray-900" href="#modules">Modules</a></li>
            <li><a className="hover:text-gray-900" href="#privacy">Privacy</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-gray-800">Contact</p>
          <p className="mt-2">support@vibe-portal.app</p>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-500">© {new Date().getFullYear()} Vibe Portal. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
