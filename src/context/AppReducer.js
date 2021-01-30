const AppReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FLOOR_ZERO":
      return { ...state, LevelZero: true, LevelOne: false, LevelTwo: false };
    case "UPDATE_FLOOR_ONE":
      return { ...state, LevelZero: false, LevelOne: true, LevelTwo: false };
    case "UPDATE_FLOOR_TWO":
      return { ...state, LevelZero: false, LevelOne: false, LevelTwo: true };
    default:
      return state;
  }
};
export default AppReducer;
