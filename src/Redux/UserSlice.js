import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../userData";



const userSlice = createSlice({
    name: "users",
    initialState: userData,
    reducers: {

        deleteUser: (state, action) => {
            return state.filter((arrow) => arrow.id !== action.payload);

        },

        addUser: (state, action) => {
            state.unshift(action.payload);

        },

        updateUser: (state, action) => {
            state.map((user) => {
                if (user.id == action.payload.id) {
                    user.name = action.payload.name
                    user.profile = action.payload.profile
                    user.roll = action.payload.roll
                    user.join = action.payload.join
                }
            })


        }
    }
})

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;