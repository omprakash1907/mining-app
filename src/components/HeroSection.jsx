"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import heroimage from "@/assets/image/bg-vector.png";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen flex flex-col justify-between">
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute right-0 top-[-80px] "
        >
          <div className="relative  w-[150px] h-[150px] md:w-[400px] md:h-[400px]">
            <img
              src={heroimage}
              alt="Blue butterfly"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-start justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 "
            >
              <h1 className="text-5xl md:text-7xl font-bold primary-font ">
                <span className="bg-gradient-to-r from-[#9169CA] to-[#667EAE] bg-clip-text text-transparent">Bitcoin mining as a</span> service for everyone.
              </h1>

              <div className="flex gap-4 items-center justify-end mt-12 md:w-2/3 ">
                <Button className="primary-bg text-white px-10 py-6 font-medium hover:cursor-pointer flex grow">
                  Start mining Bitcoin now
                </Button>
                <div className="ml-4">
                  <a
                    href="#"
                    className="flex items-center text-[#333333] hover:text-gray-600 transition-colors "
                  >
                    <span className="mr-2">Explore all plans</span>
                    <svg
                      width="13"
                      height="18"
                      viewBox="0 0 13 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3371 11.266C11.9801 10.909 11.4021 10.909 11.0451 11.266L7.47905 14.823V0.917007C7.47905 0.413007 7.06606 0 6.56206 0C6.05806 0 5.64507 0.413007 5.64507 0.917007V14.832L2.08907 11.275C1.73107 10.918 1.15407 10.918 0.79607 11.275C0.43907 11.633 0.43907 12.21 0.79607 12.568L5.92006 17.692C6.27806 18.05 6.85506 18.05 7.21306 17.692L12.3371 12.568C12.6851 12.21 12.6851 11.624 12.3371 11.266Z"
                        fill="#333333"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Panel */}
      <section className="pb-24 px-4">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Buy Subscriptions Card */}
            <motion.div variants={item}>
              <Card className="h-full bg-[#424242] text-white border-none shadow-lg rounded-xl overflow-hidden hover:transform hover:scale-[1.01] transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-3xl font-medium primary-font">
                    Buy Subscriptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-md text-gray-200">Lorem ipsum</p>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between items-center w-full">
                    <a
                      href="#"
                      className="text-lg flex items-center gap-1 text-gray-200 hover:text-white transition-colors"
                    >
                      Explore all
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.24995 5.49998C8.24995 6.01331 8.66245 6.41665 9.16662 6.41665H14.2908L4.30829 16.3991C3.95079 16.7566 3.95079 17.3341 4.30829 17.6916C4.66579 18.0491 5.24329 18.0491 5.60079 17.6916L15.5833 7.70915V12.8333C15.5833 13.3375 15.9958 13.75 16.5 13.75C17.0041 13.75 17.4166 13.3375 17.4166 12.8333V5.49998C17.4166 4.99581 17.0041 4.58331 16.5 4.58331H9.16662C8.66245 4.58331 8.24995 4.99581 8.24995 5.49998Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Why Us? Card */}
            <motion.div variants={item}>
              <Card className="h-full bg-white border-none shadow-lg rounded-xl overflow-hidden hover:transform hover:scale-[1.01] transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-[#333333]">
                    Why Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-start items-center">
                  <div className="relative">
                    <img
                      src={heroimage}
                      alt="Blue butterfly"
                      className="object-contain w-48 h-48"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Empty Card (for layout balance) */}
            <motion.div variants={item}>
              <Card className="h-full bg-[#424242] text-white border-none shadow-lg rounded-xl overflow-hidden hover:transform hover:scale-[1.01] transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-medium">Feature</CardTitle>
                </CardHeader>
                <CardContent>{/* Placeholder for content */}</CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
