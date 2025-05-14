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
  const [planCount, setPlanCount] = useState(1);
  const [months, setMonths] = useState(1);
  const [btcPrice, setBtcPrice] = useState(40583.2);
  const [investment, setInvestment] = useState(0);
  const [estimatedIncome, setEstimatedIncome] = useState(0);
  const [roi, setRoi] = useState(0);
  const [dailyIncome, setDailyIncome] = useState(0);

  // Plan details
  const plans = {
    "Plan 250 - 250 TH/s": {
      hashrate: 250, // TH/s
      price: 1800, // USD per plan
      dailyBtc: 0.00045, // BTC per day per plan
      maintenanceFee: 0.05, // 5% maintenance fee
    },
    "Plan 500 - 500 TH/s": {
      hashrate: 500,
      price: 3500,
      dailyBtc: 0.0009,
      maintenanceFee: 0.045, // 4.5%
    },
    "Plan 1000 - 1000 TH/s": {
      hashrate: 1000,
      price: 6800,
      dailyBtc: 0.0018,
      maintenanceFee: 0.04, // 4%
    },
  };

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
    const selectedPlanData = plans[selectedPlan];
    if (!selectedPlanData) return;

    // Calculate investment (price per plan * number of plans)
    const totalInvestment = selectedPlanData.price * planCount;
    setInvestment(totalInvestment);

    // Calculate daily BTC income (BTC per day per plan * number of plans)
    const dailyBtcIncome = selectedPlanData.dailyBtc * planCount;
    setDailyIncome(dailyBtcIncome);

    // Calculate estimated income (daily BTC * BTC price * days - maintenance fees)
    const daysInMonth = 30; // Approximation
    const totalDays = daysInMonth * months;

    // Gross income in BTC
    const totalBtcIncome = dailyBtcIncome * totalDays;

    // Convert to USD
    const grossIncomeUsd = totalBtcIncome * btcPrice;

    // Subtract maintenance fees (percentage of gross income)
    const maintenanceFees = grossIncomeUsd * selectedPlanData.maintenanceFee;
    const netIncomeUsd = grossIncomeUsd - maintenanceFees;

    setEstimatedIncome(netIncomeUsd);

    // Calculate ROI (percentage)
    const calculatedRoi = (netIncomeUsd / totalInvestment) * 100;
    setRoi(calculatedRoi);
  }, [selectedPlan, planCount, months, btcPrice]);

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
                    Plan 250 - 250 TH/s (${plans["Plan 250 - 250 TH/s"].price})
                  </SelectItem>
                  <SelectItem
                    value="Plan 500 - 500 TH/s"
                    className="cursor-pointer"
                  >
                    Plan 500 - 500 TH/s (${plans["Plan 500 - 500 TH/s"].price})
                  </SelectItem>
                  <SelectItem
                    value="Plan 1000 - 1000 TH/s"
                    className="cursor-pointer"
                  >
                    Plan 1000 - 1000 TH/s ($
                    {plans["Plan 1000 - 1000 TH/s"].price})
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
                <span className="text-sm text-gray-500">Current Price</span>
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
              <div className="text-xs text-gray-500">DAILY BTC INCOME</div>
              <div className="text-sm font-medium">
                {dailyIncome.toFixed(6)} BTC ($
                {(dailyIncome * btcPrice).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                )
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardItem}
            className="flex flex-col justify-between"
          >
            <Card className="p-6 border rounded-md flex flex-col">
              <div>
                <div className="text-sm font-bold text-gray-500">
                  TOTAL INVESTMENT
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
  <motion.div className="relative w-64 h-64">
    {/* Outer ring - Estimated Income (light blue) */}
    <div 
      className="absolute rounded-full border-[15px] border-[#58caef]"
      style={{
        top: `${15 - (estimatedIncome / investment) * 7.5}px`,
        left: `${15 - (estimatedIncome / investment) * 7.5}px`,
        right: `${15 - (estimatedIncome / investment) * 7.5}px`,
        bottom: `${15 - (estimatedIncome / investment) * 7.5}px`,
        borderWidth: `${(estimatedIncome / investment) * 15}px`,
        transition: 'all 0.5s ease'
      }}
    ></div>
    
    {/* Inner ring - Investment (dark blue) */}
    <div 
      className="absolute rounded-full border-[15px] border-[#2F4F7F]"
      style={{
        top: "30px",
        left: "30px",
        right: "30px",
        bottom: "30px",
        transition: 'all 0.5s ease'
      }}
    ></div>
    
    {/* Center text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="text-xs text-gray-600 font-semibold">
        MINING RETURN
      </div>
      <motion.div
        key={roi}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-bold text-[#333333] primary-font"
      >
        {roi.toFixed(2)}%
      </motion.div>
    </div>
  </motion.div>
</div>
              <div className="grid grid-cols-2 w-full gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="text-center"
                >
                  <div className="text-base text-[#00205B] primary-font font-semibold">
                    Investments
                  </div>
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
                  <div className="text-base  text-[#58caef] primary-font font-semibold">
                    Estimated Income
                  </div>
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
