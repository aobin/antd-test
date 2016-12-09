import {AntSortTableActionType} from "../actions/AntSortTableAction";


export const defaultAntSortTableState=
    {
        filteredInfo: null,
        sortedInfo: null
    };

function antSortTableReducer(state=defaultAntSortTableState, action)
{
    switch(action.type)
    {
        case AntSortTableActionType.CLEAR_ALL:
            return {filteredInfo: null, sortedInfo: null};
        case AntSortTableActionType.CLEAR_FILTERS:
            return {...state,filteredInfo: null};
        case AntSortTableActionType.SET_AGE_SORT:
            console.log("in reducer set age sort,action is:"+action);
            return {...state,
                sortedInfo: {
                order: 'descend',
                columnKey: 'age'
                            }
            };
        case AntSortTableActionType.HANDLE_CHANGE:
            console.log("reducer HANDLE_CHANGE, action is: ",action);
            return {...state,filteredInfo:action.filteredInfo,sortedInfo:action.sortedInfo};
    }
    return state;
}

export default antSortTableReducer;
