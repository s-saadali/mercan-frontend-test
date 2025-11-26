<template>
  <v-dialog
    v-model="dialog_state"
    transition="dialog-bottom-transition"
    fullscreen
    style="z-index: 99999"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        prepend-icon="mdi-cog"
        size="small"
        text="Settings"
        v-bind="activatorProps"
        @click="$emit('close')"
      ></v-btn>
    </template>

    <v-card> dasdsa </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["dialog"],
  data() {
    return {
      dialog_state: false,
    };
  },
  watch: {
    dialog: {
      handleDialog(newValue) {
        this.dialog_state = this.dialog;
      },
    },
  },
};
</script>
