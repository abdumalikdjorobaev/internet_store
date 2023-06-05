import { Dispatch, createSlice } from "@reduxjs/toolkit";
import instance, { token } from '../../../api/axios_config'

const initialState = {
    error: false,
    loading: false,
    results: null,
};

const URL = 'products/'

const productsSlice = createSlice({
    name: "products",
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
        removeItem: (state, {payload}) => {
            state.results = state.results.filter((i) => i.id !== payload)
        }
    },
});

export const { setItem, setError, removeItem } = productsSlice.actions;
export default productsSlice.reducer;

export function getProducts() {
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

export function addProduct(data) {
    console.log(data);
    return async (dispatch) => {
        instance
            .post(URL, data, {
                headers: {
                    Authorization: `Token ${token}`,
                    'Content-Type': 'multipart/form-data'
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

export function removeProduct(id) {
    return async (dispatch) => {
        instance
            .delete(`${URL}/${id}/`, {
                headers: {
                    Authorization: `Token ${token}`,
                }
            })
            .then((response) => {
                dispatch(removeItem(response.data))
            })
            .catch((er) => {
                dispatch(setError(er.response?.data))
            });
    };
}


