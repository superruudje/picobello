<template>
    <div
        class="loader"
        role="status"
        aria-live="polite"
        :aria-label="label"
    >
        <div class="loader__container" :class="`loader__container--${size}`">
            <!-- Overrideable icon -->
            <slot name="icon">
                <img
                    class="loader__image"
                    :src="spinnerUrl"
                    alt=""
                />
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import spinnerUrl from "../../assets/img/svg/spinner-icon.svg";

const props = withDefaults(
    defineProps<{
        size?: "small" | "medium" | "large";
        label?: string;
    }>(),
    {
        size: "medium",
        label: "Loading",
    })

</script>
