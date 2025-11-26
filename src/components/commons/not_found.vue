<template>
  <v-row>
    <v-col cols="12">
      <v-empty-state
        image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/connection.svg"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        :title="`${$route.meta.title} is not ready yet`"
      ></v-empty-state>
    </v-col>
  </v-row>
</template>
