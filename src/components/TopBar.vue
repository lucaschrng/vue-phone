<template>
  <div class="top-bar">
    <div class="clock">{{ time }}</div>
    <div>
      <img src="/img/cellularbars.svg" alt="" class="cellular" />
      <img src="/img/wifi.svg" alt="" class="wifi" />
      <img src="/img/battery.75.svg" alt="" class="battery" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopBar',
  data() {
    return { time: '' };
  },
  mounted() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  },
  methods: {
    updateTime() {
      this.time = new Date().toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
      });
    },
  },
};
</script>
<style scoped>
.top-bar {
  height: 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0 3px;
}

.top-bar > div {
  width: 133px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.top-bar > div img.cellular {
  height: 20px;
}

.top-bar > div img.wifi {
  height: 20px;
}

.top-bar > div img.battery {
  height: 16px;
}
</style>
