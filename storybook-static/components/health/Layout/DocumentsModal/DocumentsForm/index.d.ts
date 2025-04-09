type DocumentsFormProps = {
    onSubmit: (data: {
        documentType: string;
        documentValue: string;
    }) => void;
    selectedValue?: {
        documentType: string;
        documentValue: string;
    };
};
export declare function DocumentsForm({ onSubmit, selectedValue }: DocumentsFormProps): import("react/jsx-runtime").JSX.Element;
export {};
