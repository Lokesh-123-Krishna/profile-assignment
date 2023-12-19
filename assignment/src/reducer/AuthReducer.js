const initialState = {
    isAuthenticated: false,
    user: [], // Initialize as an empty array
    loggedInUser: null,
  };
  
  const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        const { email, password } = action.payload;
        // Assuming action.payload is an object containing email and password
        const foundUser = state.user.find(
          (user) => user.email === email && user.password === password
        );
        if (foundUser) {
          return {
            ...state,
            isAuthenticated: true,
            loggedInUser: { email },
          };
        } else {
          // If user not found, add the logged-in user to the user array
          return {
            ...state,
            isAuthenticated: true,
            user: [...state.user, { email, password }], // Add new user to the array
            loggedInUser: { email },
          };
        }
      case 'LOGOUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  