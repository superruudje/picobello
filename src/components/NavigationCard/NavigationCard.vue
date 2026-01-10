<template>
    <component
        :is="as"
        class="nav-card"
        :href="as === 'a' && !disabled ? href : undefined"
        :aria-disabled="disabled ? 'true' : undefined"
        :tabindex="disabled ? -1 : 0"
    >
        <div class="nav-card__media">
            <slot name="image" />
        </div>

        <div class="nav-card__content">
            <div class="nav-card__title">{{ title }}</div>
            <p v-if="subtext" class="nav-card__subtext">{{ subtext }}</p>

            <slot />
        </div>

    </component>
</template>

<script setup lang="ts">
type As = "a" | "button" | "div";

const props = withDefaults(
    defineProps<{
        title: string;
        subtext?: string;
        href?: string;
        as?: As;
        disabled?: boolean;
    }>(),
    {
        as: "div",
        disabled: false,
    }
);

</script>