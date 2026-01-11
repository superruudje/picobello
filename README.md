# Picobello

Picobello is a Vue 3 design system and component library.

⚠️ **Status:** Beta  
The API may change before a stable `1.0.0` release.

---

## Installation

```bash
npm install @rudihaamke/picobello@beta
```

---

## Usage

### Import styles (required)

Import the global styles once in your app entry:

```ts
// main.ts
import "@rudihaamke/picobello/dist/style.css";
```

### Use components

```vue
<script setup lang="ts">
import { Button, Heading, Flex } from "@rudihaamke/picobello";
</script>

<template>
  <Heading :level="1" :visual="3">Dashboard</Heading>

  <Flex gap="sm" align="center">
    <Button label="Save" />
    <Button label="Cancel" variant="secondary" />
  </Flex>
</template>
```

---

## Components

Currently available (beta):

- Button
- Heading
- Flex
- Card
- NavigationCard
- Loader

More components will be added over time.

---

## Vue compatibility

- Vue 3.x
- Vue is a peer dependency and must be installed in the consuming project.

---

## Icons

Picobello uses Bootstrap Icons internally.  
Icons are included via the library’s CSS and work out of the box.

All icon usage is overridable via slots.

---

## Development

```bash
npm install
npm run storybook
```

---

## License

MIT
