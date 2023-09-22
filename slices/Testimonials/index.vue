<script setup lang="ts">
import { Content, isFilled } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.TestimonialsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const testimonials = computed(() => {
  return props.slice.items
    .map(item => item.testimonial)
    .filter(
      testimonal => isFilled.contentRelationship(testimonal)
    ) as unknown as Content.TestimonialDocument[]
})
</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <PrismicText
      :field="slice.primary.heading"
      wrapper="h2"
      class="heading heading--md !font-semibold text-center mb-9"
    />
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-8">
      <div
        v-for="testimonial of testimonials"
        :key="testimonial.data.name ?? ''"
        class="border bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between"
      >
        <PrismicRichText
          :field="testimonial.data.quote"
          class="text-xl md:text-2xl font-body text-slate-600 mb-8"
        />
        <div class="flex items-center">
          <PrismicImage
            width="56"
            height="56"
            :field="testimonial.data.avatar"
            class="rounded-full mr-4 aspect-square"
            :imgix-params="{ ar: '1:1', fit: 'crop' }"
          />
          <div>
            <p class="text-base font-medium text-slate-700">
              {{ testimonial.data.name }}
            </p>
            <p class="text-base text-slate-600">
              {{ testimonial.data.job_title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Bounded>
</template>
