import type { Meta, StoryObj } from "@storybook/vue3";
import { Heading } from "./index";

const meta: Meta<typeof Heading> = {
    title: "Components/Heading",
    component: Heading,
    tags: ["autodocs"],
    argTypes: {
        level: {
            control: { type: "select" },
            options: [1, 2, 3, 4, 5, 6],
        },
        visual: {
            control: { type: "select" },
            options: [undefined, 1, 2, 3, 4, 5, 6],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
    args: {
        level: 2,
        visual: undefined,
    },
    render: (args) => ({
        components: { Heading },
        setup: () => ({ args }),
        template: `<Heading v-bind="args">Heading</Heading>`,
    }),
};

export const AllLevels: Story = {
    render: () => ({
        components: { Heading },
        template: `
      <div style="display: grid; gap: 12px;">
        <Heading :level="1">Heading level 1</Heading>
        <Heading :level="2">Heading level 2</Heading>
        <Heading :level="3">Heading level 3</Heading>
        <Heading :level="4">Heading level 4</Heading>
        <Heading :level="5">Heading level 5</Heading>
        <Heading :level="6">Heading level 6</Heading>
      </div>
    `,
    }),
    parameters: { controls: { disable: true } },
};

export const SemanticVsVisual: Story = {
    render: () => ({
        components: { Heading },
        template: `
      <div style="display: grid; gap: 12px;">
        <div>
          <Heading :level="1" :visual="3">I am an H1, styled like H3</Heading>
          <div style="font-size: 12px; opacity: .7; margin-top: 4px;">
            level=1 (SEO/semantics), visual=3 (styling)
          </div>
        </div>

        <div>
          <Heading :level="2" :visual="5">I am an H2, styled like H5</Heading>
          <div style="font-size: 12px; opacity: .7; margin-top: 4px;">
            level=2 (semantics), visual=5 (styling)
          </div>
        </div>

        <div>
          <Heading :level="3">I am an H3, styled like H3 (default)</Heading>
          <div style="font-size: 12px; opacity: .7; margin-top: 4px;">
            visual defaults to level
          </div>
        </div>
      </div>
    `,
    }),
    parameters: { controls: { disable: true } },
};