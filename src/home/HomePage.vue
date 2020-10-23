<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">
          <b-avatar
            variant="info"
            :src="'/static/' + account.user.roster_id + '.jpg'"
          ></b-avatar>
          吉大惠谷2020届1年27班
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form @submit.prevent="search">
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
                v-model="searchText"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{ account.user.fullname }}</em>
              </template>
              <b-dropdown-item href="/profile">
                <i class="fas fa-user-cog"></i>个人信息
              </b-dropdown-item>
              <b-dropdown-item @click="logout">
                <i class="fas fa-sign-out-alt"></i>退出
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <roster-page class="mt-3"></roster-page>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import RosterPage from "../roster/RosterPage.vue";
import { userService } from "../_services";

export default {
  components: {
    RosterPage,
  },
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    ...mapState({
      account: (state) => state.account,
      users: (state) => state.users.all,
      rosters: (state) => state.roster.rosters,
    }),
  },
  created() {
    // this.getAllUsers();
  },
  methods: {
    ...mapActions("users", {
      getAllUsers: "getAll",
      deleteUser: "delete",
    }),
    ...mapMutations("roster", ["filterRosters"]),

    logout() {
      userService.logout();
      this.$router.push("/login");
    },
    search() {
      // alert(this.searchText);
        this.filterRosters(this.searchText);
      
    },
  },
};
</script>