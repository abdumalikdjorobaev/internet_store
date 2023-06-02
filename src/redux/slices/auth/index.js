import { Dispatch, createSlice } from "@reduxjs/toolkit";
import instance from '../../../api/axios_config'

const initialState = {
    error: false,
    loading: false,
    results: null,
};

const URL = 'auth/login/'

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setItem: (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.results = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
    },
});

export const { setItem, setError } = authSlice.actions;
export default authSlice.reducer;

export function Login(data) {
    return async (dispatch) => {
        instance
            .post(URL, data)
            .then((response) => {
                dispatch(setItem(response.data))
                localStorage.setItem('token', response.data.token)
                window.location.replace('/')
            })
            .catch((er) => {
                dispatch(setError(er.response?.data))
            });
    };
}

export function Regis(data) {
    return async (dispatch) => {
        instance
            .post('auth/register/', data)
            .then((response) => {
                dispatch(setItem(response.data))
                localStorage.setItem('token', response.data.token)
                window.location.replace('/')
            })
            .catch((er) => {
                dispatch(setError(er.response?.data))
            });
    };
}




