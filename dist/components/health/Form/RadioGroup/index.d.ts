import { ComponentProps } from 'react';

type RadioGroupProps = {
    onChange: (value: string) => void;
    value: string;
    options: {
        value: string;
        label: string;
    }[];
} & ComponentProps<'div'>;
export declare function RadioGroup({ onChange, value, options, className, }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
export {};
