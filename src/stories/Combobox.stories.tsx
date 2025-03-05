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
  onChange: (value: string) => console.log(value),
};

const meta = {
  title: 'Components/Form/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
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
  },
  args: baseArgs, // Define os args padrão para todas as stories
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState('');

    return (
      <Combobox
        {...args}
        value={selectedValue}
        onChange={(value: string) => setSelectedValue(value)}
      />
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
    const [selectedValue, setSelectedValue] = useState('');

    return (
      <Combobox
        {...args}
        value={selectedValue}
        onChange={(value: string) => setSelectedValue(value)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    ...baseArgs,
    value: 'react',
    disabled: true,
    options: options.filter(
      (opt) => opt.value === 'react' || opt.value === 'svelte',
    ),
  },
};
