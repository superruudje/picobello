<template>
  <component :is="tag" class="heading" :class="`heading--h${visualLevel}`">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Level = 1 | 2 | 3 | 4 | 5 | 6;

const props = withDefaults(
  defineProps<{
    level?: Level; // semantic
    visual?: Level; // visual style
  }>(),
  {
    level: 2,
  },
);

const tag = computed(() => `h${props.level}` as const);
const visualLevel = computed(() => props.visual ?? props.level);
</script>
