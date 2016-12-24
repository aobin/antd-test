import {expect} from "chai";

import antSortTableReducer from "../../js/reducers/AntSortTableReducer";
import {setAgeSort} from "../../js/actions/AntSortTableAction"

describe("AntSortTableReducer", ()=>
         {
             it("AntSortTableReducer with direct actions", ()=>
             {
                 let actions = [
                     {type: "SET_AGE_SORT"}

                 ];
                 const finalState = actions.reduce(antSortTableReducer, undefined);
                 console.log("finalState",finalState);
                 expect(finalState.sortedInfo.columnKey).to.equal("age");

             });

             it("AntSortTableReducer with action functions", ()=>
             {
                 let actions = [
                     setAgeSort()
                 ];
                 const finalState = actions.reduce(antSortTableReducer, undefined);
                 console.log("finalState",finalState);
                 expect(finalState.sortedInfo.columnKey).to.equal("age");

             });



         }
);



