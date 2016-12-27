import {expect} from "chai";
import {AntPagination} from "../../js/components/AntPagination";
import React from 'react';
import {shallow,mount} from "enzyme";
/*import sinon from "sinon";*/
/*import jest from "jest";*/

describe("AntPagination Unit Test", ()=>
         {
             it("AntPagination: div created", ()=>
             {
                 let props;
                 let antPaginationReducer;
                 let antPagination;

                 antPaginationReducer = {url:"123",currentPage:10,pageSize:1,total:100};
                 props={
                     antPaginationReducer:antPaginationReducer,
                     loadFeedDocumentFromServer:()=>{}
                 };

                 antPagination = shallow(<AntPagination {...props} />);
                 /*expect(antPagination.find("div").length).to.equal(1);*/
                 console.log("antPagination",antPagination);
             });



         }
);

