<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('index', () =>
  prismic.client.getSingle("homepage", {
    fetchLinks: [
      'testimonial.quote',
      'testimonial.avatar',
      'testimonial.name',
      'testimonial.job_title'
    ]
  })
)

useSeoMeta({
  title: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
})
</script>


<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
