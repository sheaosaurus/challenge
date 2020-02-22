import { setOverrideRenderOrder } from "../routines";
import { DEFAULT_ORDER, defaultArray } from "../../common/constants";

const initialState = {
  defaultOrder: DEFAULT_ORDER,
  overriddenOrder: defaultArray
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case setOverrideRenderOrder.TRIGGER:
      return { ...state, overriddenOrder: payload.value };
    default:
      return state;
  }
}
