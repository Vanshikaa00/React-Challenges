export const initialState = [];
export function chatReducer(state, action) {
  switch (action.type) {
    case "ADD_USER_MSG":
      return [
        ...state,
        {
          timestamp: Date.now(),
          text: action.payload,
          type: "YOU",
        },
      ];

    case "ADD_BOT_MSG":
      return [
        ...state,
        {
          timestamp: Date.now(),
          text: action.payload,
          type: "BOT",
        },
      ];

    case "CLEAR_MESSAGES":
      return [];
    default:
      return state;
  }
}
