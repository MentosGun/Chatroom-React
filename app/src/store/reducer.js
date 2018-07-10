/*
 * Consts
 */
const VIEW_CHANGE = 'VIEW_CHANGE';


/*
 * Initial state
 */
const initialState = {
  logged: true,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case VIEW_CHANGE: {
      return {
        ...state,
        logged: !state.logged,
      };
    }

    default:
      return state;
  }
};


/*
 * Action creators
 */
export const switchView = () => ({
  type: VIEW_CHANGE,
});
