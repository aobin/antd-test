/*import {expect} from "chai";*/
import antSortTableReducer from "../../js/reducers/AntSortTableReducer";
import {setAgeSort, clearFilters} from "../../js/actions/AntSortTableAction";

describe("AntSortTableReducer", () => {
        it("AntSortTableReducer with direct actions", () => {
                let actions = [setAgeSort()];
                 const finalState = actions.reduce(antSortTableReducer,undefined);
                 console.log("finalState",finalState);
                 expect(finalState.sortedInfo.columnKey).toEqual("age");

            }
        );

        it("AntSortTableReducer with action functions", () => {
                let actions = [
                    clearFilters(),
                    setAgeSort()
                ];
                const finalState = actions.reduce(antSortTableReducer,undefined);
                console.log("finalState 2", finalState);
                expect(finalState.sortedInfo.columnKey).toEqual("age1");

            }
        );

    }
);



