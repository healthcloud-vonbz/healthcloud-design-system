import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InputDate } from '@/components/health/Form/InputDate';

const meta = {
  title: 'Components/Form/InputDate',
  component: InputDate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    date: {
      control: 'date',
    },
    setDate: {
      action: 'onChange',
    },
    locale: {
      control: 'select',
      options: ['pt-BR', 'en-US'],
    },
  },
} satisfies Meta<typeof InputDate>;

export default meta;
type Story = StoryObj<typeof InputDate>;

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className="w-[300px]">
        <InputDate {...args} date={date} setDate={(date) => setDate(date)} />
      </div>
    );
  },
};
