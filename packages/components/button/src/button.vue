<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('round', round),
      bem.is('loading', loading),
      bem.is('disabled', disabled)
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="emitClick"
    @mousedown="emitMousedown"
    @mouseup="emitMouseup"
  >
    <template v-if="iconPlacement === 'left'">
      <!-- <hw-icon> -->
      <template v-if="loading">
        <hw-icon>
          <LoadingComponent></LoadingComponent>
        </hw-icon>
      </template>
      <template v-else-if="slots.icon">
        <Component :is="slots.icon"></Component>
      </template>
      <!-- </hw-icon> -->
    </template>

    <slot></slot>

    <template v-if="iconPlacement === 'right'">
      <!-- <hw-icon> -->
      <template v-if="loading">
        <hw-icon>
          <LoadingComponent></LoadingComponent>
        </hw-icon>
      </template>
      <template v-else-if="slots.icon">
        <Component :is="slots.icon"></Component>
      </template>
      <!-- </hw-icon> -->
    </template>
  </button>
</template>

<script setup lang="ts">
import { createNamespcace } from '@hw/utils/create';
import { buttonEmits, buttonProps } from './button';
import LoadingComponent from '@hw/components/internal-icon/Loading';
import HwIcon from '@hw/components/icon';
import { useSlots } from 'vue';

const bem = createNamespcace('button');
defineOptions({
  name: 'hw-button',
  inheritAttrs: false
});

const props = defineProps(buttonProps);
const emits = defineEmits(buttonEmits);
const slots = useSlots();

const emitClick = (e: MouseEvent) => {
  emits('click', e);
};
const emitMousedown = (e: MouseEvent) => {
  emits('mousedown', e);
};
const emitMouseup = (e: MouseEvent) => {
  emits('mouseup', e);
};
</script>

<style scoped></style>
