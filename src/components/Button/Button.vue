<template>
  <component
    :is="as"
    :aria-disabled="as !== 'button' ? disabled : undefined"
    :class="classes"
    :disabled="as === 'button' ? disabled : undefined"
    :href="as === 'a' && !disabled ? href : undefined"
    :type="as === 'button' ? type : undefined"
    @click="onClick"
  >
    <slot name="icon-left" />
    <span v-if="label" class="btn__text">{{ label }}</span>
    <slot v-else />
    <slot name="icon-right" />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface ButtonProps {
  label?: string;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  active?: boolean;
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit" | "reset";
}

type Variant = "primary" | "secondary" | "success" | "warning" | "danger";

type Size = "default" | "small";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "default",
  disabled: false,
  active: false,
  as: "button",
  type: "button",
});

const classes = computed(() => [
  "btn",
  `btn--${props.variant}`,
  props.size === "small" && "btn--small",
  props.disabled && "btn--disabled",
  props.active && "active",
]);

const onClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
};
</script>
