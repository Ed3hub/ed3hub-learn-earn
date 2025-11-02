
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/ed3hub-logo.png" 
              alt="Ed3Hub"
              className="h-12"
            />
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Follow us on</span>
            <a 
              href="https://x.com/ed3hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2024 Ed3Hub. Coming soon.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
