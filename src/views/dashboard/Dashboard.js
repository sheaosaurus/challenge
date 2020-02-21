import React from "react";
import AdminDashboard from "./../../components/adminDashboard/AdminDashboard";
import { connect } from "react-redux";
import { getCurrentUser } from "../../store/selectors";
import EmployeeDashboard from "../../components/employeeDashboard/EmployeeDashboard";

/* CSS */
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export const Dashboard = ({ currentUser }) => {
  return (
    <Container>
      <Grid container>
        <Grid item lg={6}>
          <AdminDashboard />
        </Grid>
        <Grid item lg={6}>
          <EmployeeDashboard currentUser={currentUser} />
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps)(Dashboard);
