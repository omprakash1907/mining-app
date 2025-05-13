import { Link } from "react-router-dom";
import appgallery from "@/assets/image/appgallery.png";
import apple from "@/assets/image/apple.png";
import googleplay from "@/assets/image/googleplay.png";
import assistant from "@/assets/image/du-assistant.png";
import logo from '@/assets/image/logo.png'


export default function Footer() {
  const footerLinks = {
    products: ["Devices", "Mobile Plans", "Fixed services", "Offers"],
    solutionsByIndustry: [
      "Retail",
      "Healthcare",
      "Hospitality",
      "Education",
      "Transportation",
      "Construction",
    ],
    solutionsByBusinessType: [
      "Small & Medium business",
      "Large enterprise",
      "Government entity",
    ],
    solutionsByNeed: [
      "Small & Medium business",
      "Large enterprise",
      "Government entity",
    ],
    helpAndSupport: [
      "Overview",
      "General support",
      "Support plans",
      "Fixed services",
    ],
    aboutUs: ["Who we are", "News", "Fibre network", "%G for business"],
  };

  return (
    <footer className="bg-[#EEEEEE] pt-8 sm:pt-10 md:pt-12 pb-4 text-[#333333]">
      <div className="container mx-auto px-4 sm:px-4">
        {/* First row of columns */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="col-span-1">
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-4">
              Products
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-xs sm:text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-4">
              Solutions by industry
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.solutionsByIndustry.map((link, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-xs sm:text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-4">
              Solutions by business type
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.solutionsByBusinessType.map((link, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-xs sm:text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-4">
              Solutions by need
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.solutionsByNeed.map((link, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-xs sm:text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 xs:col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-1 mt-4 sm:mt-0 flex justify-center lg:justify-end">
            <img src={assistant} alt="assistant" className="h-fit w-fit" />
          </div>
        </div>

        {/* Second row of columns */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="col-span-1">
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-4">
              Help & support
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.helpAndSupport.map((link, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-xs sm:text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-4">
              About us
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.aboutUs.map((link, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="text-xs sm:text-sm hover:text-gray-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-2 mt-4 sm:mt-0">
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-4">
              Download the app
            </h3>
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              {/* App Store */}
              <Link to="#" className="inline-block">
                <img
                  src={apple || "/placeholder.svg"}
                  alt="App Store"
                  className="h-8 sm:h-auto w-auto"
                />
              </Link>
              {/* Google Play */}
              <Link to="#" className="inline-block">
                <img
                  src={googleplay || "/placeholder.svg"}
                  alt="Google Play"
                  className="h-8 sm:h-auto w-auto"
                />
              </Link>
              {/* App Gallery */}
              <Link to="#" className="inline-block">
                <img
                  src={appgallery || "/placeholder.svg"}
                  alt="Huawei AppGallery"
                  className="h-8 sm:h-auto w-auto"
                />
              </Link>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-1 mt-4 sm:mt-0 flex flex-col items-end">
            <h3 className="font-bold text-sm sm:text-base mb-2 sm:mb-4">
              Follow us on social media
            </h3>
            <div className="flex gap-2 sm:gap-4">
              {/* Instagram */}
              <Link
                to="#"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-[#DDDDDD] hover:bg-[#CCCCCC] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  className="sm:w-5 sm:h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
                    fill="#333333"
                  />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>

              {/* YouTube */}
              <Link
                to="#"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-[#DDDDDD] hover:bg-[#CCCCCC] transition-colors"
              >
                <svg
                  width="16"
                  height="11"
                  className="sm:w-5 sm:h-3.5"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
                    fill="#333333"
                  />
                </svg>
                <span className="sr-only">YouTube</span>
              </Link>

              {/* Facebook */}
              <Link
                to="#"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-[#DDDDDD] hover:bg-[#CCCCCC] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  className="sm:w-5 sm:h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
                    fill="#333333"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>

              {/* X/Twitter */}
              <Link
                to="#"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md bg-[#DDDDDD] hover:bg-[#CCCCCC] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  className="sm:w-5 sm:h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.808 8.469L18.88 0H17.204L11.062 7.353L6.158 0H0.5L7.918 11.12L0.5 20H2.176L8.662 12.235L13.842 20H19.5L11.808 8.469ZM9.512 11.217L8.76 10.11L2.78 1.3H5.355L10.181 8.41L10.932 9.517L17.205 18.759H14.631L9.512 11.217Z"
                    fill="#333333"
                  />
                </svg>
                <span className="sr-only">X/Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section with logo and links */}
        <div className="pt-6 sm:pt-8 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="flex items-center justify-center cursor-pointer">
                <img src={logo} alt="logo" className="h-8" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 sm:mb-0">
              <Link to="#" className="hover:underline text-[10px] sm:text-xs">
                Sitemap
              </Link>
              <Link to="#" className="hover:underline text-[10px] sm:text-xs">
                Terms and conditions
              </Link>
              <Link to="#" className="hover:underline text-[10px] sm:text-xs">
                Privacy policy
              </Link>
              <Link to="#" className="hover:underline text-[10px] sm:text-xs">
                Code of conduct
              </Link>
            </div>

            <div className="text-center text-[10px] sm:text-xs">
              © Copyright 2024 EITC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
