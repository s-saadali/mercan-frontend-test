<template>
  <v-layout>
    <sidebar />
    <top_nav />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import top_nav from "@/layout/components/top_nav.vue";
import sidebar from "@/layout/components/sidebar.vue";

export default {
  components: { top_nav, sidebar },
};
</script>
