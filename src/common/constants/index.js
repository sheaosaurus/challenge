export const USERGROUPS = {
  ADMIN: "ADMIN",
  RETAIL: "RETAIL"
};

export const USERGROUPLIST = [...Object.values(USERGROUPS)];

export const PERMISSIONS = {
  ALL: "ALL",
  LINE_CHART: "Line Chart",
  PIE_CHART: "Pie Chart",
  BAR_CHART: "Bar Chart",
  NEWS: "NEWS",
  SALES: "SALES"
};

export const PERMISSION_TYPES_LIST = [...Object.values(PERMISSIONS)];

export const PERMISSION_GROUPS = {
  ADMIN: [PERMISSIONS.ALL],
  RETAIL: [PERMISSIONS.LINE_CHART, PERMISSIONS.PIE_CHART, PERMISSIONS.BAR_CHART]
};

export const DEFAULT_PERMISSIONS = {
  ADMIN: PERMISSION_GROUPS.ADMIN,
  RETAIL: PERMISSION_GROUPS.RETAIL
};

export const defaultArray = [];
export const defaultObject = {};
export const defaultString = "";
