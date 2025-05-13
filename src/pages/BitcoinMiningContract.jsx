import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InfoIcon as InfoCircle } from "lucide-react";

export default function BitcoinMiningContract() {
  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#333333] mb-6 primary-font ">
            Hello Sergio,
          </h1>
          <p className="text-gray-600 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-32">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-[#333333] mb-1 primary-font">
                Select your Bitcoin mining contract
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                One line description explaining bundle plans
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative bg-white">
                  <input
                    type="radio"
                    id="250th"
                    name="contract"
                    className="peer sr-only"
                    defaultChecked
                  />
                  <label
                    htmlFor="250th"
                    className="flex justify-center font-bold items-center h-12 border border-gray-300 rounded-md peer-checked:border-[#00205B] peer-checked:border-2 cursor-pointer"
                  >
                    250TH
                  </label>
                </div>
                <div className="relative  bg-white">
                  <input
                    type="radio"
                    id="500th"
                    name="contract"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="500th"
                    className="flex justify-center font-bold items-center h-12 border border-gray-300 rounded-md peer-checked:border-[#00205B] peer-checked:border-2 cursor-pointer"
                  >
                    500TH
                  </label>
                </div>
                <div className="relative  bg-white">
                  <input
                    type="radio"
                    id="1000th"
                    name="contract"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="1000th"
                    className="flex justify-center font-bold items-center h-12 border border-gray-300 rounded-md peer-checked:border-[#00205B] peer-checked:border-2 cursor-pointer"
                  >
                    1000TH
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#333333] mb-1 primary-font">
                Select your contract duration
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                One line description here
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative  bg-white">
                  <input
                    type="radio"
                    id="6months"
                    name="duration"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="6months"
                    className="flex justify-center primary-font items-center h-12 border border-gray-300 rounded-md peer-checked:border-[#00205B] peer-checked:border-2 cursor-pointer"
                  >
                    6 Months
                  </label>
                </div>
                <div className="relative  bg-white">
                  <input
                    type="radio"
                    id="1year"
                    name="duration"
                    className="peer sr-only"
                    defaultChecked
                  />
                  <label
                    htmlFor="1year"
                    className="flex flex-col primary-font justify-center items-center h-12 border border-gray-300 rounded-md peer-checked:border-[#00205B] peer-checked:border-2 cursor-pointer relative"
                  >
                    <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 bg-[#00205B] text-white text-xs px-2 py-0.5 rounded-sm whitespace-nowrap">
                      Most popular
                    </div>
                    1 Year
                  </label>
                </div>
                <div className="relative  bg-white">
                  <input
                    type="radio"
                    id="2years"
                    name="duration"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="2years"
                    className="flex justify-center primary-font items-center h-12 border border-gray-300 rounded-md peer-checked:border-[#00205B] peer-checked:border-2 cursor-pointer"
                  >
                    2 Years
                  </label>
                </div>
                <div className="relative  bg-white">
                  <input
                    type="radio"
                    id="3years"
                    name="duration"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="3years"
                    className="flex justify-center primary-font items-center h-12 border border-gray-300 rounded-md peer-checked:border-[#00205B] peer-checked:border-2 cursor-pointer"
                  >
                    3 Years
                  </label>
                </div>
                <div className="relative  bg-white">
                  <input
                    type="radio"
                    id="5years"
                    t
                    name="duration"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="5years"
                    className="flex justify-center primary-font items-center h-12 border border-gray-300 rounded-md peer-checked:border-[#00205B] peer-checked:border-2 cursor-pointer"
                  >
                    5 Years
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="p-6 shadow-none border-0">
              <h2 className="text-lg font-semibold text-[#333333]  primary-font">
                Your mining contract
              </h2>

              <div className="space-y-20">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">
                      Bitcoin mining contract
                    </h3>
                    <p className="font-medium">250TH</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-600">
                      Contract duration
                    </h3>
                    <p className="font-medium">1 Year</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between pt-2">
                    <button className="text-[#00205B] text-sm font-semibold flex items-center">
                      View plan details
                    </button>
                    <InfoCircle className="h-5 w-5 text-[#00205B]" />
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total</span>
                      <div className="text-right">
                        <span className="font-bold text-xl text-[#333333]">AED 1,800</span>
                        <span className="text-gray-500 text-sm"> /month</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 primary-bg hover:bg-blue-800">
                      Select
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
