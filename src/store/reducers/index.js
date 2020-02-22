import { combineReducers } from "redux";

import auth from "./authReducer";
import permissions from "./permissionsReducer";
import users from "./usersReducer";
import renderOrder from "./renderOrderReducer";

export default combineReducers({ auth, permissions, renderOrder, users });
