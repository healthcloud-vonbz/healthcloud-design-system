interface DocumentsDialogProps {
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
export declare function DocumentsDialog({ open, onOpenChange, onSubmit, selectedValue, }: DocumentsDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
