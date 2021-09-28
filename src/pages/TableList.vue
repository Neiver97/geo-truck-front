<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table type="hover" :data="table1.data" :columns="table1.columns">

            </paper-table>
            {{table1.data}}
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { PaperTable } from "@/components";
import axios from 'axios';
const tableColumns = ["Id", "Title", "Description", "Start Date", "Finish Date"];
const tableData=[];

export default {
  components: {
    PaperTable
  },
  mounted(){
    this.getElements();
  },
  data() {
    return {
      table1: {
        title: "Activity table",
        subTitle: "Information about the activitys",
        columns: [...tableColumns],
        data: [{
          "":tableData.id
        }]
      },
      table2: {
        title: "Table on Plain Background",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  },
  methods: {
    async getElements(){
      await axios.get('http://localhost:8089/actividades/')
      .then(response => {
        this.tableData=response.data;
        console.log(this.tableData);
      })
      .catch(e => {
          console.log(e);
      })
    }
  }
};
</script>
<style>
</style>
