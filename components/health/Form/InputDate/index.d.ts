import { Locales } from '../../../../utils/locales';

type InputDateProps = {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
    locale?: Locales;
};
export declare function InputDate({ date, setDate, locale }: InputDateProps): import("react/jsx-runtime").JSX.Element;
export {};
