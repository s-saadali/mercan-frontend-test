<template>
  <v-navigation-drawer :width="238" app>
    <div class="sidebar-toggle-btn">
      <v-icon color="white" class="mt-2">mdi-chevron-left</v-icon>
    </div>
    <v-list class="py-0">
      <v-list-item class="bg-primary" height="76px">
        <div class="d-flex align-center">
          <v-avatar color="white" size="50">HRB</v-avatar>
          <div class="ml-3 text-left">
            <p class="text-caption">Employee</p>
            <p class="text-caption">Self Service</p>
          </div>
        </div>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item height="170px" class="d-block">
        <div>
          <v-avatar color="blue-grey-lighten-4" size="50" class="mt-3"></v-avatar>
          <div class="text-center mt-3">
            <p class="text-subtitle-1 font-weight-bold text-blue-grey-darken-1">
              Boring Company
            </p>
            <p class="font-weight-bold">Mercans Pvt Ltd</p>
          </div>
        </div>
      </v-list-item>
      <div class="d-flex justify-space-between mx-auto mb-3" style="width: 80%">
        <v-icon color="blue-grey-darken-3">mdi-rocket-launch</v-icon>
        <v-icon color="blue-grey-darken-3">mdi-file-document-outline</v-icon>
        <v-icon color="blue-grey-darken-3">mdi-bell-outline</v-icon>
      </div>
      <v-divider color="black" thickness="2"></v-divider>
      <v-list-item
        link
        class="mt-5"
        :to="'/'"
        exact
        exact-path
        :class="$route.name == 'dashboard' ? 'v-list-item--active ponka' : ''"
      >
        <div class="d-flex align-center">
          <v-icon color="blue-grey-darken-3" size="small"
            >mdi-view-dashboard-outline</v-icon
          >
          <p class="ml-3 font-weight-bold text-blue-grey-darken-3 text-caption">
            Dashboard
          </p>
        </div>
      </v-list-item>
      <v-list-item link to="/my_information">
        <div class="d-flex align-center">
          <v-icon color="blue-grey-darken-3" size="small"
            >mdi-account-multiple-outline</v-icon
          >
          <p class="ml-3 font-weight-bold text-blue-grey-darken-3 text-caption">
            My Information
          </p>
        </div>
      </v-list-item>
      <v-list-item link to="/my_payslips">
        <div class="d-flex align-center">
          <v-icon color="blue-grey-darken-3" size="small"
            >mdi-rocket-launch-outline</v-icon
          >
          <p class="ml-3 font-weight-bold text-blue-grey-darken-3 text-caption">
            My Payslips
          </p>
        </div>
      </v-list-item>
      <v-list-item link to="/timesheet">
        <div class="d-flex align-center">
          <v-icon color="blue-grey-darken-3" size="small">mdi-watch-variant</v-icon>
          <p class="ml-3 font-weight-bold text-blue-grey-darken-3 text-caption">
            Timesheet
          </p>
        </div>
      </v-list-item>
      <v-list-item link to="/leaves">
        <div class="d-flex align-center">
          <v-icon color="blue-grey-darken-3" size="small">mdi-airplane</v-icon>
          <p class="ml-3 font-weight-bold text-blue-grey-darken-3 text-caption">Leaves</p>
        </div>
      </v-list-item>
      <v-list-item link to="/benefits">
        <div class="d-flex align-center">
          <v-icon color="blue-grey-darken-3" size="small"
            >mdi-file-document-check-outline</v-icon
          >
          <p class="ml-3 font-weight-bold text-blue-grey-darken-3 text-caption">
            Benefits
          </p>
        </div>
      </v-list-item>
      <v-list-item link to="/documents">
        <div class="d-flex align-center">
          <v-icon color="blue-grey-darken-3" size="small"
            >mdi-text-box-multiple-outline</v-icon
          >
          <p class="ml-3 font-weight-bold text-blue-grey-darken-3 text-caption">
            Documents
          </p>
        </div>
      </v-list-item>
      <v-list-item link to="/organizational_chart">
        <div class="d-flex align-center">
          <v-icon color="blue-grey-darken-3" size="small"
            >mdi-text-box-multiple-outline</v-icon
          >
          <p class="ml-3 font-weight-bold text-blue-grey-darken-3 text-caption">
            Organizational Chart
          </p>
        </div>
      </v-list-item>
      <v-list-item link to="/my_team">
        <div class="d-flex align-center">
          <v-icon color="blue-grey-darken-3" size="small"
            >mdi-account-group-outline</v-icon
          >
          <p class="ml-3 font-weight-bold text-blue-grey-darken-3 text-caption">
            My Team
          </p>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped>
.v-list-item--active {
  width: 95%;
  margin: auto;
  border: 1px solid black;
  border-radius: 12px !important;
  background-color: #ffdfd2 !important;
}
.sidebar-toggle-btn {
  position: absolute;
  top: 17px;
  right: -2px;
  height: 40px;
  width: 22px;
  border: 1px solid white;
  z-index: 999;
  border-radius: 4px;
}
</style>
