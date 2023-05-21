<script lang="ts" setup>
import VPMenuLink from '../../../node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue'
import VPMenuGroup from '../../../node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue'

defineProps<{
  items?: any[]
}>()
</script>

<template>
  <div class="VPMenu">
    <div v-if="items" class="items">
      <template v-for="item in items" :key="item.text">
        <VPMenuLink v-if="'link' in item" :item="item" />
        <VPMenuGroup v-else :text="item.text" :items="item.items" />
      </template>
    </div>

    <slot />
  </div>
</template>

<style scoped>
.VPMenu {
  border-radius: 12px;
  padding: 12px;
  min-width: 128px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
  transition: background-color 0.5s;
  max-height: calc(100vh - var(--vp-nav-height));
  overflow-y: auto;
}

.VPMenu :deep(.extraGroup) {
  margin: 0 -12px;
  padding: 0 12px 12px;
}

.VPMenu :deep(.extraGroup + .extraGroup) {
  border-top: 1px solid var(--vp-c-divider);
  padding: 11px 12px 12px;
}

.VPMenu :deep(.extraGroup:last-child) {
  padding-bottom: 0;
}

.VPMenu :deep(.extraGroup + .item) {
  border-top: 1px solid var(--vp-c-divider);
  padding: 11px 16px 0;
}

.VPMenu :deep(.item) {
  padding: 0 16px;
  white-space: nowrap;
}

.VPMenu :deep(.label) {
  flex-grow: 1;
  line-height: 28px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color .5s;
}

.VPMenu :deep(.action) {
  padding-left: 24px;
}
</style>
