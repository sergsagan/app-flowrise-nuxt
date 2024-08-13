<script setup lang="ts">
  const settings = useSettings();

  const { asImageSrc } = usePrismic();

  useSeoMeta({
    title: settings.value?.data.site_tittle,
    description: settings.value?.data.meta_description,
    ogImage: 	asImageSrc(settings.value?.data.og_image)
  })
</script>

<template>
  <div>
    <Header />
    <slot />
    <div class="fixed inset-0 bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] opacity-50" />
    <Footer />
  </div>
</template>

<style scoped>

</style>
