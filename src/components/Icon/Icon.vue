<template>
  <i
    class="bi"
    :class="`bi-${name}`"
    :style="{ fontSize: typeof size === 'number' ? `${size}px` : size }"
    :aria-hidden="title ? undefined : 'true'"
    role="img"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string; // e.g. "chevron-down"
    size?: number | string; // e.g. 16 or "1rem"
    title?: string;
  }>(),
  { size: "1em" },
);
</script>
