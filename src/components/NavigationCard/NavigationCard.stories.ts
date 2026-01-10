import type {Meta, StoryObj} from "@storybook/vue3";
import {NavigationCard} from "./index";

import imageSettings from "@/assets/img/svg/settings.svg";


const meta: Meta<typeof NavigationCard> = {
    title: "Components/NavigationCard",
    component: NavigationCard,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavigationCard>;

export const Default: Story = {
    args: {
        title: "Instellingen",
        subtext: "Lorem ipsum dolor...",
    },
    render: (args) => ({
        components: {NavigationCard},
        setup: () => ({args, imageSettings}),
        template: `
            <div style="max-width: 300px">
                <NavigationCard v-bind="args">
                    <template #image>
                        <img :src="imageSettings" alt=""/>
                    </template>
                </NavigationCard>
            </div>
        `,
    }),
};