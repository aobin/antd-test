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
                 let questionElements = TestUtils.scryRenderedDOMComponentsWithTag(doc, 'section');

                 expect(questionElements.length).to.equal(props.antPaginationReducer.data.length);
             });

         }
);



