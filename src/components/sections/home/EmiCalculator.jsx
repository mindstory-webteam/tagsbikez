"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { img } from "@/assets/assest";
import AnimatedBtn from "@/components/AnimatedBtn";

const formatCurrency = (val) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val);

const parsePrice = (priceStr) => {
  if (typeof priceStr === "number") return priceStr;
  return parseInt(priceStr.replace(/[₹,]/g, ""), 10);
};

const BIKES_DATA = {
  "All": [
    { id: 1, name: "Bullet 350", model: "Military Black", price: "₹2,00,227", },
    { id: 2, name: "Bullet 350", model: "Battalion Black", price: "₹2,02,810", },
    { id: 3, name: "Bullet 350", model: "The Standard Black", price: "₹2,28,045", },
    { id: 4, name: "Bullet 350", model: "The Standard Maroon", price: "₹2,28,045", },
    { id: 5, name: "Bullet 350", model: "Black Gold", price: "₹2,63,224", },
    { id: 6, name: "Hunter 350", model: "Factory Black", price: "₹1,69,189", },
    { id: 7, name: "Hunter 350", model: "Graphite Grey", price: "₹2,01,051", },
    { id: 8, name: "Hunter 350", model: "Dapper Grey", price: "₹2,01,051", },
    { id: 9, name: "Hunter 350", model: "Rio White", price: "₹2,01,051", },
    { id: 10, name: "Hunter 350", model: "London Red", price: "₹2,06,464", },
    { id: 11, name: "Hunter 350", model: "Rebel Blue", price: "₹2,06,464", },
    { id: 12, name: "Hunter 350", model: "Tokyo Black", price: "₹2,06,464", },
    { id: 13, name: "Hunter 350", model: "Tarmac Black", price: "₹1,83,399", },
    { id: 14, name: "Hunter 350", model: "Moonshot White", price: "₹2,06,464", },
    { id: 15, name: "Hunter 350", model: "Mumbai Yellow", price: "₹2,06,464", },
    { id: 16, name: "Classic 350", model: "Redditch Red", price: "₹2,25,064", },
    { id: 17, name: "Classic 350", model: "Madras Red", price: "₹2,27,955", },
    { id: 18, name: "Classic 350", model: "Medallion Bronze", price: "₹2,37,252", },
    { id: 19, name: "Classic 350", model: "Commando Sand", price: "₹2,59,827", },
    { id: 20, name: "Classic 350", model: "Gun Grey", price: "₹2,73,669", },
    { id: 21, name: "Classic 350", model: "Stealth Black", price: "₹2,73,669", },
    { id: 22, name: "Classic 350", model: "Emerald Green", price: "₹2,79,533", },
    { id: 23, name: "Goan Classic 350", model: "Shack Black", price: "₹2,82,265", },
    { id: 24, name: "Goan Classic 350", model: "Purple Haze", price: "₹2,82,265", },
    { id: 25, name: "Goan Classic 350", model: "Trip Teal Green", price: "₹2,85,744", },
    { id: 26, name: "Goan Classic 350", model: "Rave Red", price: "₹2,85,744", },
    { id: 27, name: "Himalayan 450", model: "Kaza Brown", price: "₹3,91,615", },
    { id: 28, name: "Himalayan 450", model: "Slate Poppy Blue", price: "₹3,96,848", },
    { id: 29, name: "Himalayan 450", model: "Kamet White", price: "₹4,02,080", },
    { id: 30, name: "Himalayan 450", model: "Hanle Black", price: "₹4,08,619", },
    { id: 31, name: "Himalayan 450", model: "Mana Black", price: "₹4,29,779", },
    { id: 32, name: "Interceptor 650", model: "Cali Green", price: "₹4,27,777", },
    { id: 33, name: "Interceptor 650", model: "Canyon Red", price: "₹4,27,777", },
    { id: 34, name: "Interceptor 650", model: "Sunset Strip Black", price: "₹4,38,578", },
    { id: 35, name: "Interceptor 650", model: "Blackray", price: "₹4,52,075", },
    { id: 36, name: "Interceptor 650", model: "Mark Two Chrome", price: "₹4,65,570", },
    { id: 37, name: "Continental GT 650", model: "Rocker Red", price: "₹4,49,370", },
    { id: 38, name: "Continental GT 650", model: "British Racing Green", price: "₹4,49,370", },
    { id: 39, name: "Continental GT 650", model: "Apex Grey", price: "₹4,76,366", },
    { id: 40, name: "Continental GT 650", model: "Mr Clean Chrome", price: "₹4,84,463", },
    { id: 41, name: "Continental GT 650", model: "Slipstream Blue", price: "₹4,76,368", },
    { id: 42, name: "Interceptor Bear 650", model: "Board Walk White", price: "₹4,76,547", },
    { id: 43, name: "Interceptor Bear 650", model: "Board Wild Honey Yellow", price: "₹4,83,302", },
    { id: 44, name: "Interceptor Bear 650", model: "Board Golden Shadow Black", price: "₹4,92,752", },
    { id: 45, name: "Interceptor Bear 650", model: "Board White 249", price: "₹5,03,549", },
    { id: 46, name: "Meteor 350", model: "Fireball Grey", price: "₹2,27,819", },
    { id: 47, name: "Meteor 350", model: "Fireball Orange", price: "₹2,27,819", },
    { id: 48, name: "Meteor 350", model: "Stellar Matt Grey", price: "₹2,41,445", },
    { id: 49, name: "Meteor 350", model: "Stellar Marine Blue", price: "₹2,41,445", },
    { id: 50, name: "Meteor 350", model: "Aurora Red", price: "₹2,65,525", },
    { id: 51, name: "Meteor 350", model: "Aurora Retro Green", price: "₹2,65,525", },
    { id: 52, name: "Meteor 350", model: "Supernova Black", price: "₹2,77,421", },
    { id: 53, name: "Scram 440", model: "Trail Green", price: "₹2,80,301", },
    { id: 54, name: "Scram 440", model: "Force Blue", price: "₹3,00,050", },
    { id: 55, name: "Scram 440", model: "Force Grey", price: "₹3,00,050", },
    { id: 56, name: "Scram 440", model: "Force Teal", price: "₹3,00,050", },
    { id: 57, name: "Super Meteor 650", model: "Astral Black", price: "₹5,10,166", },
    { id: 58, name: "Super Meteor 650", model: "Interstellar Green", price: "₹5,30,722", },
    { id: 59, name: "Super Meteor 650", model: "Interstellar Grey", price: "₹5,30,722", },
    { id: 60, name: "Super Meteor 650", model: "Celestial Red", price: "₹5,51,281", },
    { id: 61, name: "Super Meteor 650", model: "Celestial Blue", price: "₹5,51,281", },
    { id: 62, name: "Guerrilla 450", model: "Twilight Blue", price: "₹3,22,673", },
    { id: 63, name: "Guerrilla 450", model: "Apex Red", price: "₹3,22,673", },
    { id: 64, name: "Guerrilla 450", model: "Apex Green", price: "₹3,31,443", },
    { id: 65, name: "Guerrilla 450", model: "Apex Black", price: "₹3,31,443", },
    { id: 66, name: "Guerrilla 450", model: "Peix Bronze", price: "₹3,44,523", },
    { id: 67, name: "Guerrilla 450", model: "Smoke Silver", price: "₹3,44,523", },
    { id: 68, name: "Guerrilla 450", model: "Shadow Ash Green", price: "₹3,44,523", },
    { id: 69, name: "Guerrilla 450", model: "Brava Blue", price: "₹3,51,064", },
    { id: 70, name: "Shotgun 650", model: "Sheet Metal Grey", price: "₹5,04,132", },
    { id: 71, name: "Shotgun 650", model: "Green Drill", price: "₹5,18,589", },
    { id: 72, name: "Shotgun 650", model: "Stencil White", price: "₹5,22,453", },
    { id: 73, name: "Classic 650", model: "Bruntingthorpe Blue", price: "₹4,63,700", },
    { id: 74, name: "Classic 650", model: "Vallam Red", price: "₹4,63,700", },
    { id: 75, name: "Classic 650", model: "Teal", price: "₹4,69,551", },
    { id: 76, name: "Classic 650", model: "Black Chrome", price: "₹4,81,252", },
  ],
  "Classic": [
    { id: 1, name: "Bullet 350", model: "Military Black", price: "₹2,00,227", },
    { id: 2, name: "Bullet 350", model: "Battalion Black", price: "₹2,02,810", },
    { id: 3, name: "Bullet 350", model: "The Standard Black", price: "₹2,28,045", },
    { id: 4, name: "Bullet 350", model: "The Standard Maroon", price: "₹2,28,045", },
    { id: 5, name: "Bullet 350", model: "Black Gold", price: "₹2,63,224", },
    { id: 16, name: "Classic 350", model: "Redditch Red", price: "₹2,25,064", },
    { id: 17, name: "Classic 350", model: "Madras Red", price: "₹2,27,955", },
    { id: 18, name: "Classic 350", model: "Medallion Bronze", price: "₹2,37,252", },
    { id: 19, name: "Classic 350", model: "Commando Sand", price: "₹2,59,827", },
    { id: 20, name: "Classic 350", model: "Gun Grey", price: "₹2,73,669", },
    { id: 21, name: "Classic 350", model: "Stealth Black", price: "₹2,73,669", },
    { id: 22, name: "Classic 350", model: "Emerald Green", price: "₹2,79,533", },
    { id: 23, name: "Goan Classic 350", model: "Shack Black", price: "₹2,82,265", },
    { id: 24, name: "Goan Classic 350", model: "Purple Haze", price: "₹2,82,265", },
    { id: 25, name: "Goan Classic 350", model: "Trip Teal Green", price: "₹2,85,744", },
    { id: 26, name: "Goan Classic 350", model: "Rave Red", price: "₹2,85,744", },
    { id: 73, name: "Classic 650", model: "Bruntingthorpe Blue", price: "₹4,63,700", },
    { id: 74, name: "Classic 650", model: "Vallam Red", price: "₹4,63,700", },
    { id: 75, name: "Classic 650", model: "Teal", price: "₹4,69,551", },
    { id: 76, name: "Classic 650", model: "Black Chrome", price: "₹4,81,252", },
  ],
  "Roadster": [
    { id: 6, name: "Hunter 350", model: "Factory Black", price: "₹1,69,189", },
    { id: 7, name: "Hunter 350", model: "Graphite Grey", price: "₹2,01,051", },
    { id: 8, name: "Hunter 350", model: "Dapper Grey", price: "₹2,01,051", },
    { id: 9, name: "Hunter 350", model: "Rio White", price: "₹2,01,051", },
    { id: 10, name: "Hunter 350", model: "London Red", price: "₹2,06,464", },
    { id: 11, name: "Hunter 350", model: "Rebel Blue", price: "₹2,06,464", },
    { id: 12, name: "Hunter 350", model: "Tokyo Black", price: "₹2,06,464", },
    { id: 13, name: "Hunter 350", model: "Tarmac Black", price: "₹1,83,399", },
    { id: 14, name: "Hunter 350", model: "Moonshot White", price: "₹2,06,464", },
    { id: 15, name: "Hunter 350", model: "Mumbai Yellow", price: "₹2,06,464", },
    { id: 62, name: "Guerrilla 450", model: "Twilight Blue", price: "₹3,22,673", },
    { id: 63, name: "Guerrilla 450", model: "Apex Red", price: "₹3,22,673", },
    { id: 64, name: "Guerrilla 450", model: "Apex Green", price: "₹3,31,443", },
    { id: 65, name: "Guerrilla 450", model: "Apex Black", price: "₹3,31,443", },
    { id: 66, name: "Guerrilla 450", model: "Peix Bronze", price: "₹3,44,523", },
    { id: 67, name: "Guerrilla 450", model: "Smoke Silver", price: "₹3,44,523", },
    { id: 68, name: "Guerrilla 450", model: "Shadow Ash Green", price: "₹3,44,523", },
    { id: 69, name: "Guerrilla 450", model: "Brava Blue", price: "₹3,51,064", },
  ],
  "Adventure": [
    { id: 27, name: "Himalayan 450", model: "Kaza Brown", price: "₹3,91,615", },
    { id: 28, name: "Himalayan 450", model: "Slate Poppy Blue", price: "₹3,96,848", },
    { id: 29, name: "Himalayan 450", model: "Kamet White", price: "₹4,02,080", },
    { id: 30, name: "Himalayan 450", model: "Hanle Black", price: "₹4,08,619", },
    { id: 31, name: "Himalayan 450", model: "Mana Black", price: "₹4,29,779", },
    { id: 53, name: "Scram 440", model: "Trail Green", price: "₹2,80,301", },
    { id: 54, name: "Scram 440", model: "Force Blue", price: "₹3,00,050", },
    { id: 55, name: "Scram 440", model: "Force Grey", price: "₹3,00,050", },
    { id: 56, name: "Scram 440", model: "Force Teal", price: "₹3,00,050", },
  ],
  "Cafe Racer": [
    { id: 32, name: "Interceptor 650", model: "Cali Green", price: "₹4,27,777", },
    { id: 33, name: "Interceptor 650", model: "Canyon Red", price: "₹4,27,777", },
    { id: 34, name: "Interceptor 650", model: "Sunset Strip Black", price: "₹4,38,578", },
    { id: 35, name: "Interceptor 650", model: "Blackray", price: "₹4,52,075", },
    { id: 36, name: "Interceptor 650", model: "Mark Two Chrome", price: "₹4,65,570", },
    { id: 37, name: "Continental GT 650", model: "Rocker Red", price: "₹4,49,370", },
    { id: 38, name: "Continental GT 650", model: "British Racing Green", price: "₹4,49,370", },
    { id: 39, name: "Continental GT 650", model: "Apex Grey", price: "₹4,76,366", },
    { id: 40, name: "Continental GT 650", model: "Mr Clean Chrome", price: "₹4,84,463", },
    { id: 41, name: "Continental GT 650", model: "Slipstream Blue", price: "₹4,76,368", },
    { id: 42, name: "Interceptor Bear 650", model: "Board Walk White", price: "₹4,76,547", },
    { id: 43, name: "Interceptor Bear 650", model: "Board Wild Honey Yellow", price: "₹4,83,302", },
    { id: 44, name: "Interceptor Bear 650", model: "Board Golden Shadow Black", price: "₹4,92,752", },
    { id: 45, name: "Interceptor Bear 650", model: "Board White 249", price: "₹5,03,549", },
  ],
  "Cruiser": [
    { id: 46, name: "Meteor 350", model: "Fireball Grey", price: "₹2,27,819", },
    { id: 47, name: "Meteor 350", model: "Fireball Orange", price: "₹2,27,819", },
    { id: 48, name: "Meteor 350", model: "Stellar Matt Grey", price: "₹2,41,445", },
    { id: 49, name: "Meteor 350", model: "Stellar Marine Blue", price: "₹2,41,445", },
    { id: 50, name: "Meteor 350", model: "Aurora Red", price: "₹2,65,525", },
    { id: 51, name: "Meteor 350", model: "Aurora Retro Green", price: "₹2,65,525", },
    { id: 52, name: "Meteor 350", model: "Supernova Black", price: "₹2,77,421", },
    { id: 57, name: "Super Meteor 650", model: "Astral Black", price: "₹5,10,166", },
    { id: 58, name: "Super Meteor 650", model: "Interstellar Green", price: "₹5,30,722", },
    { id: 59, name: "Super Meteor 650", model: "Interstellar Grey", price: "₹5,30,722", },
    { id: 60, name: "Super Meteor 650", model: "Celestial Red", price: "₹5,51,281", },
    { id: 61, name: "Super Meteor 650", model: "Celestial Blue", price: "₹5,51,281", },
    { id: 70, name: "Shotgun 650", model: "Sheet Metal Grey", price: "₹5,04,132", },
    { id: 71, name: "Shotgun 650", model: "Green Drill", price: "₹5,18,589", },
    { id: 72, name: "Shotgun 650", model: "Stencil White", price: "₹5,22,453", },
  ],
};

const LOAN_OPTIONS = [
  { label: "1 Year", value: 1 },
  { label: "2 Years", value: 2 },
  { label: "3 Years", value: 3 },
  { label: "4 Years", value: 4 },
  { label: "5 Years", value: 5 },
];

const CustomDropdown = ({ label, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2 font-body">
        {label}
      </label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-gray-50 border-2  py-4 px-5 flex justify-between items-center cursor-pointer transition-all ${
          isOpen ? "border-[#f51b24] bg-white shadow-lg" : "border-gray-100 hover:border-gray-200"
        }`}
      >
        <span className={`font-bold ${value ? "text-gray-900" : "text-gray-400"}`}>
          {value || placeholder}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#f51b24]" : "text-gray-400"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-100  max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map((opt, i) => (
            <div
              key={i}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className="px-5 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0"
            >
              <div className="font-bold text-gray-900">{opt.label || opt}</div>
              {opt.subLabel && <div className="text-xs text-gray-400 uppercase">{opt.subLabel}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function EmiCalculator() {
  const [category, setCategory] = useState("All");
  const [selectedBike, setSelectedBike] = useState(BIKES_DATA["All"][0]);
  const [downPct, setDownPct] = useState(20);
  const [loanYears, setLoanYears] = useState(3);
  const [interestRate, setInterestRate] = useState(10.5);

  const purchasePrice = parsePrice(selectedBike.price);

  const downPayment = Math.round(purchasePrice * (downPct / 100));
  const loanAmount = purchasePrice;

  const results = useMemo(() => {
    const r = interestRate / 100 / 12;
    const n = loanYears * 12;
    let emi = 0;
    if (r === 0) {
      emi = loanAmount / n;
    } else {
      emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
    const totalAmount = emi * n;
    const totalInterest = totalAmount - loanAmount;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
      months: n,
    };
  }, [loanAmount, loanYears, interestRate]);

  const bikeOptions = BIKES_DATA[category].map((b) => ({
    label: `${b.name} - ${b.model}`,
    subLabel: b.price,
    value: b,
  }));

  return (
    <section className="py-5 pb-20 ">
      <div className="max-w-[95%] mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[42px] md:text-5xl font-normal  mb-4 font-heading tracking-tight">
            Calculate Your EMI
          </p>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-body">
            Plan your dream ride with our easy finance calculator. Select your favorite model and get instant estimates.
          </p>
        </div>

        <div className="bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-gray-300">
          {/* Left Panel - Inputs */}
          <div className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-300">
            <div className="space-y-8">
              {/* Bike Selection Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CustomDropdown
                  label="Select Category"
                  options={Object.keys(BIKES_DATA)}
                  value={category}
                  onChange={(val) => {
                    setCategory(val);
                    setSelectedBike(BIKES_DATA[val][0]);
                  }}
                />
                <CustomDropdown
                  label="Select Model"
                  options={bikeOptions}
                  value={selectedBike ? `${selectedBike.name} - ${selectedBike.model}` : ""}
                  onChange={(opt) => setSelectedBike(opt.value)}
                  placeholder="Choose your bike"
                />
              </div>

              {/* Sliders Row */}
              <div className="space-y-12 px-2">
                {/* Down Payment Slider */}
                <div>
                  <div className="flex justify-between items-end mb-6">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-400 font-body">
                      Down Payment ({downPct}%)
                    </label>
                    <div className="text-2xl font-bold text-gray-900 font-heading">
                      {formatCurrency(downPayment)}
                    </div>
                  </div>
                  <div className="relative h-2 bg-gray-100 group">
                    <div 
                      className="absolute h-full bg-[#f51b24] transition-all duration-300" 
                      style={{ width: `${downPct}%` }}
                    />
                    <input
                      type="range"
                      min={10}
                      max={80}
                      step={1}
                      value={downPct}
                      onChange={(e) => setDownPct(Number(e.target.value))}
                      className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-[#f51b24] pointer-events-none transition-all duration-300"
                      style={{ left: `calc(${downPct}% - 12px)` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-300 uppercase tracking-widest mt-4">
                    <span>Min (10%)</span>
                    <span>Max (80%)</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div>
                  <div className="flex justify-between items-end mb-6">
                    <label className="text-sm font-semibold uppercase tracking-wider text-gray-400 font-body">
                      Interest Rate (p.a)
                    </label>
                    <div className="text-2xl font-bold text-gray-900 font-heading">
                      {interestRate}%
                    </div>
                  </div>
                  <div className="relative h-2 bg-gray-100 group">
                    <div 
                      className="absolute h-full bg-[#f51b24] transition-all duration-300" 
                      style={{ width: `${((interestRate - 5) / (20 - 5)) * 100}%` }}
                    />
                    <input
                      type="range"
                      min={5}
                      max={20}
                      step={0.1}
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-[#f51b24] pointer-events-none transition-all duration-300"
                      style={{ left: `calc(${((interestRate - 5) / (20 - 5)) * 100}% - 12px)` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-300 uppercase tracking-widest mt-4">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>

              {/* Loan Tenure */}
              <div className="px-2">
                <label className="block text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5 font-body">
                  Loan Tenure
                </label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {LOAN_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setLoanYears(opt.value)}
                      className={`py-3 font-bold transition-all border-2 ${
                        loanYears === opt.value
                          ? "bg-[#f51b24] border-[#f51b24] text-white"
                          : "bg-gray-50 border-gray-100 text-gray-600 hover:border-gray-200"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div className="lg:col-span-5 bg-[#1a1a1a] p-8 md:p-12 flex flex-col justify-between text-white">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <p className="text-gray-400 font-semibold uppercase tracking-widest text-sm mb-2 font-body">
                  Your monthly EMI
                </p>
                <div className="text-6xl md:text-7xl font-bold font-heading text-white tracking-tighter">
                  <span className="text-2xl text-[#f51b24] mr-2">Rs.</span>
                  {results.emi.toLocaleString()}
                  <span className="text-2xl text-gray-500 ml-1 font-body font-normal">*</span>
                </div>
                <p className="text-[#f51b24] text-sm font-semibold mt-3 uppercase tracking-wider">
                  Rate of interest @ {interestRate}%* for {results.months} Months
                </p>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <div className="flex justify-between items-center group">
                  <span className="text-gray-400 font-medium font-body group-hover:text-white transition-colors">On-Road Price</span>
                  <span className="text-xl font-bold font-heading">
                    {formatCurrency(purchasePrice)}
                  </span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-gray-400 font-medium font-body group-hover:text-white transition-colors">Down payment</span>
                  <span className="text-xl font-bold font-heading text-white">{formatCurrency(downPayment)}</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-gray-400 font-medium font-body group-hover:text-white transition-colors">Loan amount</span>
                  <span className="text-xl font-bold font-heading text-white">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-gray-400 font-medium font-body group-hover:text-white transition-colors">Interest amount</span>
                  <span className="text-xl font-bold font-heading text-[#f51b24]">{formatCurrency(results.totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-white/10 group">
                  <span className="text-gray-400 font-bold uppercase tracking-wider text-sm font-body group-hover:text-white transition-colors">Total Amount Payable</span>
                  <span className="text-2xl font-bold font-heading text-white">{formatCurrency(results.totalAmount)}</span>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <AnimatedBtn 
                href={`https://wa.me/917594960023?text=Hi!%20I%20want%20to%20discuss%20finance%20options%20for%20the%20${selectedBike.name}%20${selectedBike.model}.`}
                target="_blank"
                className="w-full !py-6 !text-lg !font-bold !bg-[#f51b24] !text-white  hover:!bg-white hover:!text-[#f51b24]"
              >
                Apply for Finance
              </AnimatedBtn>
              <p className="text-center text-gray-500 text-[10px] mt-6 font-body leading-relaxed opacity-60">
                *Calculations are indicative and subject to final approval from banking partners. Ex-showroom prices used for calculation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}