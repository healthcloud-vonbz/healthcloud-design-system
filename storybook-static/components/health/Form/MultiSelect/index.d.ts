export interface MultiSelectOption {
    value: string;
    label: string;
}
type MultiSelectProps = {
    options: MultiSelectOption[];
    selectedValues: MultiSelectOption[];
    onSelectValue: (selectedValues: MultiSelectOption[]) => void;
    placeholder?: string;
};
export declare function MultiSelect({ options, placeholder, onSelectValue, selectedValues, }: MultiSelectProps): import("react/jsx-runtime").JSX.Element | null;
export {};
