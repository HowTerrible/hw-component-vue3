# 按钮 Button

按钮用来触发一些操作。

## 基础用法

<script setup lang="ts">
import { BatteryDead,BatteryFullSharp,Heart } from '@vicons/ionicons5'
const handleClick = () =>{
  alert('🙂')
}
</script>

<hw-button>Default</hw-button>
<hw-button type="primary">Primary</hw-button>
<hw-button type="success">Success</hw-button>
<hw-button type="warning">Warning</hw-button>
<hw-button type="danger">Danger</hw-button>
<hw-button type="info">Info</hw-button>

```vue
<template>
  <hw-button>Default</hw-button>
  <hw-button type="primary">Primary</hw-button>
  <hw-button type="success">Success</hw-button>
  <hw-button type="warning">Warning</hw-button>
  <hw-button type="danger">Danger</hw-button>
  <hw-button type="info">Info</hw-button>
</template>
```

## 禁用

<hw-button type="primary" disabled>Primary</hw-button>

```html
<hw-button type="primary" disabled>Primary</hw-button>
```

## 图标

<hw-button :round="true" size="large" @click="handleClick">
  <template #icon>
    <hw-icon size="20">
      <Heart />
    </hw-icon>
  </template>
  我爱你
</hw-button>

<hw-button :round="true" :loading="true">
  <template #icon>
    <hw-icon size="20">
      <Heart />
    </hw-icon>
  </template>
  我爱你
</hw-button>

<hw-button :round="true" icon-placement="right">
  <template #icon>
    <hw-icon size="20">
      <Heart />
    </hw-icon>
  </template>
  我爱你
</hw-button>

```html
<hw-button :round="true" size="large" @click="handleClick">
  <template #icon>
    <hw-icon size="20">
      <Heart />
    </hw-icon>
  </template>
  我爱你
</hw-button>

<hw-button :round="true" :loading="true">
  <template #icon>
    <hw-icon size="20">
      <Heart />
    </hw-icon>
  </template>
  我爱你
</hw-button>

<hw-button :round="true" icon-placement="right">
  <template #icon>
    <hw-icon size="20">
      <Heart />
    </hw-icon>
  </template>
  我爱你
</hw-button>
```

## 事件

<hw-button @click="handleClick">
点我啊
</hw-button>

```html
<hw-button @click="handleClick"> 点我啊 </hw-button>
```

## API

### Button Props

| 名称           | 类型                                                   | 默认值  | 说明                 |
| -------------- | ------------------------------------------------------ | ------- | -------------------- |
| size           | tiny \| small \| medium \| large                       | medium  | 按钮大小             |
| type           | primary \| success \|warning \|danger \|info\| default | default | 按钮颜色             |
| icon-placement | left \| right                                          | left    | icon 位置            |
| nativeType     | button \| reset \| submit                              | button  | 按钮类型             |
| disabled       | boolean                                                | false   | 按钮是否禁用         |
| loading        | boolean                                                | false   | 按钮是否显示加载状态 |
| round          | boolean                                                | false   | 按钮是否显示圆角     |

### Button Slots

| 名称    | 默认值    | 说明       |
| ------- | --------- | ---------- |
| default | undefined | 按钮的内容 |
| icon    | undefined | 按钮的图标 |
