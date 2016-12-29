/*import {expect} from "chai";*/
import {AntPagination} from "../../js/components/AntPagination";
import React from 'react';
import {shallow,mount} from "enzyme";
/*import sinon from "sinon";*/
/*import jest from "jest";*/

describe("AntPagination Unit Test", ()=>
         {
             let antPaginationReducer;
             let antPagination;
             let loadFeedDocumentFromServer;
             let setAgeSort;

             beforeEach(() =>
            {
                 loadFeedDocumentFromServer=jasmine.createSpy('loadFeedDocumentFromServer');
                 setAgeSort = jasmine.createSpy("setAgeSort");
                 antPaginationReducer = {url:"123",currentPage:10,pageSize:1,total:100};
                 antPagination = shallow(<AntPagination antPaginationReducer={antPaginationReducer}  loadFeedDocumentFromServer={loadFeedDocumentFromServer} setAgeSort={setAgeSort} />);
                 console.log("==="+JSON.stringify(antPaginationReducer)+"====");
             });

             it("AntPagination: div created and loadFeedDocumentFromServer is called when created", ()=>
             {
                 expect(antPagination.find("div").length).toEqual(1);
                 expect(loadFeedDocumentFromServer).toHaveBeenCalled();

             });

             it("AntPagination: simulate onChange event", ()=>
             {
                 let pagination=antPagination.find("Pagination")
                 expect(pagination.length).toEqual(1);
                 pagination.simulate('change');
                 expect(loadFeedDocumentFromServer).toHaveBeenCalled();
                 expect(setAgeSort).toHaveBeenCalled();
             });

         }
);

