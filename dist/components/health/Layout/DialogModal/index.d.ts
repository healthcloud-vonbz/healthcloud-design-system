interface DialogModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    children: React.ReactNode;
}
export declare function DialogModal({ open, onOpenChange, title, children, }: DialogModalProps): import("react/jsx-runtime").JSX.Element;
export {};
