import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    error: '',
};

export const capsuleSlice = createSlice({
    // Имя, используемое в типах action
    name: 'capsule',
    // Исходное состояние редуктора
    initialState: initialState,
    // call-back функция, используемая для добавления дополнительных редьюссеров
    reducers: {}
});

export default capsuleSlice.reducer;