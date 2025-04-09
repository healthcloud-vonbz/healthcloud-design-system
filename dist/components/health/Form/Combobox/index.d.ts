type ComboboxProps = {
    selectedValue: string;
    onChange: (selectedValue: {
        value: string;
        label: string;
    }) => void;
    options: {
        value: string;
        label: string;
    }[];
    placeholder?: string;
    withoutSearch?: boolean;
    disabled?: boolean;
    iconType?: 'arrow' | 'search';
};
export declare function Combobox({ selectedValue, onChange, options, placeholder, withoutSearch, disabled, iconType, }: ComboboxProps): import("react/jsx-runtime").JSX.Element;
export {};
