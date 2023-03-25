<template>
  <div class="video-grid">
    <!--video-grid-item用于包裹视频元素的容器，<video>元素展示视频内容-->
    <div v-for="item in videos" :key="item.id" class="video-grid-item">
      <video :src="item.url" controls autoplay></video>
    </div>
  </div>
</template>

<script>
import videoData from '@/videoData.js'

export default {
  name: 'VideoGrid',
  data() {
    return {
      videos: videoData,
    }
  },
}
</script>



<!-- 九宫格<template>
  <div class="video-grid">
    <div v-for="(video, index) in videos" :key="index" class="video-item">
      <video :src="video.url" controls></video>
      <div class="video-info">{{ video.name }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // 视频列表数据（示例）
    const videos = ref([
      { name: '视频1', url: 'http://example.com/video1.mp4' },
      { name: '视频2', url: 'http://example.com/video2.mp4' },
      { name: '视频3', url: 'http://example.com/video3.mp4' },
      { name: '视频4', url: 'http://example.com/video4.mp4' },
      { name: '视频5', url: 'http://example.com/video5.mp4' },
      { name: '视频6', url: 'http://example.com/video6.mp4' },
      { name: '视频7', url: 'http://example.com/video7.mp4' },
      { name: '视频8', url: 'http://example.com/video8.mp4' },
      { name: '视频9', url: 'http://example.com/video9.mp4' },
    ]);

    return {
      videos,
    };
  },
};
</script>

<style scoped>
.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.video-item {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
}

.video-item video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
}
</style>



 -->




<!-- /* eslint-disable */
<template>
    <div class="grid-container">
      <div v-for="(video, index) in videos" :key="index" class="grid-item">
        <video-player :options="playerOptions" :source="video.source"></video-player>
      </div>
    </div>
  </template>
  
  <script>
  import VideoPlayer from 'vue-video-player'
  import 'video.js/dist/video-js.css'
  
  export default {
    name: 'GridContainer',
    components: {
      VideoPlayer
    },
    data() {
      return {
        videos: [
          { source: 'https://example.com/video1.mp4' },
          { source: 'https://example.com/video2.mp4' },
          { source: 'https://example.com/video3.mp4' },
          { source: 'https://example.com/video4.mp4' },
          { source: 'https://example.com/video5.mp4' },
          { source: 'https://example.com/video6.mp4' },
          { source: 'https://example.com/video7.mp4' },
          { source: 'https://example.com/video8.mp4' },
          { source: 'https://example.com/video9.mp4' }
        ],
        playerOptions: {
          autoplay: true,
          controls: true,
          muted: true
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  
  .grid-item {
    height: 200px;
    background-color: #333;
    border-radius: 5px;
    overflow: hidden;
  }
  </style>
  /* eslint-disable */ -->