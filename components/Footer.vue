<script setup lang="ts">
const settings = useSettings();
</script>

<template>
  <Bounded
    as="footer"
    class="!py-4 md:!py-6 lg:!py-8 bg-white"
  >
    <div class="flex gap-4 items-center justify-between flex-col sm:flex-row">
      <Logo />
      <p class="text-xs">
        &#169;{{ new Date().getFullYear() }} {{ settings?.data.site_tittle }}
      </p>
      <nav>
        <ul class="flex">
          <li
            v-for="item of settings?.data.navigation"
            :key="item.label ?? ''"
          >
            <PrismicLink
              :field="item.link"
              class="p-4"
            >
              {{ item.label }}
            </PrismicLink>
          </li>
        </ul>
      </nav>
    </div>
  </Bounded>
</template>

<style scoped>
nav {
  ul {
    li:hover {
      color: #0891B2;
    }
  }
}
</style>
