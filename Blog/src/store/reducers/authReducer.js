const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
        console.log("login Error")

      return {...state,
      authError: 'login failed'
    }
    case "LOGIN_SUCCESS" :
      console.log("login success")
      return {
        ...state,
        authError :null
      }

      case 'SIGN_SUCCESS' :
        console.log('signout')
        return state

        case 'SIGNUP_SUCCESS' :
        console.log('signup_success')
        return {
          ...state,
          authError:null
        }

        case 'SIGNUP_ERROR' :
          console.log("signup error")
          return{
            ...state,
            authError: action.err.message
          }


      default :
      return state
  }
};

export default authReducer;
