interface FilterModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: (data: {
        documentType: string;
        documentValue: string;
    }) => void;
    selectedValue?: {
        documentType: string;
        documentValue: string;
    };
}
export declare function DocumentsMobileModal({ open, onOpenChange, onSubmit, selectedValue, }: FilterModalProps): import("react/jsx-runtime").JSX.Element;
export {};
