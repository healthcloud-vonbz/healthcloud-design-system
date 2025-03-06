import { Meta, StoryObj } from '@storybook/react';

import { LoadingProgress } from '@/components/health/Feedback/LoadingProgress';

// Configuração do meta
const meta: Meta<typeof LoadingProgress> = {
  title: 'Components/Feedback/LoadingProgress',
  component: LoadingProgress,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof LoadingProgress>;

export const Default: Story = {
  render: () => <LoadingProgress />,
};
