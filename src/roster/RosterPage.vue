<template>
  <div>
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
        <b-tooltip :target="'row' + row.item.id" variant="danger">{{
          row.item.comment
        }}</b-tooltip>
      </template>
    </b-table>
  </div>
</template>
<script>
import config from "config";
import { rosterService } from "../_services";
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
    this.getall();
  },
  methods: {
    getall() {
      rosterService.getAll().then((data) => {
        console.log(data);
        this.share_items = data;
      });
    },
  },
};
</script>
