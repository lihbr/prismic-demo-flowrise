<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CallToActionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">
      <PrismicText
        wrapper="h2"
        class="heading heading--sm !font-semibold mb-4"
        :field="slice.primary.heading"
      />
      <PrismicRichText
        :field="slice.primary.body"
        class="text-center text-slate-600 mb-8"
      />
      <NuxtLink
        :field="slice.primary.button_link"
        class="button"
      >
        {{ slice.primary.button_text }}
      </NuxtLink>
    </div>
  </Bounded>
</template>
