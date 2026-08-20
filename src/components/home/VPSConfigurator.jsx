import React, { useState, useMemo } from 'react';
import { Sliders, Cpu, HardDrive, Server, Globe, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useTrialModal } from '../../context/TrialModalContext';
import { CONFIGURATOR_OPTIONS } from '../../data/hostingData';

export default function VPSConfigurator() {
  const { openTrialModal } = useTrialModal();

  const [selectedCpu, setSelectedCpu] = useState(CONFIGURATOR_OPTIONS.cpu[1]); // 2 vCPU
  const [selectedRam, setSelectedRam] = useState(CONFIGURATOR_OPTIONS.ram[2]); // 4 GB RAM
  const [selectedStorage, setSelectedStorage] = useState(CONFIGURATOR_OPTIONS.storage[2]); // 80 GB NVMe
  const [selectedOS, setSelectedOS] = useState(CONFIGURATOR_OPTIONS.os[0]); // Ubuntu 24.04
  const [selectedLocation, setSelectedLocation] = useState(CONFIGURATOR_OPTIONS.locations[0]); // India (Mumbai)
  const [isYearly, setIsYearly] = useState(false);

  const monthlyEstimatedPrice = useMemo(() => {
    const base = 299;
    const cpuCost = selectedCpu.priceMultiplier;
    const ramCost = selectedRam.priceMultiplier;
    const storageCost = selectedStorage.priceMultiplier;
    const osCost = selectedOS.priceAddon;
    return base + cpuCost + ramCost + storageCost + osCost;
  }, [selectedCpu, selectedRam, selectedStorage, selectedOS]);

  const displayPrice = isYearly
    ? Math.round(monthlyEstimatedPrice * 0.85)
    : monthlyEstimatedPrice;

  const handleStartTrial = () => {
    const customPlan = {
      id: 'custom-vps',
      name: `Custom VPS (${selectedCpu.label}, ${selectedRam.label})`,
      category: 'custom-vps',
      price: displayPrice,
      monthlyPrice: displayPrice,
      currency: '₹',
      specs: {
        vcpu: selectedCpu.label,
        ram: selectedRam.label,
        storage: selectedStorage.label,
        os: selectedOS.name,
        location: `${selectedLocation.name} (${selectedLocation.city})`
      }
    };
    openTrialModal(customPlan, 'custom-vps');
  };

  return (
    <section id="configurator" className="py-24 bg-slate-50 text-[rgb(26,11,84)] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-700 shadow-sm">
            <Sliders className="w-3.5 h-3.5 text-blue-600" />
            <span>INTERACTIVE HARDWARE BUILDER</span>
          </div>

          <h2 className="font-medium text-[rgb(26,11,84)] tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.15 }}>
            Custom VPS <span className="nexa-grad-text">Configurator.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Tailor your exact compute, memory, and NVMe disk parameters. Test your custom server configuration with a full 14-day free trial.
          </p>
        </div>

        {/* Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
            
            {/* 1. vCPU Cores */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-900 font-semibold flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span>1. Dedicated Virtual CPU (vCPU)</span>
                </span>
                <span className="text-slate-900 font-bold px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px]">
                  {selectedCpu.label}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {CONFIGURATOR_OPTIONS.cpu.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedCpu(opt)}
                    className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                      selectedCpu.value === opt.value
                        ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. RAM Memory */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-900 font-semibold flex items-center space-x-2">
                  <Server className="w-4 h-4 text-purple-600" />
                  <span>2. Dedicated RAM Memory</span>
                </span>
                <span className="text-slate-900 font-bold px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px]">
                  {selectedRam.label}
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {CONFIGURATOR_OPTIONS.ram.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedRam(opt)}
                    className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                      selectedRam.value === opt.value
                        ? 'border-purple-600 bg-purple-50 text-purple-900 font-bold shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. NVMe Storage */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-900 font-semibold flex items-center space-x-2">
                  <HardDrive className="w-4 h-4 text-indigo-600" />
                  <span>3. High-Speed NVMe Storage</span>
                </span>
                <span className="text-slate-900 font-bold px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px]">
                  {selectedStorage.label}
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {CONFIGURATOR_OPTIONS.storage.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedStorage(opt)}
                    className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                      selectedStorage.value === opt.value
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-bold shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Operating System */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-900 font-semibold flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>4. Operating System</span>
                </span>
                <span className="text-slate-600 font-mono text-xs">
                  {selectedOS.name}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {CONFIGURATOR_OPTIONS.os.map((os) => (
                  <button
                    key={os.id}
                    type="button"
                    onClick={() => setSelectedOS(os)}
                    className={`p-3 rounded-xl border text-left font-mono text-xs transition-all flex items-center justify-between ${
                      selectedOS.id === os.id
                        ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    <span>{os.name}</span>
                    {os.priceAddon > 0 && (
                      <span className="text-[10px] text-amber-600 font-semibold">+₹{os.priceAddon}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Data Center Location */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-900 font-semibold flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-cyan-600" />
                  <span>5. Deployment Region</span>
                </span>
                <span className="text-slate-700 font-mono text-xs">
                  {selectedLocation.flag} {selectedLocation.name} ({selectedLocation.city})
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {CONFIGURATOR_OPTIONS.locations.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelectedLocation(loc)}
                    className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                      selectedLocation.id === loc.id
                        ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    <div className="text-lg mb-1">{loc.flag}</div>
                    <div className="text-xs font-semibold">{loc.name}</div>
                    <div className="text-[10px] text-slate-500">{loc.city}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Pricing & Summary Recap Sticky Column (4 Cols) */}
          <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border-2 border-blue-600 shadow-2xl space-y-6 lg:sticky lg:top-24">
            
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-slate-500 tracking-[0.14em] font-semibold">
                CONFIGURED HARDWARE ESTIMATE
              </span>
              <h3 className="text-xl font-bold font-display text-[rgb(26,11,84)]">
                Custom VPS Instance
              </h3>
            </div>

            {/* 14-Day Free Trial Prominent Badge */}
            <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs font-mono text-blue-900 flex items-center justify-between">
              <span className="flex items-center space-x-1.5 font-bold">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>14-Day Free Trial</span>
              </span>
              <span className="text-emerald-600 font-bold">₹0 Due Today</span>
            </div>

            {/* Price calculation display */}
            <div className="py-4 border-y border-slate-100 space-y-1">
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-bold text-slate-400">₹</span>
                <span className="text-4xl sm:text-5xl font-bold font-display text-[rgb(26,11,84)]">
                  {displayPrice}
                </span>
                <span className="text-xs font-mono text-slate-500">/month</span>
              </div>
              <p className="text-[11px] font-mono text-slate-500">
                Evaluation period: 14 days free. Continues at ₹{displayPrice}/mo afterwards.
              </p>
            </div>

            {/* Configuration Spec Recap List */}
            <div className="space-y-2.5 text-xs font-mono text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Processor:</span>
                <strong className="text-slate-900">{selectedCpu.label}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Memory:</span>
                <strong className="text-slate-900">{selectedRam.label}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">NVMe Storage:</span>
                <strong className="text-slate-900">{selectedStorage.label}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">OS:</span>
                <strong className="text-slate-900 truncate max-w-[150px]">{selectedOS.name}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Region:</span>
                <strong className="text-slate-900">{selectedLocation.flag} {selectedLocation.city}</strong>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Root Access:</span>
                <strong className="text-emerald-600 font-bold">Full SSH Keys</strong>
              </div>
            </div>

            {/* Billing Toggle inside Summary */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
              <span className="text-slate-800">Annual Billing (-15%)</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`w-10 h-5 rounded-full relative p-0.5 transition-colors ${
                  isYearly ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`size-4 rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-5' : 'translate-x-0'
                  }`}
                ></div>
              </button>
            </div>

            {/* CTA Button */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleStartTrial}
                className="nexa-grad-a-bg group relative inline-flex items-center justify-center rounded-xl p-px w-full shadow-lg active:scale-95 transition-all"
              >
                <span className="w-full rounded-[11px] bg-[rgb(28,78,255)] py-3 text-center text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-transparent flex items-center justify-center space-x-2">
                  <span>Start 14-Day Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
              <div className="text-center text-[10px] font-mono text-slate-500">
                Instant trial setup • Zero credit card required
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
