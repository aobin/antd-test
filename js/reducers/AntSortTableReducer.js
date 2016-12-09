import {AntSortTableActionType} from "../actions/AntSortTableAction";


export const defaultAntSortTableState=
    {
        filteredInfo: null,
        sortedInfo: null
    };

function antSortTableReducer(state=defaultAntSortTableState, action)
{
    switch(AntSortTableActionType.type)
    {
        case AntSortTableActionType.CLEAR_ALL:
            return {filteredInfo: null, sortedInfo: null};
        case AntSortTableActionType.CLEAR_FILTERS:
            return {...state,filteredInfo: null};
        case AntSortTableActionType.SET_AGE_SORT:
            return {...state,
                sortedInfo: {
                order: 'descend',
                columnKey: 'age'
                            }
            };
        case AntSortTableActionType.HANDLE_CHANGE:
            return {...state,filteredInfo:action.filteredInfo,sortedInfo:action.sortedInfo};
    }
    return state;
}

export default antSortTableReducer;
