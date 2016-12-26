import {expect} from "chai";

import {Items} from "../../js/components/Items";
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {mount} from "enzyme";


describe("Items test with TestUtils", ()=>
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

describe("Items test with Enzyme", ()=>
         {
             let props;
             let antPaginationReducer;
             let items;
             /*beforeEach
             (()=>
              {
                  antPaginationReducer = {data:[{title:"aobin"},{title:"aobin1"}]};
                  props={
                      antPaginationReducer:antPaginationReducer
                  };
                  items = mount(<Items {...props} />);
              }
             );*/

             antPaginationReducer = {data:[{title:"aobin"},{title:"aobin1"}]};
             props={
                 antPaginationReducer:antPaginationReducer
             };
             items = mount(<Items {...props} />);

             it("Items TEST", ()=>
             {
                 expect(items.find("section").length).to.equal(props.antPaginationReducer.data.length);
             });

             it("Items test Text", ()=>
             {
                 expect(items.find("span").at(0).text()).to.equal(" Likes");
                 expect(items.find("span").at(1).text()).to.equal("  Comments");
             });

         }
);

