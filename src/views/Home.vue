<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <a-menu theme="dark" mode="horizontal" :default-selected-keys="['2']" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">
          nav 1
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '2000px' }">
        <h1 class="title">{{ title }}</h1>
        <a-spin v-if="loading" />
        <ul>
          <li v-for="item in list" :key="item.value">{{ item.label }}</li>
        </ul>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  props: {
    title: {
      type: String,
      default: 'title'
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['loading', 'list'])
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(['getList']),
    init() {
      this.getList();
    }
  }
};
</script>
