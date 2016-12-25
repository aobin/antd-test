import {expect} from "chai";

import {Items} from "../../js/components/Items";
import React from 'react';
import TestUtils from 'react-addons-test-utils';


describe("Items", ()=>
         {
             let props;
             let antPaginationReducer;
             beforeEach
             (()=>
              {
                  antPaginationReducer = {data:[{title:"aobin"},{title:"aobin1"}]};
                props={
                    antPaginationReducer:antPaginationReducer
                };
              }
             );

             it("Items TEST", ()=>
             {
                 let doc = TestUtils.renderIntoDocument(<Items {...props} />);
                 let sections = TestUtils.scryRenderedDOMComponentsWithTag(doc, 'section');
                 console.log(sections);
                 console.log("id",sections[0].id,"class",sections[0].className);
                 expect(sections.length).to.equal(props.antPaginationReducer.data.length);
             });

         }
);



