interface UseStepHelpers {
    goToNextStep: () => void;
    goToPrevStep: () => void;
    reset: () => void;
    canGoToNextStep: boolean;
    canGoToPrevStep: boolean;
    setStep: (step: number | ((step: number) => number)) => void;
}
export declare function useStep(maxStep: number): [number, UseStepHelpers];
export {};
