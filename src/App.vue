<template>
  <v-app
    id="inspire"
    :style="{
      background:
        $vuetify.theme.themes[$vuetify.theme.dark === true ? 'dark' : 'light']
          .background
    }"
  >
    <transitionPage>
      <router-view />
    </transitionPage>
  </v-app>
</template>

<script>
import transitionPage from "./components/transitionPage/index";
export default {
  name: "App",
  props: {},
  components: { transitionPage },
  data: () => ({}),
  created() {}
};
</script>
