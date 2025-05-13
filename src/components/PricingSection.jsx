"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function PricingSection() {
  const packages = [
    {
      name: "Plan 250",
      type: "Mining Small",
      hours: "250 TH/S",
      price: "1550",
    },
    {
      name: "Plan 500",
      type: "Mining Medium",
      hours: "500 TH/S",
      price: "2500",
    },
    {
      name: "Plan 750",
      type: "Mining Large",
      hours: "750 TH/S",
      price: "3299",
    },
    {
      name: "Plan 1,000",
      type: "Mining Mega",
      hours: "1000 TH/S",
      price: "4100",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-nomral mb-3 text-[#333333] actor-font">Choose Your Package</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Most popular plans for small and medium businesses or you can select
            your own plan options below
          </p>
        </motion.div>

        <div className="flex items-center mb-6">
          <button className="flex items-center gap-2 border rounded-md px-3 py-2 text-sm hover:cursor-pointer">
            12-month contract
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-xl overflow-hidden relative cursor-pointer border-0 shadow-none">
                <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-[#9169CA] to-[#667EAE] z-0" />
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-[#9169CA] to-[#667EAE] p-1.5 rounded">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8315 13.1736H9.27022C8.84088 13.1736 8.4896 12.8223 8.4896 12.393H3.03306V15.5155C3.03306 16.3741 3.73562 17.0767 4.5943 17.0767H15.5152C16.3739 17.0767 17.0764 16.3741 17.0764 15.5155V12.393H11.6121C11.6121 12.8223 11.2608 13.1736 10.8315 13.1736ZM16.2958 6.148H13.1733C13.1733 4.42282 11.776 3.02551 10.0508 3.02551C8.32567 3.02551 6.92836 4.42282 6.92836 6.148H3.80587C2.94719 6.148 2.24463 6.85056 2.24463 7.70924V10.0511C2.24463 10.9176 2.93938 11.6123 3.80587 11.6123H8.4896V10.8317C8.4896 10.4024 8.84088 10.0511 9.27022 10.0511H10.8315C11.2608 10.0511 11.6121 10.4024 11.6121 10.8317V11.6123H16.2958C17.1545 11.6123 17.8571 10.9098 17.8571 10.0511V7.70924C17.8571 6.85056 17.1545 6.148 16.2958 6.148ZM8.4896 6.148C8.4896 5.28931 9.19216 4.58676 10.0508 4.58676C10.9095 4.58676 11.6121 5.28931 11.6121 6.148H8.48179H8.4896Z"
                          fill="#F8F8F8"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium py-1.5 px-2 rounded bg-gray-50">
                      {pkg.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mt-2">{pkg.name}</h3>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-400 text-sm mb-2 actor-intern">Hashrate</p>
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 6.75H7.5C7.0875 6.75 6.75 7.0875 6.75 7.5V10.5C6.75 10.9125 7.0875 11.25 7.5 11.25H10.5C10.9125 11.25 11.25 10.9125 11.25 10.5V7.5C11.25 7.0875 10.9125 6.75 10.5 6.75ZM9.75 9.75H8.25V8.25H9.75V9.75ZM15.75 7.5C15.75 7.0875 15.4125 6.75 15 6.75H14.25V5.25C14.25 4.425 13.575 3.75 12.75 3.75H11.25V3C11.25 2.5875 10.9125 2.25 10.5 2.25C10.0875 2.25 9.75 2.5875 9.75 3V3.75H8.25V3C8.25 2.5875 7.9125 2.25 7.5 2.25C7.0875 2.25 6.75 2.5875 6.75 3V3.75H5.25C4.425 3.75 3.75 4.425 3.75 5.25V6.75H3C2.5875 6.75 2.25 7.0875 2.25 7.5C2.25 7.9125 2.5875 8.25 3 8.25H3.75V9.75H3C2.5875 9.75 2.25 10.0875 2.25 10.5C2.25 10.9125 2.5875 11.25 3 11.25H3.75V12.75C3.75 13.575 4.425 14.25 5.25 14.25H6.75V15C6.75 15.4125 7.0875 15.75 7.5 15.75C7.9125 15.75 8.25 15.4125 8.25 15V14.25H9.75V15C9.75 15.4125 10.0875 15.75 10.5 15.75C10.9125 15.75 11.25 15.4125 11.25 15V14.25H12.75C13.575 14.25 14.25 13.575 14.25 12.75V11.25H15C15.4125 11.25 15.75 10.9125 15.75 10.5C15.75 10.0875 15.4125 9.75 15 9.75H14.25V8.25H15C15.4125 8.25 15.75 7.9125 15.75 7.5ZM12 12.75H6C5.5875 12.75 5.25 12.4125 5.25 12V6C5.25 5.5875 5.5875 5.25 6 5.25H12C12.4125 5.25 12.75 5.5875 12.75 6V12C12.75 12.4125 12.4125 12.75 12 12.75Z"
                        fill="#00205B"
                      />
                    </svg>
                    <span className="text-md font-semibold">{pkg.hours}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start pt-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-gray-400 text-4xl font-bold">
                      AED
                    </span>
                    <span className="text-4xl font-bold text-[#333333]">{pkg.price}</span>
                    <span className="text-sm text-gray-400">/ month + VAT</span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
