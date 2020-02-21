import React from "react";
import { FormCheckBox } from "../../components/forms/checkbox/checkbox";

const isPermissionTypeChecked = (permissionType, permissions) =>
  permissions.includes(permissionType);

export const generatePermssionTypes = (
  permissionTypesList,
  permissions,
  handlePermissionTypeClick
) => {
  return (
    permissionTypesList.length &&
    permissionTypesList.map(permissionType => {
      const isChecked = isPermissionTypeChecked(permissionType, permissions);

      return (
        <FormCheckBox
          key={permissionType}
          isChecked={isChecked}
          value={permissionType}
          onClick={handlePermissionTypeClick}
        />
      );
    })
  );
};

export const generateUserCheckboxes = (userGroupList, handleUserGroupCheck) => {
  return (
    userGroupList.length &&
    userGroupList.map(user => (
      <FormCheckBox key={user} value={user} onClick={handleUserGroupCheck} />
    ))
  );
};
