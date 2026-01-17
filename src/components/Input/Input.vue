<template>
  <div :class="`input-wrapper--${width}`" class="input-wrapper">
    <input
      :aria-invalid="invalid ? 'true' : undefined"
      :class="[
        size === 'large' && 'input--large',
        disabled && 'input--disabled',
        invalid && 'input--invalid',
      ]"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :type="type"
      :value="modelValue"
      class="input"
      v-bind="inputAttrs"
      @blur="$emit('blur', $event)"
      @change="$emit('change', $event)"
      @focus="$emit('focus', $event)"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from "vue";

export type Width = "xs" | "s" | "m" | "l" | "xl" | "full";
type Size = "default" | "large";
type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "search"
  | "tel"
  | "url"
  | "date"
  | "time";

withDefaults(
  defineProps<{
    modelValue?: string | number;
    type?: InputType;
    width?: Width;
    size?: Size;
    disabled?: boolean;
    readonly?: boolean;
    invalid?: boolean;
    placeholder?: string;
  }>(),
  {
    type: "text",
    width: "m",
    size: "default",
    disabled: false,
    readonly: false,
    invalid: false,
  },
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur", ev: FocusEvent): void;
  (e: "focus", ev: FocusEvent): void;
  (e: "change", ev: Event): void;
}>();

const attrs = useAttrs();

const inputAttrs = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});

function onInput(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>
