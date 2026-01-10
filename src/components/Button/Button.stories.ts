import type {Meta, StoryObj} from "@storybook/vue3";
import {Button} from "./index";

const VARIANTS = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger"
] as const;

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: {type: "select"},
            options: VARIANTS,
        },
        size: {
            control: {type: "select"},
            options: ["default", "small"],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default = {
    args: {
        label: "Button",
        variant: "primary",
        size: "default",
    },
};

export const Variants: Story = {
    render: (args) => ({
        components: {Button},
        controls: {disable: true},
        setup() {
            return {args, VARIANTS};
        },
        template: `
            <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                <Button
                    v-for="variant in VARIANTS"
                    :key="variant"
                    v-bind="args"
                    :variant="variant"
                    :label="variant"
                />
            </div>
        `,
    }),
    args: {
        size: "default",
    },
};

export const Sizes: Story = {
    render: () => ({
        components: {Button},
        template: `
            <div style="display: flex; gap: 12px; align-items: center;">
                <Button label="Default" size="default"/>
                <Button label="Small" size="small"/>
            </div>
        `,
    }),
};

export const SizesWithVariants: Story = {
    render: () => ({
        components: {Button},
        setup() {
            return {VARIANTS};
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div
                    v-for="size in ['default', 'small']"
                    :key="size"
                    style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;"
                >
                    <Button
                        v-for="variant in VARIANTS"
                        :key="variant + size"
                        :variant="variant"
                        :size="size"
                        :label="\`\${variant} / \${size}\`"
                    />
                </div>
            </div>
        `,
    }),
};

export const WithIcon: Story = {
    args: {
        label: "Toevoegen",
        variant: "primary",
        size: "default",
    },
    render: (args) => ({
        components: {Button},
        setup: () => ({args}),
        template: `
            <Button v-bind="args">
                <template #icon-left>
                    <i class="bi bi-plus-lg"></i>
                </template>
            </Button>
        `,
    }),
};