import { createSlice } from "@reduxjs/toolkit";
import signsService from "../app/services/signs.service";
const signsSlice = createSlice({
    name: "signs",
    initialState: {
        entities: null,
        isLoading: true,
        CurrentSignisLoading: true,
        error: null,
        lastFetch: null,
        size: 1,
        currentSing: null,
    },

    reducers: {
        signsRequested: state => {
            state.isLoading = true;
        },
        currentSignsRequested: state => {
            state.CurrentSignisLoading = true;
        },
        signsReceived: (state, action) => {
            state.entities = action.payload.list;
            state.size = action.payload.size;
            state.isLoading = false;
        },
        signsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        currentSignsReceived: (state, action) => {
            state.currentSing = action.payload;
            state.CurrentSignisLoading = false;
        },
        signDeleted: (state, action) => {
            state.CurrentSignisLoading = false;
        },
        signUpdated: (state, action) => {
            state.CurrentSignisLoading = false;
            const id = action.payload._id;
            const index = state.entities.findIndex(sign => sign._id === id);
            state.entities[index] = action.payload;
        },
    },
});

const { reducer: signsReducer, actions } = signsSlice;
const {
    signsRequested,
    signsReceived,
    signsRequestFailed,
    currentSignsRequested,
    currentSignsReceived,
    signDeleted,
    signUpdated,
} = actions;
export const loadSigns =
    (page, sort, direction, filter) => async (dispatch, getState) => {
        dispatch(signsRequested);
        try {
            const { content } = await signsService.get(
                page,
                sort,
                direction,
                filter
            );
            dispatch(signsReceived(content));
        } catch (error) {
            dispatch(signsRequestFailed(error.message));
        }
    };

export const loadCurrentSign = id => async (dispatch, getState) => {
    dispatch(currentSignsRequested);
    try {
        const { content } = await signsService.getCurrent(id);
        dispatch(currentSignsReceived(content));
    } catch (error) {
        dispatch(signsRequestFailed(error.message));
    }
};

export const updeteSign = (id, update) => async (dispatch, getState) => {
    dispatch(currentSignsRequested);
    try {
        const { content } = await signsService.patch(id, update);
        dispatch(signUpdated(content));
    } catch (error) {
        dispatch(signsRequestFailed(error.message));
    }
};

export const addSign = addDate => async (dispatch, getState) => {
    dispatch(currentSignsRequested);
    try {
        const { content } = await signsService.put(addDate);
        dispatch(currentSignsReceived(content));
    } catch (error) {
        dispatch(signsRequestFailed(error.message));
    }
};

export const deleteSign = (id, data) => async (dispatch, getState) => {
    dispatch(currentSignsRequested);
    try {
        const { content } = await signsService.delele(id, data);
        dispatch(signDeleted(content));
    } catch (error) {
        dispatch(signsRequestFailed(error.message));
    }
};

export const getSignsList = () => state => {
    return state.signs.entities;
};
export const getCurrentSign = () => state => {
    return state.signs.currentSing;
};
export const getListSize = () => state => {
    return state.signs.size;
};
export const getSignsLoadingStatus = () => state => state.signs.isLoading;
export const getCurrentSignsLoadingStatus = () => state =>
    state.signs.CurrentSignisLoading;

export default signsReducer;
