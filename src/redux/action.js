import { FILTER_EXPLICIT, GET_DATA, SORT_DATE_ASC, SORT_DATE_DESC, SORT_TITLE_ASC, SORT_TITLE_DESC } from "./actionTypes.js";


export const getData = (payload) => ({
    type: GET_DATA,
    payload
});

export const sortTitleAsc = (payload) => ({
    type: SORT_TITLE_ASC,
    payload
});
export const sortTitleDesc = (payload) => ({
    type: SORT_TITLE_DESC,
    payload
});
export const sortDateAsc = (payload) => ({
    type: SORT_DATE_ASC,
    payload
});
export const sortDateDesc = (payload) => ({
    type: SORT_DATE_DESC,
    payload
});

export const filterExplicit = (payload) => ({
    type: FILTER_EXPLICIT,
    payload
});