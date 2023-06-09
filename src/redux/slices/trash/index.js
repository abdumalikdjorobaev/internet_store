import { Dispatch, createSlice } from "@reduxjs/toolkit";
import instance, { token } from '../../../api/axios_config'

const initialState = {
    error: false,
    loading: false,
    results: [],
};

const URL = 'orders/'

const trashSlice = createSlice({
    name: "trash",
    initialState,
    reducers: {
        setItem: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.results = payload;
        },
        addItemOrder: (state, { payload }) => {
            state.results.push(payload);
        },
        removeItemOrder: (state, { payload }) => {
            console.log(payload);
            state.results = state.results.filter((item) => item.id !== payload);
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
    },
});

export const { setItem, setError, addItemOrder, removeItemOrder } = trashSlice.actions;
export default trashSlice.reducer;



export function addTrash(data, setSendItems) {
    return async (dispatch) => {
        instance
            .post(URL, data, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            .then((response) => {
                dispatch(setItem([]))
                setSendItems([])
            })
            .catch((er) => {
                dispatch(setError(er.response?.data))
            });
    };
}



