<script setup lang="ts">
import { useData } from '../../../node_modules/vitepress/dist/client/theme-default/composables/data'
import { useSidebar } from '../../../node_modules/vitepress/dist/client/theme-default/composables/sidebar'
import { useLangs } from '../../../node_modules/vitepress/dist/client/theme-default/composables/langs'
import { normalizeLink } from '../../../node_modules/vitepress/dist/client/theme-default/support/utils'
import VPImage from '../../../node_modules/vitepress/dist/client/theme-default/components/VPImage.vue'

const { site, theme } = useData()
const { hasSidebar } = useSidebar()
const { currentLang } = useLangs()
</script>

<template>
  <div class="VPNavBarTitle" :class="{ 'has-sidebar': hasSidebar }">
    <a class="title" :href="normalizeLink(currentLang.link)">
      <slot name="nav-bar-title-before" />
      <VPImage v-if="theme.logo" class="logo" :image="theme.logo" />
      <template v-if="theme.siteTitle">{{ theme.siteTitle }}</template>
      <template v-else-if="theme.siteTitle === undefined">{{ site.title }}</template>
      <slot name="nav-bar-title-after" />
    </a>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  width: 100%;
  height: var(--vp-nav-height);
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
}

.title:hover {
  opacity: 0.9;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }

  .VPNavBarTitle.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
}

:deep(.logo) {
  margin-right: 7px;
  height: 21px;
}
</style>
