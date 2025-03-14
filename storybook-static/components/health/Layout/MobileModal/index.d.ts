interface FilterModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    children: React.ReactNode;
}
export declare function MobileModal({ open, onOpenChange, title, children, }: FilterModalProps): import("react/jsx-runtime").JSX.Element;
export {};
