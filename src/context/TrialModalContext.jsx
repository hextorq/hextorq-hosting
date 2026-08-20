import React, { createContext, useContext, useState } from 'react';

const TrialModalContext = createContext();

export function TrialModalProvider({ children }) {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [planCategory, setPlanCategory] = useState('fixed'); // 'fixed', 'flex', 'vps', 'managed', 'custom-vps'

  // Legal modal state
  const [legalModal, setLegalModal] = useState({
    isOpen: false,
    type: 'terms' // 'terms', 'privacy', 'refund', 'resource'
  });

  const openTrialModal = (plan = null, category = 'fixed') => {
    setSelectedPlan(plan);
    setPlanCategory(category);
    setIsTrialOpen(true);
  };

  const closeTrialModal = () => {
    setIsTrialOpen(false);
  };

  const openLegalModal = (type = 'terms') => {
    setLegalModal({
      isOpen: true,
      type
    });
  };

  const closeLegalModal = () => {
    setLegalModal({
      isOpen: false,
      type: 'terms'
    });
  };

  return (
    <TrialModalContext.Provider
      value={{
        isTrialOpen,
        selectedPlan,
        planCategory,
        openTrialModal,
        closeTrialModal,
        legalModal,
        openLegalModal,
        closeLegalModal
      }}
    >
      {children}
    </TrialModalContext.Provider>
  );
}

export function useTrialModal() {
  const context = useContext(TrialModalContext);
  if (!context) {
    throw new Error('useTrialModal must be used within a TrialModalProvider');
  }
  return context;
}
