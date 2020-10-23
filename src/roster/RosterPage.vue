<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab active title="花名册">
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
      <b-tab title="投票">
        <a href="http://aaa.votegoo.com/vote/frontend/joinner/party_id/14246/parent_id/6095/player_id/356189/t/1603426535592">李雨婷</a>
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
    ...mapGetters("roster", ["getRosters"])
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
