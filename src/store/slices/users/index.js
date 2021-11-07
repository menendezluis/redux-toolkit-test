import {createSlice} from '@reduxjs/toolkit'
//axios
import axios from 'axios'
export const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
    },
    reducers: {
        setUserList: (state, action)=>{
            state.list = action.payload
        }
    },
})

export const { setUserList } = userSlice.actions;
export default userSlice.reducer;



export const fetchAllUsers = () => (dispatch)=> {
    
    axios
    .get("https://reqres.in/api/users?page=1")
    .then(response => {
        dispatch(setUserList(response.data.data))
        
    })
    .catch(error => console.log(error))

}

//como solo se retorna una arrow function se elimina la palabra return debido que va implicita
/*
export const fetchAllUsers = () =>{
    return () =>{

    }
}*/