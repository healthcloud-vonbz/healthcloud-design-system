import { ComponentProps } from 'react';
import clsx from 'clsx';

import { Label } from '@/components/ui/label';
import {
  RadioGroupItem,
  RadioGroup as RadioGroupRoot,
} from '@/components/ui/radio-group';

type RadioGroupProps = {
  onChange: (value: string) => void;
  value: string;
  options: { value: string; label: string }[];
} & ComponentProps<'div'>;

export function RadioGroup({
  onChange,
  value,
  options,
  className,
}: RadioGroupProps) {
  return (
    <RadioGroupRoot
      onValueChange={onChange}
      value={value}
      className={clsx('flex flex-col gap-4', className)}
    >
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label className="cursor-pointer" htmlFor={option.value}>
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroupRoot>
  );
}
