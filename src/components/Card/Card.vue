<template>
  <div class="card">
    <!-- Header -->
    <div v-if="hasHeader" class="card__header">
      <slot name="header-icon" />

      <h3 v-if="title" class="card__title">
        {{ title }}
      </h3>

      <slot name="header-buttons" />

      <button
        v-if="collapsible"
        :aria-expanded="!isCollapsed"
        class="card__collapse-toggle btn btn--small btn--secondary"
        type="button"
        @click="toggle"
      >
        <slot name="collapse-indicator">
          <i :class="{ 'is-collapsed': isCollapsed }" class="bi bi-chevron-up"></i>
        </slot>
      </button>
    </div>

    <!-- Body -->
    <div v-show="!isCollapsed" :class="{ 'with-header': hasHeader }" class="card__body">
      <slot name="card-body"></slot>
    </div>

    <!-- Footer -->
    <div v-if="hasFooter && !isCollapsed" class="card__footer">
      <div class="card__footer-content">
        <slot name="footer-content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from "vue";

const props = withDefaults(
  defineProps<{
    title?: string;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
  }>(),
  {
    collapsible: false,
    defaultCollapsed: false,
  },
);

const slots = useSlots();

const hasHeader = computed(() => !!props.title || !!slots["header-icon"]);
const hasFooter = computed(() => !!slots["footer-content"]);

const isCollapsed = ref(props.defaultCollapsed);

function toggle() {
  isCollapsed.value = !isCollapsed.value;
}
</script>
