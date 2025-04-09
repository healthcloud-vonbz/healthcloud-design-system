'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
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

export function MultiSelect({
  options,
  placeholder,
  onSelectValue,
  selectedValues = [],
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSelect = (selectedValue: string) => {
    if (selectedValues.some((values) => values.value === selectedValue)) {
      onSelectValue(
        selectedValues.filter((values) => values.value !== selectedValue),
      );
    } else {
      onSelectValue([
        ...selectedValues,
        { value: selectedValue, label: selectedValue },
      ]);
    }
  };

  const selectedNames = useMemo(() => {
    return selectedValues.map((values) => values.label);
  }, [selectedValues]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="input"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between h-auto min-h-[2.5rem] px-3 py-2"
          >
            {selectedValues.length === 0 ? (
              <span className="text-muted-foreground font-normal">
                {placeholder}
              </span>
            ) : (
              <div className="flex flex-wrap gap-1">
                {selectedNames.map((name) => (
                  <div
                    key={name}
                    className="border bg-black font-medium rounded-full text-white py-[2px] px-2"
                  >
                    {name}
                  </div>
                ))}
              </div>
            )}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-[var(--radix-popover-trigger-width)] p-0"
        >
          <Command>
            <CommandInput placeholder={'Pesquisar'} />
            <CommandEmpty>Nenhum item encontrado.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onSelect={() => toggleSelect(option.value)}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                        selectedValues.some((p) => p.value === option.value)
                          ? 'bg-ds_health-primary border-ds_health-primary text-primary-foreground'
                          : 'opacity-50',
                      )}
                    >
                      {selectedValues.some((p) => p.value === option.value) && (
                        <Check className="h-3 w-3" />
                      )}
                    </div>
                    <p className="font-medium">{option.label}</p>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
