import type { Meta, StoryObj } from "@storybook/vue3";
import { Flex } from "./index";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";

const meta: Meta<typeof Flex> = {
  title: "Components/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column"],
    },
    gap: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
    },
    wrap: {
      control: "boolean",
    },
    inline: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Playground: Story = {
  args: {
    direction: "row",
    gap: "md",
    align: "center",
    justify: "start",
    wrap: false,
    inline: false,
  },
  render: (args) => ({
    components: { Flex, Button },
    setup: () => ({ args }),
    template: `
      <Flex v-bind="args">
        <Button label="Save" />
        <Button label="Cancel" variant="secondary" />
        <Button label="Delete" variant="danger" />
      </Flex>
    `,
  }),
};

export const RowWithGap: Story = {
  render: () => ({
    components: { Flex, Button },
    template: `
      <Flex direction="row" gap="sm" align="center">
        <Button label="One" />
        <Button label="Two" variant="secondary" />
        <Button label="Three" variant="success" />
      </Flex>
    `,
  }),
  parameters: { controls: { disable: true } },
};

export const ColumnStack: Story = {
  render: () => ({
    components: { Flex, Button, Heading },
    template: `
      <Flex direction="column" gap="sm" align="stretch">
        <Heading :level="3" :visual="4">Form section</Heading>
        <Button label="Primary action" />
        <Button label="Secondary action" variant="secondary" />
      </Flex>
    `,
  }),
  parameters: { controls: { disable: true } },
};

export const SpaceBetweenHeader: Story = {
  render: () => ({
    components: { Flex, Button, Heading },
    template: `
      <Flex direction="row" align="center" justify="between">
        <Heading :level="1" :visual="3">Dashboard</Heading>
        <Flex gap="sm" align="center">
          <Button label="Export" variant="secondary" />
          <Button label="New" />
        </Flex>
      </Flex>
    `,
  }),
  parameters: { controls: { disable: true } },
};

export const WrapExample: Story = {
  render: () => ({
    components: { Flex, Button },
    template: `
      <div style="max-width: 320px;">
        <Flex gap="sm" wrap>
          <Button label="Alpha" variant="secondary" />
          <Button label="Beta" variant="secondary" />
          <Button label="Gamma" variant="secondary" />
          <Button label="Delta" variant="secondary" />
          <Button label="Epsilon" variant="secondary" />
          <Button label="Zeta" variant="secondary" />
        </Flex>
      </div>
    `,
  }),
  parameters: { controls: { disable: true } },
};

export const InlineFlex: Story = {
  render: () => ({
    components: { Flex, Button },
    template: `
      <div>
        <span>Text before </span>
        <Flex inline gap="xs" align="center">
          <Button label="A" size="small" variant="secondary" />
          <Button label="B" size="small" variant="secondary" />
        </Flex>
        <span> text after</span>
      </div>
    `,
  }),
  parameters: { controls: { disable: true } },
};
