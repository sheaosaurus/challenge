import React from "react";
import { connect } from "react-redux";
import {
  getUserGroupList,
  getPermissionTypesList,
  getToggledUserPermissions,
  getToggledUser
} from "../../store/selectors";
import { setToggledUser, updateUserPermissions } from "../../store/routines";
import {
  generatePermssionTypes,
  generateUserCheckboxes
} from "../../utils/formUtils/checkboxUtils";
import RenderOrder from "./../renderOrder/RenderOrder";

/* CSS */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

export const AdminDashboard = ({
  userGroupList,
  permissionTypesList,
  toggledUserPermissions,
  toggledUser,
  onUserPermissionsUpdate,
  onUserToggle
}) => {
  // Click Handlers
  const handleUserGroupCheck = e => {
    const { value, checked } = e.target;

    if (checked) {
      onUserToggle(value);
    } else {
      onUserToggle("");
    }
  };

  const handlePermissionTypeClick = e => {
    const { value, checked } = e.target;
    onUserPermissionsUpdate(value, checked);
  };

  const generateUserPermissions = permissions => {
    return permissions.length ? (
      permissions.map(permission => (
        <List key={permission}>
          <ListItem>
            <p>{permission}</p>
          </ListItem>
        </List>
      ))
    ) : (
      <h4>No Permissions Selected for User Group</h4>
    );
  };

  return (
    <Container>
      <Typography variant="h4">SuperUser</Typography>
      <br />
      <Typography variant="subtitle2">Users</Typography>
      <Grid>
        <FormGroup>
          {generateUserCheckboxes(userGroupList, handleUserGroupCheck)}
        </FormGroup>
      </Grid>
      {toggledUser && (
        <Grid>
          <Typography variant="subtitle1">Permissions</Typography>
          {generateUserPermissions(toggledUserPermissions)}
          <br />
          <Typography variant="subtitle1">All Permissions</Typography>
          <FormGroup>
            {generatePermssionTypes(
              permissionTypesList,
              toggledUserPermissions,
              handlePermissionTypeClick
            )}
          </FormGroup>
          <Typography variant="subtitle1">Render Order</Typography>
          <RenderOrder />
        </Grid>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  userGroupList: getUserGroupList(state),
  permissionTypesList: getPermissionTypesList(state),
  toggledUserPermissions: getToggledUserPermissions(state),
  toggledUser: getToggledUser(state)
});

const mapDispatchToProps = dispatch => ({
  onUserToggle: user => dispatch(setToggledUser.trigger({ toggledUser: user })),
  onUserPermissionsUpdate: (value, checked) =>
    dispatch(updateUserPermissions.trigger({ value, checked }))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
