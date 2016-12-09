export const AntSortTableActionType=
    {
        CLEAR_FILTERS:"CLEAR_FILTERS",
        CLEAR_ALL:"CLEAR_ALL",
        SET_AGE_SORT:"SET_AGE_SORT",
        HANDLE_CHANGE:"HANDLE_CHANGE"
    };

export function clearFilters()
{
    return {type:AntSortTableActionType.CLEAR_FILTERS};
}

export function clearAll()
{
    return {type:AntSortTableActionType.CLEAR_ALL};
}

export function setAgeSort()
{
    return {type:AntSortTableActionType.SET_AGE_SORT};
}

export function handleChange(pagination, filters, sorter)
{
    console.log('Various parameters', pagination, filters, sorter);
    return {type:AntSortTableActionType.HANDLE_CHANGE, filteredInfo: filters, sortedInfo: sorter};
}

