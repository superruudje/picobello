import type { Meta, StoryObj } from "@storybook/vue3";
import { Loader } from "./index";

const meta: Meta<typeof Loader> = {
    title: "Components/Loader",
    component: Loader,
    tags: ["autodocs"],
    argTypes: {
        size: { control: "select", options: ["small", "medium", "large"] },
        label: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
    args: {
        size: "medium",
        label: "Loading",
    },
};