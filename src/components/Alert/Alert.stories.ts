import type { Meta, StoryObj } from "@storybook/vue3";
import { Alert } from "./index";

const TYPES = [
    "success",
    "info",
    "warning",
    "danger"
] as const;

const meta: Meta<typeof Alert> = {
    component: Alert,
    title: "Components/Alert",
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: { type: "select" },
            options: TYPES
        }
    }
}

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    args: {
        type: 'info'
    },
    render: (args) => ({
        components: {Alert},
        setup() {
            return {args}
        },
        template: `
            <Alert v-bind="args">
                <template #alert-content>
                    <p>Dit is een alert.</p>
                </template>
            </Alert>
        `
    })
};

export const Types: Story = {
    render: (args) => ({
        components: { Alert },
        controls: { disable: true },
        setup() {
            return { args, TYPES };
        },
        template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <Alert
          v-for="type in TYPES"
          :key="type"
          v-bind="args"
          :type="type"
        >
            <template #alert-content>
                <p>Dit is een alert van type '{{ type }}'.</p>
            </template>
        </Alert>
      </div>
    `,
    }),
    args: { },
};