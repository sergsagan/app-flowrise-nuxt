<script setup lang="ts">
defineProps<{
  as?: string
}>();
</script>

<template>
  <component
    :is="as || 'section'"
    class="px-4 py-10 md:px-6 md:py-14 lg:py-16"
  >
    <div class="max-w-6xl w-full mx-auto">
      <slot />
    </div>
  </component>
</template>

<style scoped>

</style>

