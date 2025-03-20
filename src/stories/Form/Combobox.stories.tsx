import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Combobox } from '@/components/health/Form/Combobox';

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

const baseArgs = {
  options,
  onChange: (value: { value: string; label: string }) => console.log(value),
};

const meta = {
  title: 'Components/Form/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedValue: {
      control: 'select',
      options,
    },
    onChange: {
      action: 'onChange',
    },
    disabled: {
      control: 'boolean',
    },
    withoutSearch: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    iconType: {
      control: 'select',
      options: ['arrow', 'search'],
    },
  },
  args: baseArgs,
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div className="w-96">
        <Combobox
          {...args}
          selectedValue={value}
          onChange={(selectedValue) => setValue(selectedValue.value)}
        />
      </div>
    );
  },
  args: {
    options,
  },
};

export const WithoutSearch: Story = {
  args: {
    ...baseArgs,
    withoutSearch: true,
  },
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <div className="w-96">
        <Combobox
          {...args}
          selectedValue={value}
          onChange={(selectedValue) => setValue(selectedValue.value)}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    ...baseArgs,
    selectedValue: 'react',
    disabled: true,
    options: options.filter(
      (opt) => opt.value === 'react' || opt.value === 'svelte',
    ),
  },
};
