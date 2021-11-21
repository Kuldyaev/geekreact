export const getPicsFromStore = (state) => state.picsReducer;
export const getPics = (state) => getPicsFromStore(state).data;
export const getLoading = (state) => getPicsFromStore(state).isLoading;
export const getError = (state) => getPicsFromStore(state).isError;