import LogoLight from "./LogoLight";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-center">
          <LogoLight height={40} />
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} New Revive Japan. All rights reserved.
          </p>
          <a
            href="https://newrevive.com"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <span>{"\u{1F30D}"}</span>
            <span>New Revive Global</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
