<script lang="ts" setup>
const settings = useSettings();
</script>

<template>
  <Bounded as="footer">
    <div class="flex sm:flex-row flex-col justify-between items-center gap-6">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>

      <p class="text-xs">
        ©{{ new Date().getFullYear() }} {{ settings?.data.site_title }}
      </p>

      <ul class="flex">
        <li
          v-for="item of settings?.data.navigation"
          :key="item.label ?? ''"
        >
          <PrismicLink
            :field="item.link"
            class="p-3"
          >
            {{ item.label }}
          </PrismicLink>
        </li>
      </ul>
    </div>
  </Bounded>
</template>
