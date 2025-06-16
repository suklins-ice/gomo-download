<template>
  <div v-if="config.ios && config.android">
    <div class="header">← KYC CENTER</div>

    <div class="tab-btn-group">
      <button class="tab-btn" :class="{ active: activeTab === 'ios' }" @click="activeTab = 'ios'">
        <i class="bi bi-apple"></i> iOS
      </button>
      <button class="tab-btn" :class="{ active: activeTab === 'android' }" @click="activeTab = 'android'">
        <i class="bi bi-android2"></i> Android
      </button>
    </div>

    <!-- iOS Section -->
    <div v-if="activeTab === 'ios'" class="px-3">
      <div v-for="(item, index) in config.ios.history.slice().reverse()" :key="index" class="version-card">
        <h5>{{ item.version }}</h5>
        <div class="date">{{ item.date }}</div>
        <ul>
          <li v-for="(detail, i) in item.details" :key="i">{{ detail }}</li>
        </ul>
        <button v-if="item.ipa" :href="item.ipa" class="btn btn-outline-success btn-sm btn-download">⬇ DemoApp.ipa</button>
        <button v-if="item.sdk" :href="item.sdk" class="btn btn-outline-success btn-sm btn-download">⬇ xcframework.zip</button>
        <button v-if="item.tencentSdk" :href="item.tencentSdk" class="btn btn-outline-success btn-sm btn-download">⬇ tencent xcframework.zip</button>
      </div>
    </div>

    <!-- Android Section -->
    <div v-if="activeTab === 'android'" class="px-3">
      <div v-for="(item, index) in config.android.history.slice().reverse()" :key="index" class="version-card">
        <h5>{{ item.version }}</h5>
        <div class="date">{{ item.date }}</div>
        <ul>
          <li v-for="(detail, i) in item.details" :key="i">{{ detail }}</li>
        </ul>
        <button v-if="item.apk" :href="item.apk" class="btn btn-outline-success btn-sm btn-download">⬇ DemoApp.apk</button>
        <button v-if="item.aar" :href="item.aar" class="btn btn-outline-success btn-sm btn-download">⬇ aar.zip</button>
        <button v-if="item.tencentAar" :href="item.tencentAar" class="btn btn-outline-success btn-sm btn-download">⬇ tencent aar.zip</button>
      </div>
    </div>
  </div>

  <div v-else class="text-center p-5">Loading...</div>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css'
const DownloadJSON = require('../download-config.json');

export default {
  name: 'DownloadComponent',
  data() {
    return {
      config: {},
      activeTab: 'ios'
    };
  },
  created() {
    this.config = DownloadJSON;
  }
};
</script>

<style scoped>
.header {
  background-color: #8cc63f;
  color: white;
  padding: 1rem 1.5rem;
  font-weight: bold;
  font-size: 1.5rem;
}

.tab-btn-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

.tab-btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 50px;
  border: 1px solid #8cc63f;
  background: white;
  color: #8cc63f;
  font-weight: 600;
  transition: all 0.3s;
}

.tab-btn.active {
  background: #8cc63f;
  color: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.version-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.version-card h5 {
  margin-bottom: 0.25rem;
}

.version-card .date {
  color: gray;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.btn-download {
  margin-right: 0.5rem;
  margin-top: 0.5rem;
}
</style>
