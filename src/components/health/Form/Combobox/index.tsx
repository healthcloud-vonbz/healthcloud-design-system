'use client';

import * as React from 'react';
import { Check, ChevronDown, ChevronUp, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type ComboboxProps = {
  selectedValue: string;
  onChange: (selectedValue: { value: string; label: string }) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  withoutSearch?: boolean;
  disabled?: boolean;
  iconType?: 'arrow' | 'search';
};

export function Combobox({
  selectedValue,
  onChange,
  options,
  placeholder,
  withoutSearch,
  disabled = false,
  iconType = 'arrow',
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border h-10 text-black min-w-[40px] border-input overflow-hidden px-2"
          disabled={disabled}
        >
          {selectedValue ? (
            options.find((option) => option.value === selectedValue)?.label
          ) : (
            <p className="text-ds_health-text-muted font-normal">
              {placeholder || 'Selecione uma opção...'}
            </p>
          )}
          {iconType === 'arrow' &&
            (!open ? (
              <ChevronDown size={14} />
            ) : (
              <ChevronUp size={14} className="opacity-50 min-w-[14px]" />
            ))}
          {iconType === 'search' && (
            <Search size={14} className="opacity-50 min-w-[14px]" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command className="min-w-[400px]">
          {withoutSearch ? null : (
            <CommandInput placeholder="Buscar..." className="h-9" />
          )}
          <CommandList>
            <CommandEmpty>Nenhuma opção encontrada.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    if (currentValue === option.value) {
                      onChange(option);
                    }

                    setOpen(false);
                  }}
                >
                  {option.label}

                  {selectedValue === option.value && (
                    <Check className="ml-auto" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
