const initialState = {
  email: 'luketevl@gmail.com',
  password: '',
};

const providerReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case 'SET_USER_FULFILLED':
      newState = {
        ...action.payload,
      };
      break;
    default:
      break;
  }
  return newState;
};

export default providerReducer;
