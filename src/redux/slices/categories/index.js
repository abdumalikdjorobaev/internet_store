import { Dispatch, createSlice } from "@reduxjs/toolkit";
import instance, { token } from '../../../api/axios_config'

const initialState = {
    error: false,
    loading: false,
    results: null,
};

const URL = 'category/'

const categorySlice = createSlice({
    name: "category",
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
        addItem: (state, { payload }) => {
            state.results.push(payload);
        },
    },
});

export const { setItem, setError, addItem } = categorySlice.actions;
export default categorySlice.reducer;

export function getCategory() {
    return async (dispatch) => {
        instance
            .get(URL)
            .then((response) => {
                dispatch(setItem(response.data))
            })
            .catch((er) => {
                dispatch(setError(er.response?.data))
            });
    };
}

export function getCategoryUrl(url) {
    return async (dispatch) => {
        instance
            .get(url,{
                headers: {
                    Authorization: `Token ${token}`,
                }
            })
            .then((response) => {
                dispatch(setItem(response.data))
            })
            .catch((er) => {
                dispatch(setError(er.response?.data))
            });
    };
}

export function addCategory(data) {
    return async (dispatch) => {
        instance
            .post(URL, data, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            .then((response) => {
                dispatch( addItem(response.data))
            })
            .catch((er) => {
                dispatch(setError(er.response?.data))
            });
    };
}



