<template>
    <div
        :class="`alert--${props.type}`"
        class="alert"
    >
        <div class="alert__icon">
            <slot name="alert-icon">
                <Icon :name="icon"/>
            </slot>
        </div>
        <div class="alert__content">
            <slot name="alert-content"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Icon from "../Icon/Icon.vue";
import {computed} from "vue";

interface AlertProps {
    type?: Type;
}

type Type =
    | "success"
    | "info"
    | "warning"
    | "danger";

const props = withDefaults(defineProps<AlertProps>(), {
    type: "info",
})

const icon = computed(() => {
    if (props.type === "warning")
        return 'exclamation-circle-fill'
    else if (props.type === "success")
        return 'check-circle-fill'
    else if (props.type === "info")
        return 'info-circle-fill'
    else if (props.type === "danger")
        return 'x-circle-fill'
    else return ''
})

</script>
