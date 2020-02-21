import React from "react";
import { connect } from "react-redux";
import { LineChart } from "../../containers/chart/lineChart/LineChart";
import { PieChart } from "../../containers/chart/pieChart/PieChart";
import { BarChart } from "../../containers/chart/barChart/BarChart";
import { getDefualtUserPermissions } from "../../store/selectors";
import { PERMISSIONS } from "./../../common/constants/index";

/* CSS */
import Typography from "@material-ui/core/Typography";

const renderDashboard = permissions => {
  return (
    <div>
      <Typography variant="subtitle2">Dashboard</Typography>
      {permissions.includes(PERMISSIONS.LINE_CHART) && <LineChart />}
      {permissions.includes(PERMISSIONS.PIE_CHART) && <PieChart />}
      {permissions.includes(PERMISSIONS.BAR_CHART) && <BarChart />}
    </div>
  );
};

export const EmployeeDashboard = ({ currentUser, permissions }) => {
  return (
    <div>
      <Typography variant="h4">Current User: {currentUser}</Typography>
      <br />
      {renderDashboard(permissions)}
    </div>
  );
};

const mapStateToProps = (state, { currentUser }) => ({
  permissions: getDefualtUserPermissions(state, currentUser)
});

export default connect(mapStateToProps)(EmployeeDashboard);
