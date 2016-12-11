import {AntPaginationActionType} from "../actions/AntPaginationAction";


export const defaultAntPaginationState=
    {
        tex: 0,
        pictureUrl: 0,
        currentPage:1
    };

function antPaginationReducer(state=defaultAntPaginationState, action)
{
    switch(action.type)
    {
        case AntPaginationActionType.CHANGE_PAGE:
            console.log("in reducer CHANGE_PAGE,action is:"+action);
            return {...state,   currentPage:action.currentPage    };
    }
    return state;
}

export default antPaginationReducer;
