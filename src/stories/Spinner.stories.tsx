import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@/components/health/Feedback/Spinner";

// Configuração do meta
const meta: Meta<typeof Spinner> = {
  title: "Components/Feedback/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: () => <Spinner />,
};
