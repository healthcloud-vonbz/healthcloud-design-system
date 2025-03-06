import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import { DocumentsMobileModal } from '@/components/health/Layout/DocumentsModal';

const meta: Meta<typeof DocumentsMobileModal> = {
  title: 'Components/Layout/DocumentsModal/MobileModal',
  component: DocumentsMobileModal,
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

type Story = StoryObj<typeof DocumentsMobileModal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Escolher Documento</Button>
        <DocumentsMobileModal
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
        <DocumentsMobileModal
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
