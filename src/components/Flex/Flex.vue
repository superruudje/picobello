<template>
    <div
        :class="[
    'flex',
    `flex--${direction}`,
    typeof gap === 'string' && `flex--gap-${gap}`,
    align && `flex--align-${align}`,
    justify && `flex--justify-${justify}`,
    wrap && 'flex--wrap',
    inline && 'flex--inline'
  ]"
        :style="style"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Direction = "row" | "column";
type Align = "start" | "center" | "end" | "stretch";
type Justify = "start" | "center" | "end" | "between" | "around" | "evenly";
type Gap = "none" | "xs" | "sm" | "md" | "lg" | number;

const props = withDefaults(
    defineProps<{
        direction?: Direction;
        gap?: Gap;
        align?: Align;
        justify?: Justify;
        wrap?: boolean;
        inline?: boolean;
    }>(),
    {
        direction: "row",
        gap: "md",
        wrap: false,
        inline: false,
    }
);

const style = computed(() => {
    if (typeof props.gap === "number") {
        return { gap: `${props.gap}px` };
    }
    return {};
});
</script>