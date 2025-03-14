import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import { MobileModal } from '@/components/health/Layout';

// Configuração do meta
const meta: Meta<typeof MobileModal> = {
  title: 'Components/Layout/MobileModal',
  component: MobileModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    open: { control: 'boolean' },
    onOpenChange: { action: 'onOpenChange' },
  },
};

export default meta;

type Story = StoryObj<typeof MobileModal>;

export const Default: Story = {
  args: {
    title: 'Titulo do modal',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
        <MobileModal
          {...args}
          open={isOpen}
          onOpenChange={() => setIsOpen(!isOpen)}
        >
          <p>Conteúdo do modal</p>
        </MobileModal>
      </div>
    );
  },
};
