import {AntPaginationActionType} from "../actions/AntPaginationAction";


export const defaultAntPaginationState=
    {
        currentPage:1,
        pageSize:2,
        url:"http://localhost:8080/feedItems",
        total:0,
        data:[]
    };

function antPaginationReducer(state=defaultAntPaginationState, action)
{
    switch(action.type)
    {
        case AntPaginationActionType.CHANGE_PAGE:
            console.log("in reducer CHANGE_PAGE,action is:",action);
            return {...state,   currentPage:action.currentPage    };

        case AntPaginationActionType.LOAD_DATA:
            console.log("in reducer LOAD_DATA,action is:",action);
            return {...state,   total: action.returnedData.total, data: action.returnedData.data  };
    }
    return state;
}

export default antPaginationReducer;
