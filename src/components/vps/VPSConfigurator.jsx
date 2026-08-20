import React, { useState } from 'react';
import { 
  Cpu, 
  Zap, 
  HardDrive, 
  Globe, 
  Layers, 
  Terminal, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Server
} from 'lucide-react';
import { VPS_CONFIGURATOR_OPTIONS } from '../../data/vpsPlans';
import { useDeployModal } from '../../context/DeployModalContext';

export default function VPSConfigurator() {
  const { cpuOptions, ramOptions, storageOptions, osOptions, locations, addons } = VPS_CONFIGURATOR_OPTIONS;

  const [selectedCpu, setSelectedCpu] = useState(cpuOptions[1]); // 2 vCPU
  const [selectedRam, setSelectedRam] = useState(ramOptions[2]); // 4 GB
  const [selectedStorage, setSelectedStorage] = useState(storageOptions[2]); // 80 GB
  const [selectedOs, setSelectedOs] = useState(osOptions[0]); // Ubuntu
  const [selectedLocation, setSelectedLocation] = useState(locations[0]); // India
  const [selectedAddons, setSelectedAddons] = useState([]);
  const { openDeployModal } = useDeployModal();

  // Dynamic price calculation
  const baseComputePrice = selectedCpu.price + selectedRam.price + selectedStorage.price;
  const osLicenseCost = selectedOs.licenseCost || 0;
  const addonsTotal = selectedAddons.reduce((acc, curr) => acc + curr.price, 0);
  const totalMonthlyPrice = baseComputePrice + osLicenseCost + addonsTotal;

  const toggleAddon = (addon) => {
    if (selectedAddons.some(a => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleDeployConfiguredVPS = () => {
    const customPlan = {
      id: 'custom-vps',
      name: `Custom VPS (${selectedCpu.label}, ${selectedRam.label})`,
      monthlyPrice: totalMonthlyPrice,
      currency: '₹',
      specs: {
        vcpu: selectedCpu.label,
        ram: selectedRam.label,
        storage: selectedStorage.label,
        os: selectedOs.name,
        location: selectedLocation.name
      }
    };
    openDeployModal(customPlan, 'vps');
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0B101C] to-[#070A12] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.08]">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CUSTOM RESOURCE SIZING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Build Your Custom VPS
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Choose your exact virtual CPU, RAM, NVMe storage partition, OS image, and global data center.
          </p>
        </div>
        <div className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-500/30 flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Instant 55-Second Provisioning</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Config Controls (8 Cols) */}
        <div className="lg:col-span-8 space-y-7">
          
          {/* 1. CPU Core Selection */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>1. Compute Cores (vCPU)</span>
              </span>
              <span className="text-cyan-300 font-bold">{selectedCpu.label}</span>
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
              {cpuOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedCpu(opt)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedCpu.value === opt.value
                      ? 'border-cyan-400 bg-cyan-950/60 shadow-[0_0_15px_rgba(6,182,212,0.25)] text-white font-bold'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-mono">{opt.label}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">High Clock</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. RAM Selection */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>2. Memory (RAM)</span>
              </span>
              <span className="text-blue-300 font-bold">{selectedRam.label}</span>
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {ramOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedRam(opt)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedRam.value === opt.value
                      ? 'border-blue-400 bg-blue-950/60 shadow-[0_0_15px_rgba(59,130,246,0.25)] text-white font-bold'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-mono">{opt.label}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">DDR5 ECC</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. NVMe Storage Selection */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <HardDrive className="w-4 h-4 text-indigo-400" />
                <span>3. Enterprise NVMe Storage</span>
              </span>
              <span className="text-indigo-300 font-bold">{selectedStorage.label}</span>
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {storageOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedStorage(opt)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedStorage.value === opt.value
                      ? 'border-indigo-400 bg-indigo-950/60 shadow-[0_0_15px_rgba(99,102,241,0.25)] text-white font-bold'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-mono">{opt.label}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">PCIe Gen4</div>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Operating System */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>4. Operating System & Distribution</span>
              </span>
              <span className="text-slate-300 font-mono text-xs">{selectedOs.name}</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {osOptions.map((os) => (
                <button
                  key={os.id}
                  type="button"
                  onClick={() => setSelectedOs(os)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedOs.id === os.id
                      ? 'border-cyan-400 bg-cyan-950/40 text-white'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-semibold text-white">{os.name}</div>
                  <div className="text-[10px] font-mono text-cyan-400 mt-0.5">
                    {os.licenseCost > 0 ? `+₹${os.licenseCost}/mo license` : 'Free Open Source'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 5. Location */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>5. Server Data Center Location</span>
              </span>
              <span className="text-emerald-300 font-mono text-xs">{selectedLocation.name}</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedLocation(loc)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedLocation.id === loc.id
                      ? 'border-emerald-400 bg-emerald-950/40 text-white shadow-sm'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-lg">{loc.flag}</div>
                  <div className="text-xs font-semibold text-white mt-1 truncate">{loc.name.split(',')[0]}</div>
                  <div className="text-[10px] font-mono text-emerald-400 mt-0.5">{loc.latency} ping</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Summary Card (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 p-6 rounded-2xl bg-[#090E18] border border-cyan-500/40 shadow-2xl space-y-6">
            
            <div className="border-b border-white/[0.08] pb-4">
              <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                <Server className="w-4 h-4" />
                <span>Configured VPS Summary</span>
              </div>
              <h3 className="text-lg font-bold font-display text-white mt-1">
                Your Virtual Server
              </h3>
            </div>

            {/* Spec breakdown table */}
            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="text-slate-400">Compute:</span>
                <span className="text-white font-bold">{selectedCpu.label}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="text-slate-400">Memory:</span>
                <span className="text-white font-bold">{selectedRam.label}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="text-slate-400">NVMe Storage:</span>
                <span className="text-white font-bold">{selectedStorage.label}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="text-slate-400">Operating System:</span>
                <span className="text-cyan-300 font-semibold truncate max-w-[140px] text-right">
                  {selectedOs.name}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <span className="text-slate-400">Location:</span>
                <span className="text-white font-semibold">
                  {selectedLocation.flag} {selectedLocation.name.split(',')[0]}
                </span>
              </div>
              <div className="flex items-center justify-between text-emerald-400">
                <span>Root / SSH Access:</span>
                <span className="font-bold flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Enabled</span>
                </span>
              </div>
            </div>

            {/* Price calculation block */}
            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 text-center space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Estimated Monthly Price
              </span>
              <div className="flex items-baseline justify-center space-x-1">
                <span className="text-2xl font-bold text-slate-400">₹</span>
                <span className="text-4xl font-extrabold font-display text-white tracking-tight">
                  {totalMonthlyPrice.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-slate-400">/mo</span>
              </div>
              <p className="text-[10px] font-mono text-cyan-400">
                Hourly billing available • Cancel anytime
              </p>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleDeployConfiguredVPS}
              className="w-full py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <span>Deploy Configured VPS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center">
              <span className="text-[11px] font-mono text-slate-400">
                Includes 1 Dedicated IPv4 + /64 IPv6 Subnet
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
