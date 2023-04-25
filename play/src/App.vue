<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5';

const handleClick = e => {
  console.log('点击');
};
</script>

<template>
  <hw-icon color="red" size="40">
    <AddCircle></AddCircle>
  </hw-icon>
  <hw-icon color="yellow" size="40">
    <AddCircle></AddCircle>
  </hw-icon>
  <hw-button>button</hw-button>
  <hw-button type="primary">primary</hw-button>
  <hw-button type="success">success</hw-button>
  <hw-button type="warning">warning</hw-button>
  <hw-button type="danger">danger</hw-button>
  <hw-button type="info">info</hw-button>
  <hw-button type="default">default</hw-button>
  <hw-button icon-placement="left">
    <template #icon>
      <hw-icon color="yellow" size="32">
        <AddCircle></AddCircle>
      </hw-icon>
    </template>
  </hw-button>
  <hw-button type="default" loading>loading</hw-button>
  <hw-button @click="handleClick"></hw-button>
</template>

<style scoped></style>
