<template>
  <b-jumbotron>
    <b-container class="container-fluid">
      <b-row>
        <div class="col-sm-12">
          <div class="page" v-if="getSpinner">
            <b-spinner
              class="spinner"
              :variant="'primary'"
              :key="'primary'"
            ></b-spinner>
          </div>
          <div v-if="alert.message" :class="`alert ${alert.type}`">
            {{ alert.message }}
          </div>
          <router-view></router-view>
        </div>
      </b-row>
    </b-container>
  </b-jumbotron>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapState({
      alert: (state) => state.alert,
    }),
    ...mapGetters("alert", ["getSpinner"]),
  },
  methods: {
    ...mapActions({
      clearAlert: "alert/clear",
    }),
  },
  watch: {
    $route(to, from) {
      // clear alert on location change
      this.clearAlert();
    },
  },
};
</script>