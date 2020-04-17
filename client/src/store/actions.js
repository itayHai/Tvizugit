export const CHANGED_SORT = 'CHANGED_SORT';

export function changeSort(sortBy){
    return {
        type: CHANGED_SORT,
        payload: sortBy
    }
}

