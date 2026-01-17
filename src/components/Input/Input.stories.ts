import type { Meta, StoryObj } from "@storybook/vue3";
import { Input } from "./index.ts";
import { Button } from "@/components/Button";
import { Flex } from "@/components/Flex";

const TYPES = ["text", "email", "password", "number", "search", "tel", "url"] as const;

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: { control: { type: "select" }, options: TYPES },
    width: { control: { type: "select" }, options: ["xs", "s", "m", "l", "xl", "full"] },
    size: { control: { type: "select" }, options: ["default", "large"] },
    disabled: { control: { type: "boolean" } },
    readonly: { control: { type: "boolean" } },
    invalid: { control: { type: "boolean" } },
    modelValue: { control: { type: "text" } },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    modelValue: "",
    type: "text",
    size: "default",
    width: "m",
    disabled: false,
    readonly: false,
    invalid: false,
    placeholder: "Type something…",
  },
};

export const Large: Story = {
  args: {
    modelValue: "",
    size: "large",
    placeholder: "Large input…",
  },
};

export const Disabled: Story = {
  args: {
    modelValue: "Disabled value",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    modelValue: "",
    invalid: true,
    placeholder: "This field has an error…",
  },
};

export const WithButton: Story = {
  render: () => ({
    components: { Input, Flex, Button },
    data() {
      return {
        value: "",
      };
    },
    template: `
        <Flex style="margin-bottom: .5rem" gap="sm">
          <Input
            id="text"
            v-model="value"
            type="text"
            placeholder="Name"
          />
          <Button
              variant="primary"
              type="button"
              size="small"
          >
            <i class="bi bi-floppy-fill"></i>
          </Button>
        </Flex>
        <Flex gap="sm">
          <Input
            id="text"
            v-model="value"
            type="text"
            placeholder="Name"
            size="large"
            width="l"
          />
          <Button
            variant="primary"
            type="button"
            size="default"
          >
            <i class="bi bi-floppy-fill"></i>
          </Button>
        </Flex>
    `,
  }),
};

export const Types: Story = {
  render: () => ({
    components: { Input },
    data() {
      return {
        values: {
          text: "",
          email: "",
          password: "",
          number: "",
          search: "",
          tel: "",
          url: "",
        } as Record<string, string>,
        TYPES,
      };
    },
    template: `
      <div style="display: grid; gap: 12px; max-width: 420px;">
        <div v-for="type in TYPES" :key="type" style="display: grid; gap: 6px;">
          <label :for="type" style="font-size: 14px; font-weight: 600;">
            {{ type }}
          </label>

          <Input
            :id="type"
            v-model="values[type]"
            :type="type"
            :placeholder="type === 'password' ? '••••••••' : 'Enter ' + type"
          />

          <div style="font-size: 12px; opacity: 0.7;">
            Value: {{ values[type] }}
          </div>
        </div>
      </div>
    `,
  }),
};

export const ComposedFieldExample: Story = {
  name: "Composed: Label + Hint + Error",
  render: () => ({
    components: { Input },
    data() {
      return {
        value: "",
        error: "",
      };
    },
    methods: {
      validate() {
        this.error = this.value.trim().length === 0 ? "This field is required." : "";
      },
    },
    template: `
      <div style="display: grid; gap: 6px; max-width: 420px;">
        <label for="email" style="font-size: 14px; font-weight: 600;">
          Email
        </label>

        <Input
          id="email"
          v-model="value"
          type="email"
          :invalid="Boolean(error)"
          placeholder="you@company.com"
          @blur="validate"
        />

        <div v-if="!error" style="font-size: 12px; opacity: 0.7;">
          We’ll never share your email.
        </div>

        <div v-else style="font-size: 12px; color: #dc3545;">
          {{ error }}
        </div>
      </div>
    `,
  }),
};
