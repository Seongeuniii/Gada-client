import { createSlice } from '@reduxjs/toolkit';

export interface PlanDetail {
    id: number;
    day: number;
    sequence: number;
    name: string;
    address: string;
    longitude: string;
    latitude: string;
    description: string;
    cost: number;
    category: string;
}

export interface Plan {
    setupDay: number;
    planList: Array<PlanDetail>;
}

const initialState: Plan = {
    setupDay: 1,
    planList: [],
};

const planDetailSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        initializeData(state: Plan, action) {
            const { initData } = action.payload;
            state.planList = [...initData];
        },
        update(state, action) {
            const { list } = action.payload;
            state.planList = [...list];
        },
    },
});

const { reducer, actions } = planDetailSlice;

export const { initializeData, update } = actions;
export default reducer;