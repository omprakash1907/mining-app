import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export default function OutputValues() {
  const [selectedPlan, setSelectedPlan] = useState("Plan 250 - 250 TH/s");
  const [planCount, setPlanCount] = useState(11);
  const [months, setMonths] = useState(9);
  const [btcPrice, setBtcPrice] = useState(40583.2);
  const [investment, setInvestment] = useState(20019.87);
  const [estimatedIncome, setEstimatedIncome] = useState(21102.11);
  const [roi, setRoi] = useState(104.51);

  // Animation variants
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Calculate values when inputs change
  useEffect(() => {
    setInvestment(20019.87);
    setEstimatedIncome(21102.11);
    setRoi(104.51);
  }, [selectedPlan, planCount, months, btcPrice]);

  const returnValue = 104.51;

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="w-full container mx-auto px-4 py-16"
    >
      <motion.div variants={item} className="bg-gray-50 py-4 px-2">
        <div className="text-gray-500 primary-font">ROI CALCULATOR</div>
        <h1 className="text-3xl font-bold text-slate-800 mb-4 primary-font">
          See your potential.
        </h1>
      </motion.div>
      
      <div className="bg-white">
        <div className="grid md:grid-cols-2 items-center gap-8 py-4">
          <motion.div variants={item} className="space-y-6 p-8">
            <motion.div variants={item} className="space-y-2">
              <label className="text-sm font-medium">Select a plan</label>
              <Select
                value={selectedPlan}
                onValueChange={setSelectedPlan}
                className="cursor-pointer"
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Select a plan"
                    className="cursor-pointer"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="Plan 250 - 250 TH/s"
                    className="cursor-pointer"
                  >
                    Plan 250 - 250 TH/s
                  </SelectItem>
                  <SelectItem
                    value="Plan 500 - 500 TH/s"
                    className="cursor-pointer"
                  >
                    Plan 500 - 500 TH/s
                  </SelectItem>
                  <SelectItem
                    value="Plan 1000 - 1000 TH/s"
                    className="cursor-pointer"
                  >
                    Plan 1000 - 1000 TH/s
                  </SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">How many plans?</label>
                <span className="text-sm text-gray-500">Maximum: 20</span>
              </div>
              <Slider
                value={[planCount]}
                min={1}
                max={20}
                step={1}
                onValueChange={(value) => setPlanCount(value[0])}
                className="py-4"
              />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-slate-800 text-white text-xs font-medium px-3 py-1"
              >
                {planCount} PLANS
              </motion.div>
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">How many months?</label>
                <span className="text-sm text-gray-500">Maximum: 12</span>
              </div>
              <Slider
                value={[months]}
                min={1}
                max={12}
                step={1}
                onValueChange={(value) => setMonths(value[0])}
                className="py-4"
              />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-slate-800 text-white text-xs font-medium px-3 py-1"
              >
                {months} MONTHS
              </motion.div>
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">
                  BTC Price Forecast
                </label>
                <span className="text-sm text-gray-500">24th October 2024</span>
              </div>
              <Input
                type="number"
                value={btcPrice}
                onChange={(e) => setBtcPrice(Number.parseFloat(e.target.value))}
                className="w-full"
                prefix="$"
              />
            </motion.div>

            <motion.div 
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 p-3 rounded"
            >
              <div className="text-xs text-gray-500">PRICE OF HASHRATE</div>
              <div className="text-sm font-medium">0.049,683 USD/TH/Day</div>
            </motion.div>
          </motion.div>

          <motion.div variants={cardItem} className="flex flex-col justify-between">
            <Card className="p-6 border rounded-md flex flex-col">
              <div>
                <div className="text-sm font-bold text-gray-500">
                  HASHRATE FEE
                </div>
                <motion.div 
                  key={investment}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-bold"
                >
                  $
                  {investment.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </motion.div>
              </div>
              <div className="flex justify-center items-center w-full">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative w-64 h-64"
                >
                  {/* Outermost ring - light blue (10px) */}
                  <div className="absolute inset-0 rounded-full border-[15px] border-[#58caef]"></div>

                  {/* Middle ring - white (20px) - offset by 10px to show light blue outer */}
                  <div
                    className="absolute rounded-full border-[15px] border-white"
                    style={{
                      top: "20px",
                      left: "20px",
                      right: "20px",
                      bottom: "20px",
                    }}
                  ></div>

                  {/* Innermost ring - dark blue (30px) - offset by 30px to show white middle */}
                  <div
                    className="absolute rounded-full border-[15px] border-[#2F4F7F]"
                    style={{
                      top: "30px",
                      left: "30px",
                      right: "30px",
                      bottom: "30px",
                    }}
                  ></div>

                  {/* Text display */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-xs text-gray-600 font-semibold">
                      MINING RETURN
                    </div>
                    <motion.div 
                      key={returnValue}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-[#333333] primary-font"
                    >
                      {returnValue.toFixed(2)}%
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 w-full gap-4">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="text-center"
                >
                  <div className="text-base text-[#00205B] primary-font font-semibold">Investments</div>
                  <motion.div 
                    key={investment}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-bold primary-font text-2xl"
                  >
                    $
                    {investment.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </motion.div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="text-center"
                >
                  <div className="text-base  text-[#58caef] primary-font font-semibold">Estimated Income</div>
                  <motion.div 
                    key={estimatedIncome}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-bold primary-font text-2xl"
                  >
                    $
                    {estimatedIncome.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full text-base bg-gradient-to-r from-[#663AB6] to-[#BB3AB1] text-white py-6 mt-2 hover:cursor-pointer rounded-md">
                  View our Plans
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}