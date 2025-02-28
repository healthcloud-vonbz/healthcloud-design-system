type ComboboxProps = {
    value: string;
    onChange: (value: string) => void;
    options: {
        value: string;
        label: string;
    }[];
    placeholder?: string;
    withoutSearch?: boolean;
    disabled?: boolean;
};
export declare function Combobox({ value, onChange, options, placeholder, withoutSearch, disabled, }: ComboboxProps): import("react/jsx-runtime").JSX.Element;
export {};
