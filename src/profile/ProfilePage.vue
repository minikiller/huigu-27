<template>
  <div>
    <b-container fluid>
      <b-tabs content-class="mt-3">
        <b-tab active>
          <template v-slot:title>
            <i class="fas fa-user-lock"></i>基础信息
          </template>
          <b-container fluid class="p-4">
            <b-row>
             
              <b-col>
                <b-img
                  thumbnail
                  fluid
                  :src="'/static/' + account.user.roster_id + '.jpg'"
                  fluid-grow
                  alt="Fluid-grow image"
                ></b-img>
              </b-col>
               <b-col> 姓名： {{ account.user.fullname }} </b-col>
               <b-col> <FormulateInput type="text" /> </b-col>
            </b-row>
          </b-container>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <i class="fas fa-user-lock"></i>修改密码
          </template>
          <b-row class="mx-2">
            <b-col>
              <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group
                  id="input-group-1"
                  label="新的密码:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="password"
                    type="password"
                    required
                    placeholder="输入新的密码"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="确认密码:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="confirm_password"
                    type="password"
                    required
                    placeholder="输入确认密码"
                  ></b-form-input>
                </b-form-group>
                <div class="text-right">
                  <b-button type="submit" variant="primary">修改密码</b-button>
                  <b-button type="reset" variant="danger">重置</b-button>
                </div>
              </b-form>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
import { userService } from "../_services";
import { mapState, mapMutations } from "vuex";
export default {
  name: "profile",
  data() {
    return {
      avatar: null,
      saving: false,
      saved: true,
      user: null,
      password: "",
      confirm_password: "",
      background: "",
    };
  },
  computed: {
    ...mapState({
      account: (state) => state.account,
      games: (state) => state.games,
    }),
  },
  components: {},

  methods: {
    ...mapMutations("alert", ["success", "error", "clear"]),
    onSubmit(evt) {
      evt.preventDefault();
      if (this.password != this.confirm_password) {
        alert("两次输入的密码不一致！");
        return;
      }
      userService.changePassword(this.password).then((data) => {
        this.success(data.message);
      });
      // alert(JSON.stringify(this.password));
    },
    onReset(evt) {
      this.password = "";
      this.confirm_password = "";
    },
  },
  mounted() {},
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
