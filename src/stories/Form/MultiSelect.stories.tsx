import { useState } from 'react';
import { MultiSelect, MultiSelectOption } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

const meta = {
  title: 'Components/Form/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedValues: {
      control: 'select',
      options,
    },
    onSelectValue: {
      action: 'onChange',
    },
    options: options,
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<MultiSelectOption[]>([]);

    return (
      <div className="w-96">
        <MultiSelect
          {...args}
          selectedValues={value}
          onSelectValue={(selectedValue) => setValue(selectedValue)}
          placeholder="Selecione"
        />

        <p className="text-sm text-center">{JSON.stringify(value)}</p>
      </div>
    );
  },
  args: {
    options,
  },
};
