import { combineReducers } from "redux";

import auth from "./authReducer";
import permissions from "./permissionsReducer";
import users from "./usersReducer";

export default combineReducers({ auth, permissions, users });
