import { RadioGroup } from '@/components';
import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@/components/ui/label';
import { brazilianDocuments } from '@/components/health/Layout/DocumentsModal/DocumentsForm/constant';

const meta = {
  title: 'Components/Form/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'select',
      options: ['CPF', 'RG', 'CNH', 'Passaporte'],
    },
    onChange: {
      action: 'onChange',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <p className="mb-4 font-bold">Escolha seu documento</p>
      <RadioGroup
        {...args}
        options={brazilianDocuments.map((doc) => ({
          value: doc.document_name,
          label: doc.document_name,
        }))}
      />
    </div>
  ),
};

// export const Disabled: Story = {
//   args: {
//     placeholder: 'Disabled RadioGroup',
//     disabled: true,
//   },
// };
