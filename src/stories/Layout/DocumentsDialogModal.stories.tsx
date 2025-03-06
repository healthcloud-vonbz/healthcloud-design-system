import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import { DocumentsDialog } from '@/components/health/Layout/DocumentsModal';

const meta: Meta<typeof DocumentsDialog> = {
  title: 'Components/Layout/DocumentsModal/DocumentsDialog',
  component: DocumentsDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    onOpenChange: { action: 'onOpenChange' },
  },
};

export default meta;

type Story = StoryObj<typeof DocumentsDialog>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Escolher Documento</Button>
        <DocumentsDialog
          open={isOpen}
          onOpenChange={setIsOpen}
          onSubmit={(documentsData) => console.log(documentsData)}
        />
      </div>
    );
  },
};

export const WithSelectedValue: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Escolher Documento</Button>
        <DocumentsDialog
          open={isOpen}
          onOpenChange={setIsOpen}
          onSubmit={(documentsData) => console.log(documentsData)}
          selectedValue={{
            documentType: 'RG',
            documentValue: '439853860',
          }}
        />
      </div>
    );
  },
};
