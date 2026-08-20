import React, { useState } from 'react';
import { 
  Cpu, 
  Zap, 
  HardDrive, 
  Globe, 
  Terminal, 
  Check, 
  ArrowRight, 
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
    <div className="p-6 sm:p-10 rounded-3xl bg-[#090E18] border border-white/[0.08] shadow-2xl relative overflow-hidden space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CUSTOM RESOURCE SIZING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Custom VPS Configurator
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 font-sans">
            Configure your virtual CPU, RAM, NVMe storage, operating system, and data center region.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Config Controls (8 Cols) */}
        <div className="lg:col-span-8 space-y-7">
          
          {/* 1. CPU Core Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 flex items-center space-x-2 font-semibold">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>1. Compute (vCPU)</span>
              </span>
              <span className="text-cyan-300 font-bold">{selectedCpu.label}</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
              {cpuOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedCpu(opt)}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedCpu.value === opt.value
                      ? 'border-cyan-500 bg-cyan-950/50 text-white font-bold shadow-md shadow-cyan-500/20'
                      : 'border-white/[0.06] bg-slate-950/70 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-mono">{opt.label}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">₹{opt.price}/mo</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. RAM Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 flex items-center space-x-2 font-semibold">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>2. Memory (RAM)</span>
              </span>
              <span className="text-blue-300 font-bold">{selectedRam.label}</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {ramOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedRam(opt)}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedRam.value === opt.value
                      ? 'border-blue-500 bg-blue-950/50 text-white font-bold shadow-md shadow-blue-500/20'
                      : 'border-white/[0.06] bg-slate-950/70 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-mono">{opt.label}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">₹{opt.price}/mo</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. NVMe Storage Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 flex items-center space-x-2 font-semibold">
                <HardDrive className="w-4 h-4 text-indigo-400" />
                <span>3. NVMe Solid-State Storage</span>
              </span>
              <span className="text-indigo-300 font-bold">{selectedStorage.label}</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {storageOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedStorage(opt)}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedStorage.value === opt.value
                      ? 'border-indigo-500 bg-indigo-950/50 text-white font-bold shadow-md shadow-indigo-500/20'
                      : 'border-white/[0.06] bg-slate-950/70 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-mono">{opt.label}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">₹{opt.price}/mo</div>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Operating System Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 flex items-center space-x-2 font-semibold">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>4. Operating System</span>
              </span>
              <span className="text-slate-300 font-mono text-xs">{selectedOs.name}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {osOptions.map((os) => (
                <button
                  key={os.id}
                  type="button"
                  onClick={() => setSelectedOs(os)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    selectedOs.id === os.id
                      ? 'border-cyan-500 bg-cyan-950/40 text-white'
                      : 'border-white/[0.06] bg-slate-950/70 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-semibold text-white">{os.name}</div>
                  <div className="text-[10px] font-mono text-cyan-400 mt-0.5">
                    {os.licenseCost > 0 ? `+₹${os.licenseCost}/mo license` : 'Free OS'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 5. Location Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300 flex items-center space-x-2 font-semibold">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>5. Server Region</span>
              </span>
              <span className="text-emerald-300 font-mono text-xs">{selectedLocation.name}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedLocation(loc)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    selectedLocation.id === loc.id
                      ? 'border-emerald-500 bg-emerald-950/40 text-white'
                      : 'border-white/[0.06] bg-slate-950/70 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-lg">{loc.flag}</div>
                  <div className="text-xs font-semibold text-white mt-1 truncate">{loc.name.split(',')[0]}</div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">{loc.region}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Summary Card (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 p-6 rounded-3xl bg-[#060A12] border border-white/[0.08] shadow-2xl space-y-6">
            
            <div className="border-b border-white/[0.06] pb-4">
              <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                <Server className="w-4 h-4" />
                <span>Your VPS</span>
              </div>
              <h3 className="text-lg font-bold font-display text-white mt-1">
                Configuration Summary
              </h3>
            </div>

            {/* Spec breakdown table */}
            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                <span className="text-slate-400">CPU:</span>
                <span className="text-white font-bold">{selectedCpu.label}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                <span className="text-slate-400">RAM:</span>
                <span className="text-white font-bold">{selectedRam.label}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                <span className="text-slate-400">Storage:</span>
                <span className="text-white font-bold">{selectedStorage.label}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                <span className="text-slate-400">OS:</span>
                <span className="text-cyan-300 font-semibold truncate max-w-[130px] text-right">
                  {selectedOs.name}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.04]">
                <span className="text-slate-400">Location:</span>
                <span className="text-white font-semibold">
                  {selectedLocation.flag} {selectedLocation.name.split(',')[0]}
                </span>
              </div>
              <div className="flex items-center justify-between text-emerald-400">
                <span>Root Access:</span>
                <span className="font-bold flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Full SSH Key</span>
                </span>
              </div>
            </div>

            {/* Price calculation block */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/[0.06] text-center space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Estimated Price
              </span>
              <div className="flex items-baseline justify-center space-x-1">
                <span className="text-xl font-bold text-slate-400">₹</span>
                <span className="text-4xl font-extrabold font-display text-white tracking-tight">
                  {totalMonthlyPrice.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-slate-400">/mo</span>
              </div>
              <p className="text-[10px] font-mono text-cyan-400">
                Includes 1 Dedicated IPv4 + /64 IPv6 Subnet
              </p>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleDeployConfiguredVPS}
              className="w-full py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <span>Deploy VPS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
