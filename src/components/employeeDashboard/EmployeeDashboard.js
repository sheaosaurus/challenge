import React from "react";
import { connect } from "react-redux";
import { LineChart } from "../../containers/chart/lineChart/LineChart";
import { PieChart } from "../../containers/chart/pieChart/PieChart";
import { BarChart } from "../../containers/chart/barChart/BarChart";
import {
  getDefualtUserPermissions,
  getDefaultRenderedOrder,
  getOverridenRenderedOrder
} from "../../store/selectors";
import { PERMISSIONS } from "./../../common/constants/index";

/* CSS */
import Typography from "@material-ui/core/Typography";

const buildPermissbleComponents = permissions => {
  const chartComponents = {};
  if (permissions.includes(PERMISSIONS.LINE_CHART))
    chartComponents[PERMISSIONS.LINE_CHART] = <LineChart />;
  if (permissions.includes(PERMISSIONS.PIE_CHART))
    chartComponents[PERMISSIONS.PIE_CHART] = <PieChart />;
  if (permissions.includes(PERMISSIONS.BAR_CHART))
    chartComponents[PERMISSIONS.BAR_CHART] = <BarChart />;
  return chartComponents;
};

const buildPermissionsRenderOrder = (chartComponents, renderOrderToUse) => {
  const newOrder = [];
  renderOrderToUse.forEach(chart => {
    if (chart === PERMISSIONS.LINE_CHART)
      newOrder.push(chartComponents[PERMISSIONS.LINE_CHART]);
    if (chart === PERMISSIONS.PIE_CHART)
      newOrder.push(chartComponents[PERMISSIONS.PIE_CHART]);
    if (chart === PERMISSIONS.BAR_CHART)
      newOrder.push(chartComponents[PERMISSIONS.BAR_CHART]);
  });
  return newOrder;
};

const renderDashboard = (permissions, defaultOrder, overriddenOrder) => {
  const chartComponents = buildPermissbleComponents(permissions);
  const renderOrderToUse = overriddenOrder.length
    ? overriddenOrder
    : defaultOrder;
  const renderedOrder = buildPermissionsRenderOrder(
    chartComponents,
    renderOrderToUse
  );

  const toRender = renderedOrder.map((comp, i) => (
    <div key={`${renderOrderToUse[i]}`}>{comp}</div>
  ));

  return (
    <div>
      <Typography variant="subtitle2">Dashboard</Typography>
      {toRender}
    </div>
  );
};

export const EmployeeDashboard = ({
  currentUser,
  permissions,
  defaultOrder,
  overriddenOrder
}) => {
  return (
    <div>
      <Typography variant="h4">Current User: {currentUser}</Typography>
      <br />
      {renderDashboard(permissions, defaultOrder, overriddenOrder)}
    </div>
  );
};

const mapStateToProps = (state, { currentUser }) => ({
  permissions: getDefualtUserPermissions(state, currentUser),
  defaultOrder: getDefaultRenderedOrder(state),
  overriddenOrder: getOverridenRenderedOrder(state)
});

export default connect(mapStateToProps)(EmployeeDashboard);
