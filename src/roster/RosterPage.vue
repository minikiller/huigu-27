<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab active title="花名册">
        <b-row>
          <div
            id="my-card"
            v-for="(data, index) in share_items"
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
      <!-- <b-tab title="花名册">
        <b-table
          striped
          hover
          :items="share_items"
          :fields="fields"
          table-class="text-nowrap"
          responsive
        >
          <template v-slot:cell(index)="row">{{ row.index + 1 }}</template>
          <template v-slot:cell(id)="row">
            <b class="text-info" :id="'row' + row.item.id">{{ row.item.id }}</b>
            <b-tooltip :target="'row' + row.item.id" variant="danger">
              <b-img
                :src="'/static/' + row.item.id + '.jpg'"
                fluid
                alt="Responsive image"
              ></b-img>
            </b-tooltip>
          </template>
        </b-table>
      </b-tab> -->
      <b-tab title="课程表">
        <b-img src="/static/class.jpg" fluid alt="Responsive image"></b-img>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import config from "config";
import { rosterService } from "../_services";
import { mapState, mapMutations } from "vuex";

export default {
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
      fields: [
        {
          key: "id",
          label: "ID",
          // sortable: true,
        },
        {
          key: "name",
          label: "姓名",
          // sortable: true,
        },
        {
          key: "code",
          label: "学号",
        },
      ],
      items: [],
      share_items: [],
    };
  },
  mounted() {
    this.SET_SPINNER(true);
    this.getall();
  },
  methods: {
    ...mapMutations("alert", ["SET_SPINNER"]),
    getall() {
      rosterService.getAll().then((data) => {
        console.log(data);
        this.share_items = data;
        this.SET_SPINNER(false);
      });
    },
  },
};
</script>
