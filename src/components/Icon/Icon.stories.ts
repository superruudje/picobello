import type { Meta, StoryObj } from "@storybook/vue3";
import { Icon } from "./index.ts";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "person",
    title: "Person",
  },
};
