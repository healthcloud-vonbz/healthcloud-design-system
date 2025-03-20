'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Locales, locales } from '@/utils/locales';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type InputDateProps = {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  locale?: Locales;
};

const today = new Date();

export function InputDate({ date, setDate, locale = 'pt-BR' }: InputDateProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="input"
          className={cn(
            'w-full text-left font-normal flex justify-between items-center',
            !date && 'text-muted-foreground',
          )}
          onClick={() => setOpen((prev) => !prev)}
        >
          {date ? format(date, 'dd/MM/yyyy') : <span>Selecionar data</span>}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          locale={locales[locale]}
          initialFocus
          modifiers={{ today }}
          modifiersClassNames={{
            today: 'border border-blue-300 rounded-full',
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
