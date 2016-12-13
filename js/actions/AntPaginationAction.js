import $ from "jquery";

export const AntPaginationActionType=
    {
        CHANGE_PAGE:"CHANGE_PAGE",
        LOAD_FEED_DOCUMENT_FROM_SERVER:"LOAD_FEED_DOCUMENT_FROM_SERVER",
        LOAD_DATA:"LOAD_DATA"
    };

export function changePage(currentPage)
{
    return {type:AntPaginationActionType.CHANGE_PAGE,currentPage:currentPage};
}


export function loadData(returnedData)
{
    return {type:AntPaginationActionType.LOAD_DATA, returnedData:returnedData};
}

export function loadFeedDocumentFromServer(url,pageSize,currentPage)
{
    console.log("loadFeedDocumentFromServer, url:"+url+"    limit: "+pageSize+"   offset: "+currentPage);

    return (dispatch)=>
    {
        return $.ajax
        (
            {
                url: url,
                jsonp:'callback',
                async:false,
                data: {limit:pageSize, offset:currentPage},
                dataType:'jsonp',
                type: 'GET',

                success: data =>
                {
                    console.log("loadFeedDocumentFromServer success data: ",data);
                    let responseData = {data: data.feedDocument.feedItems, total: data.meta.totalCount};
                    dispatch(loadData(responseData));
                    dispatch(changePage(currentPage));
                },

                error: (xhr, status, err) =>
                {
                    console.error(url, status, err.toString());
                }
            }
        );
    }
}
