'use client';

import { useCallback, useMemo, useState } from 'react';

interface UseStepHelpers {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  reset: () => void;
  canGoToNextStep: boolean;
  canGoToPrevStep: boolean;
  setStep: (step: number | ((step: number) => number)) => void;
}

export function useStep(maxStep: number): [number, UseStepHelpers] {
  const [currentStep, setCurrentStep] = useState(0);

  const canGoToNextStep = useMemo(
    () => currentStep < maxStep,
    [currentStep, maxStep],
  );
  const canGoToPrevStep = useMemo(() => currentStep > 0, [currentStep]);

  const setStep = useCallback(
    (step: number | ((step: number) => number)) => {
      setCurrentStep((prevStep) => {
        const nextStep = typeof step === 'function' ? step(prevStep) : step;
        if (nextStep < 0 || nextStep > maxStep) {
          throw new Error('Step out of range');
        }
        return nextStep;
      });
    },
    [maxStep],
  );

  const goToNextStep = useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [canGoToNextStep]);

  const goToPrevStep = useCallback(() => {
    if (canGoToPrevStep) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [canGoToPrevStep]);

  const reset = useCallback(() => {
    setCurrentStep(0);
  }, []);

  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset,
    },
  ];
}
