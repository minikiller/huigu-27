<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab active title="投票">
        <b-avatar variant="info" :src="'/static/27.jpg'"></b-avatar>
        <a
          href="http://aaa.votegoo.com/vote/frontend/joinner/party_id/14246/parent_id/6095/player_id/356189/t/1603426535592"
          >李煜婷</a
        >
        <b-avatar variant="info" :src="'/static/6.jpg'"></b-avatar>
        <a
          href="http://aaa.votegoo.com/vote/frontend/joinner/party_id/14245/parent_id/6094/player_id/356145/t/1603420227410"
          >李雨芯</a
        >
        <b-avatar variant="info" :src="'/static/23.jpg'"></b-avatar>
        <a
          href="http://aaa.votegoo.com/vote/frontend/joinner/party_id/14249/parent_id/6097/player_id/356304/t/1603424533438"
          >王子睿</a
        >
        <b-avatar variant="info" :src="'/static/16.jpg'"></b-avatar>
        <a
          href="http://aaa.votegoo.com/vote/frontend/joinner/party_id/14200/parent_id/6063/player_id/356170/t/1603423291805
"
          >孙浩轩</a
        >

        <b-avatar variant="info" :src="'/static/8.jpg'"></b-avatar>
        <a
          href="http://aaa.votegoo.com/vote/frontend/joinner/party_id/14252/parent_id/6100/player_id/356339/t/1603422587081

"
          >刘杨</a
        >
        <b-avatar variant="info" :src="'/static/31.jpg'"></b-avatar>
        <a
          href="http://aaa.votegoo.com/vote/frontend/joinner/party_id/14245/parent_id/6094/player_id/356154/t/1603423014486


"
          >于馨雅</a
        >
        <b-avatar variant="info" :src="'/static/1.jpg'"></b-avatar>
        <a
          href="http://aaa.votegoo.com/vote/frontend/joinner/party_id/14200/parent_id/6063/player_id/356059
"
          >陈梓桐</a
        >
      </b-tab>
      <b-tab title="花名册">
        <b-row>
          <div
            id="my-card"
            v-for="(data, index) in rosters"
            v-bind:key="index"
            style="margin: 0 auto"
          >
            <b-col>
              <b-card
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
                img-alt="缺少图片"
                img-top
              >
                <b-card-title>
                  <b-avatar
                    variant="info"
                    :src="'/static/' + data.id + '.jpg'"
                  ></b-avatar
                  >&nbsp姓名：{{ data.name }}
                </b-card-title>
                <b-card-title
                  >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp学号：{{
                    data.code
                  }}</b-card-title
                >
                <b-card-text> </b-card-text>
              </b-card>
            </b-col>
          </div>
        </b-row>
      </b-tab>
      <b-tab title="课程表">
        <b-img src="/static/class.jpg" fluid alt="Responsive image"></b-img>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import config from "config";
import { rosterService } from "../_services";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      rosters: (state) => state.roster.rosters,
    }),
    ...mapGetters("roster", ["getRosters"]),
  },
  data() {
    return {
      name: "我的棋谱",
      show: false,
      perPage: 10,
      currentPage: 1,
      totalRows: 0,
      share_currentPage: 1,
      share_totalRows: 0,
      comment: "",
      id: 0,
      items: [],
      // share_items: [],
    };
  },
  mounted() {
    this.SET_SPINNER(true);
    this.getall();
  },
  methods: {
    ...mapMutations("alert", ["SET_SPINNER"]),
    ...mapMutations("roster", ["updateRosters"]),
    getall() {
      rosterService.getAll().then((data) => {
        console.log(data);
        // this.share_items = data;
        this.updateRosters(data);
        this.SET_SPINNER(false);
      });
    },
  },
};
</script>
