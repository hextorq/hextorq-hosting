import React, { createContext, useContext, useState } from 'react';

const DeployModalContext = createContext();

export function DeployModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [modalType, setModalType] = useState('app'); // 'app' | 'vps'

  const openDeployModal = (plan = null, type = 'app') => {
    setSelectedPlan(plan);
    setModalType(type);
    setIsOpen(true);
  };

  const closeDeployModal = () => {
    setIsOpen(false);
  };

  return (
    <DeployModalContext.Provider
      value={{
        isOpen,
        selectedPlan,
        modalType,
        openDeployModal,
        closeDeployModal
      }}
    >
      {children}
    </DeployModalContext.Provider>
  );
}

export function useDeployModal() {
  const context = useContext(DeployModalContext);
  if (!context) {
    throw new Error('useDeployModal must be used within a DeployModalProvider');
  }
  return context;
}
