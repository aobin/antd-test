import {expect} from "chai";

import antSortTableReducer from "../../js/reducers/AntSortTableReducer";
import {setAgeSort,clearFilters} from "../../js/actions/AntSortTableAction"

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
                     clearFilters(),
                     setAgeSort()
                 ];
                 const finalState = actions.reduce(antSortTableReducer, undefined);
                 console.log("finalState 2",finalState);
                 expect(finalState.sortedInfo.columnKey).to.equal("age1");

             });

            /* it("test action creator", ()=> {
                 let id = v1();
                 let actions = [
                     addRoom({id,name:"1",owner:"aobin1"}),
                     addRoom({name:"2",owner:"aobin2"}),
                     addRoom({name:"3",owner:"aobin3"}),
                     removeRoom({id,owner:"aobin1"})

                 ];
                 const finalState = actions.reduce(coreReducer, undefined);
                 expect(finalState.get("rooms").size).to.equal(2);
                 expect(finalState.getIn(["rooms", "0", "owner"])).to.equal("aobin2");

             });*/

         }
);



