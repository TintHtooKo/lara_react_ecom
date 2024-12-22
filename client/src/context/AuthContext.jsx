import axios from "axios";
import { createContext, useEffect, useReducer } from "react";


const AuthContext = createContext();

const AuthReducer = (state,action)=>{
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem('user',JSON.stringify(action.payload))
            localStorage.setItem("authToken", action.payload.token);
            return{user: action.payload}
        case "LOGOUT":
            localStorage.removeItem('user')
            localStorage.removeItem("authToken");
            return { user: null, cartcount: 0 };
        case "SET_CART_COUNT":
            return { ...state, cartcount: action.payload };
        default:
            return state;
    }
}

const AuthContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AuthReducer,{
        user:null,
        cartcount: 0,
    })
    useEffect(()=>{
        const fetchUser = async()=>{
            try {
                const token = localStorage.getItem('authToken')
                if(token){
                    const res = await axios.get(import.meta.env.VITE_BACKEND_URL+'/user',{
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    if(res.status === 200){
                        const user = res.data.user
                        const cartRes = await axios.get(
                            import.meta.env.VITE_BACKEND_URL + "/cart/count",
                            {
                              headers: {
                                Authorization: `Bearer ${token}`,
                              },
                            }
                          );
                        dispatch({type:"LOGIN",payload:{user,token}})
                        dispatch({
                            type: "SET_CART_COUNT",
                            payload: cartRes.data.count || 0,
                          });
                    }else{
                        dispatch({type:"LOGOUT"})
                    }
                }else{
                    dispatch({type:"LOGOUT"})
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                dispatch({type:"LOGOUT"})
            }
        }
        fetchUser()
    },[])
    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthContextProvider}