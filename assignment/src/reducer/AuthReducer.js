const initialState = {
    isAuthenticated: false,
    user: null,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                isAuthenticated: true,
                user: action.payload,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default AuthReducer;
