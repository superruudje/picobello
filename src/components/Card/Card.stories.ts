import type {Meta, StoryObj} from "@storybook/vue3";
import {Card} from "./index.ts";
import {Button} from "@/components/Button";

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: 'MyCard'
    },
    render: (args) => ({
        components: { Card },
        setup() {
            return { args };
        },
        template: `
            <Card v-bind="args">
                <template #card-body>
                    <p>Lorem ipsum...</p>
                </template>
            </Card>
        `,
    }),
};

export const CardWithFooter: Story = {
    args: {
        title: "Card with footer",
    },
    render: (args) => ({
        components: { Card, Button },
        setup() {
            return { args };
        },
        template: `
            <Card v-bind="args">
                <template #card-body>
                    <p>Lorem ipsum...</p>
                </template>
                <template #footer-content>
                    <Button label="Opslaan" />
                    <Button label="Annuleren" variant="secondary" />
                </template>
            </Card>
        `,
    }),
};

export const CardWithoutHeader: Story = {
    args: {},
    render: (args) => ({
        components: { Card, Button },
        setup() {
            return { args };
        },
        template: `
            <Card v-bind="args">
                <template #card-body>
                    <p>Lorem ipsum...</p>
                </template>
            </Card>
        `,
    }),
};

export const CardWithActionButtons: Story = {
    args: {
        title: "Card with action buttons",
    },
    render: (args) => ({
        components: { Card, Button },
        setup() {
            return { args };
        },
        template: `
            <Card v-bind="args">
                <template #header-buttons>
                    <Button size="small" variant="success" label="Voeg toe">
                        <template #icon-left>
                            <i class="bi bi-plus-circle-fill"></i>
                        </template>
                    </Button>
                    <Button size="small" variant="secondary">
                        <template #icon-left>
                            <i class="bi bi-arrow-repeat"></i>
                        </template>
                    </Button>
                </template>
                <template #card-body>
                    <p>Lorem ipsum...</p>
                </template>
            </Card>
        `,
    }),
};

export const CardWithIconAndFooter: Story = {
    args: {
        title: "Card with icon and footer",
    },
    render: (args) => ({
        components: { Card, Button },
        setup() {
            return { args };
        },
        template: `
            <Card v-bind="args">
                <template #header-icon>
                    <i class="bi bi-person"></i>
                </template>
                <template #card-body>
                    <p>Lorem ipsum...</p>
                </template>
                <template #footer-content>
                    <Button label="Opslaan" />
                    <Button label="Annuleren" variant="secondary" />
                </template>
            </Card>
        `,
    }),
};

export const CardWithCollapse: Story = {
    args: {
        title: "Card with collapse",
        collapsible: true,
        defaultCollapsed: true
    },
    render: (args) => ({
        components: { Card, Button },
        setup() {
            return { args };
        },
        template: `
            <Card v-bind="args">
                <template #card-body>
                    <p>Lorem ipsum...</p>
                </template>
                <template #footer-content>
                    <Button label="Opslaan" />
                    <Button label="Annuleren" variant="secondary" />
                </template>
            </Card>
        `,
    }),
};