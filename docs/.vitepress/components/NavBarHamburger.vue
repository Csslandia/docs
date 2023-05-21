<script lang="ts" setup>
defineProps<{
  active: boolean
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    type="button"
    class="VPNavBarHamburger"
    :class="{ active }"
    aria-label="mobile navigation"
    :aria-expanded="active"
    aria-controls="VPNavScreen"
    @click="$emit('click')"
  >
    <span class="wrapper">
      <span class="top-line" />
      <span class="middle-line" />
      <span class="bottom-line" />
    </span>
  </button>
</template>

<style scoped>
.VPNavBarHamburger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: var(--vp-nav-height);
}

@media (min-width: 768px) {
  .VPNavBarHamburger {
    display: none;
  }
}

.wrapper {
  position: relative;
  width: 16px;
  height: 14px;
  overflow: hidden;
}

.VPNavBarHamburger:hover .top-line    { top: 0; left: 0; transform: translateX(4px); }
.VPNavBarHamburger:hover .middle-line { top: 6px; left: 0; transform: translateX(0); }
.VPNavBarHamburger:hover .bottom-line { top: 12px; left: 0; transform: translateX(8px); }

.VPNavBarHamburger.active .top-line    { top: 6px; transform: translateX(0) rotate(225deg); }
.VPNavBarHamburger.active .middle-line { top: 6px; transform: translateX(16px); }
.VPNavBarHamburger.active .bottom-line { top: 6px; transform: translateX(0) rotate(135deg); }

.VPNavBarHamburger.active:hover .top-line,
.VPNavBarHamburger.active:hover .middle-line,
.VPNavBarHamburger.active:hover .bottom-line {
  background-color: var(--vp-c-text-2);
  transition: top .25s, background-color .25s, transform .25s;
}

.top-line,
.middle-line,
.bottom-line {
  position: absolute;
  width: 16px;
  height: 2px;
  background-color: var(--vp-c-text-1);
  transition: top .25s, background-color .5s, transform .25s;
}

.top-line    { top: 0; left: 0; transform: translateX(0); }
.middle-line { top: 6px; left: 0; transform: translateX(8px); }
.bottom-line { top: 12px; left: 0; transform: translateX(4px); }
</style>
