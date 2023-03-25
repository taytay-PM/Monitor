<template>
  <div class="monitor">
    <video-grid />
  </div>
</template>

<script>
import VideoGrid from '@/components/VideoGrid.vue'

export default {
  name: 'MonitorView',
  components: { VideoGrid },
}
</script>

<style scoped>
.monitor {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
