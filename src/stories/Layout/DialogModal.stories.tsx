import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import { DialogModal } from '@/components/health/Layout';

// Configuração do meta
const meta: Meta<typeof DialogModal> = {
  title: 'Components/Layout/DialogModal',
  component: DialogModal,
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

type Story = StoryObj<typeof DialogModal>;

export const Default: Story = {
  args: {
    title: 'Titulo do modal',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
        <DialogModal
          {...args}
          open={isOpen}
          onOpenChange={() => setIsOpen(!isOpen)}
        >
          <p>Conteúdo do modal</p>
          <p>Conteúdo do modal</p>
          <p>Conteúdo do modal</p>
          <p>Conteúdo do modal</p>
          <p>Conteúdo do modal</p>
        </DialogModal>
      </div>
    );
  },
};
