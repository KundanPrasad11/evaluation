import { FILTER_EXPLICIT, GET_DATA, SORT_DATE_ASC, SORT_DATE_DESC, SORT_TITLE_ASC, SORT_TITLE_DESC } from "./actionTypes.js";

const init = {
    data: []
};


export const reducer = (store = init, { type, payload }) => {
    switch (type) {

        case GET_DATA:
            return { ...store, data: payload };

        case SORT_TITLE_ASC:
            let arr1 = store.data.sort((a, b) => {
                return a.title - b.title;
            });
            return { ...store, data: arr1 };

        case SORT_TITLE_DESC:
            let arr2 = store.data.sort((a, b) => {
                return b.title - a.title;
            });
            return { ...store, data: arr2 };

        case SORT_DATE_ASC:
            let arr3 = store.data.sort((a, b) => {
                return a.date - b.date;
            });
            return { ...store, data: arr3 };

        case SORT_DATE_DESC:
            let arr4 = store.data.sort((a, b) => {
                return b.date - a.date;
            });
            return { ...store, data: arr4 };

        case FILTER_EXPLICIT:
            let arr5 = store.data.filter((e) => {
                return e.id !== payload.id;
            })
            return { ...store, data: arr5 }
        default:
            return { ...store }

    }
}