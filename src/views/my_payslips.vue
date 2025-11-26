<template>
  <v-row>
    <v-col cols="12">
      <v-card class="border mt-4 rounded-lg" elevation="0">
        <v-toolbar color="primary">
          <v-tabs
            v-model="selected_tab"
            color="white"
            align-tabs="start"
            slider-color="#f78166"
          >
            <v-tab value="usd" :color="selected_tab == 'usd' ? '#f78166' : ''">
              USD
            </v-tab>
            <v-tab value="eur" :color="selected_tab == 'eur' ? '#f78166' : ''">
              EUR
            </v-tab>
          </v-tabs>
        </v-toolbar>
        <v-card-text>
          <div class="d-flex justify-space-between">
            <v-breadcrumbs :items="['Payslips', '2025']" class="font-weight-bold">
              <template v-slot:divider>
                <v-icon icon="mdi-chevron-right"></v-icon>
              </template>
            </v-breadcrumbs>
            <v-btn
              density="default"
              icon="mdi-open-in-new"
              color="primary"
              size="small"
              @click="handleModal(true)"
            ></v-btn>
          </div>
        </v-card-text>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="selected_cuurency_items"
            item-value="period"
            hide-default-footer="true"
          >
            <template v-slot:item.period="{ internalItem, isExpanded, toggleExpand }">
              <p class="text-danger">{{ formatDate(internalItem.columns.period) }}</p>
            </template>
            <template v-slot:item.expand="{ internalItem, isExpanded, toggleExpand }">
              <v-icon @click="toggleExpand(internalItem)">{{
                isExpanded(internalItem) ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </template>

            <template v-slot:item.gross_salary="{ internalItem }">
              <v-chip>{{
                `${internalItem.columns.gross_salary} ${internalItem.raw.currency} `
              }}</v-chip>
            </template>

            <template v-slot:item.net_salary="{ internalItem }">
              <v-chip color="success">{{
                `${internalItem.columns.net_salary} ${internalItem.raw.currency} `
              }}</v-chip>
            </template>

            <template v-slot:item.action="{ internalItem, isExpanded, toggleExpand }">
              <v-icon @click="toggleExpand(internalItem)">mdi-dots-vertical</v-icon>
            </template>

            <template v-slot:expanded-row="{ columns, item }">
              <tr>
                <td :colspan="columns.length" class="py-2">
                  <v-sheet rounded="lg" border>
                    <iframe
                      src="/0dd95477-5805-4728-bfb4-eaa88aed113a.pdf#toolbar=0&navpanes=0&scrollbar=0"
                      scrolling="no"
                      width="100%"
                      height="500px"
                    ></iframe>
                  </v-sheet>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>

    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      fullscreen
      v-if="dialog"
    >
      <v-toolbar
        class="w-100 d-flex justify-space-between"
        height="80"
        color="white"
        flat
        elevation="0"
        border
      >
        <div class="d-flex align-center ml-5">
          <p class="text-caption text-blue-grey-lighten-1 mr-4">Mercans USA Ltd</p>
          <v-divider vertical></v-divider>
          <div class="ml-4">
            <p class="text-h6 font-weight-bold">Gross / Net Salary Evolution</p>
            <p class="text-caption text-blue-grey-lighten-1">TF209 - Ted Ferguson</p>
          </div>
        </div>
        <v-btn
          class="ml-auto"
          icon="mdi-close"
          color="primary"
          variant="primary"
          @click="handleModal(false)"
        ></v-btn>
      </v-toolbar>
      <v-card>
        <v-row>
          <v-col cols="12">
            <v-img src="/Slot.png"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import payslips from "@/data/payslips.json";
import dateFormat from "dateformat";
import not_found from "../components/commons/not_found.vue";

export default {
  components: { not_found },
  data() {
    return {
      selected_tab: "usd",
      headers: [
        { width: "50px", key: "expand", align: "center", title: "", sortable: false },
        {
          width: "50px",
          key: "period",
          align: "center",
          title: "Period",
          sortable: false,
        },
        {
          width: "350px",
          key: "file",
          align: "center",
          title: "Payslips",
          sortable: false,
        },
        {
          width: "50px",
          key: "gross_salary",
          align: "center",
          title: "Gross Salary",
          sortable: false,
        },
        {
          width: "50px",
          key: "net_salary",
          align: "center",
          title: "Net Salary",
          sortable: false,
        },
        { width: "50px", key: "action", align: "center", title: "", sortable: false },
      ],
      items: [],
      dialog: false,
    };
  },

  computed: {
    selected_cuurency_items() {
      return this.items.filter(
        (val) => val.currency.toLocaleLowerCase() == this.selected_tab.toLocaleLowerCase()
      );
    },
  },

  mounted() {
    let items = [];
    payslips.forEach((element) => {
      items.push({
        period: element.payrollDate,
        file: element.fileAttachment.file.label,
        gross_salary: element.payslipEntries.find((val) => val.key == "GROSS")["amount"],
        net_salary: element.payslipEntries.find((val) => val.key == "NET PAY")["amount"],
        currency: element.payslipEntries[0].currency,
      });
    });
    console.log("items", items);
    this.items = items;
  },
  methods: {
    formatDate(date) {
      let convert_date = new Date(date);
      return dateFormat(convert_date, "mmm yyyy");
    },
    handleModal(value) {
      this.dialog = value;
    },
  },
};
</script>

<style scoped>
.v-tab--selected {
  color: white !important;
  caret-color: rgb(247, 129, 102);
  background: #f59166;
}
.v-data-table__wrapper {
  overflow: visible !important;
}

.v-table__wrapper {
  overflow: visible !important;
}
</style>
