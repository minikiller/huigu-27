<template>
  <div>
    <h2>家长注册</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <b-form-input
          type="text"
          v-model="user.fullname"
          v-validate="'required'"
          name="fullname"
          placeholder="真实姓名"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('name') }"
        />
        <div v-if="submitted && errors.has('name')" class="invalid-feedback">
          {{ errors.first("fullname") }}
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="user.roster"
          v-validate="'required'"
          name="roster"
          placeholder="子女姓名"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('roster') }"
        />
        <div v-if="submitted && errors.has('roster')" class="invalid-feedback">
          {{ errors.first("roster") }}
        </div>
      </div>
      <div class="form-group">
        <b-form-input
          type="text"
          v-model="user.name"
          v-validate="'required'"
          name="name"
          placeholder="登陆名称"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('name') }"
        />
        <div v-if="submitted && errors.has('name')" class="invalid-feedback">
          {{ errors.first("name") }}
        </div>
      </div>
      <div class="form-group">
        <b-form-input
          type="password"
          v-model="user.password"
          v-validate="{ required: true, min: 6 }"
          name="password"
          class="form-control"
          placeholder="登陆密码"
          :class="{ 'is-invalid': submitted && errors.has('password') }"
        />
        <div
          v-if="submitted && errors.has('password')"
          class="invalid-feedback"
        >
          {{ errors.first("password") }}
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="some-radios">关系:</label>
        <b-form-radio-group
          id="radio-group-2"
          v-model="user.parent"
          name="radio-sub-component"
        >
          <b-form-radio v-model="selected" name="some-radios" value="father"
            >父亲</b-form-radio
          >
          <b-form-radio v-model="selected" name="some-radios" value="mother"
            >母亲</b-form-radio
          >
        </b-form-radio-group>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="status.registering">
          注册
        </button>
        <img
          v-show="status.registering"
          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        />
        <router-link to="/login" class="btn btn-link">返回</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        name: "",
        roster: "",
        fullname: "",
        password: "",
        parent: "father",
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  methods: {
    ...mapActions("account", ["register"]),
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.register(this.user);
        }
      });
    },
  },
};
</script>