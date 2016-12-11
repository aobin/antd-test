export const AntPaginationActionType=
    {
        CHANGE_PAGE:"CHANGE_PAGE"
    };

export function changePage(currentPage)
{
    return {type:AntPaginationActionType.CHANGE_PAGE,currentPage:currentPage};
}



