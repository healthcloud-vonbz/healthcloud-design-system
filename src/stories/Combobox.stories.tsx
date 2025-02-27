import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from "@/components/health/Form/Combobox";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

const baseArgs = {
  options,
  onChange: (value: string) => console.log(value),
};

const meta = {
  title: "Components/Form/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "select",
      options,
    },
    onChange: {
      action: "onChange",
    },
    disabled: {
      control: "boolean",
    },
    withoutSearch: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
  args: baseArgs, // Define os args padrão para todas as stories
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  args: {
    ...baseArgs,
    value: "",
    placeholder: "Select",
  },
  render: (args) => <Combobox {...args} />,
};

export const WithoutSearch: Story = {
  args: {
    ...baseArgs,
    value: "react",
    withoutSearch: true,
  },
};

export const Disabled: Story = {
  args: {
    ...baseArgs,
    value: "react",
    disabled: true,
    options: options.filter(
      (opt) => opt.value === "react" || opt.value === "svelte"
    ),
  },
};
