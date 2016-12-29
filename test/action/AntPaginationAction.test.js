import configureStore from 'redux-mock-store'
import {changePage,loadData,loadFeedDocumentFromServer} from "../../js/actions/AntPaginationAction";
import thunk from 'redux-thunk';
import {testResponse} from "../../js/data/testResponse";
/*import {jasmine.Ajax} from "jasmine-ajax";*/
import $ from "jquery";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe("AntPaginationAction", ()=>
         {
             let initialState,store;
             beforeEach
             (()=>
              {
                  // Initialize mockstore with empty state
                  initialState = {}
                  store = mockStore(initialState)
              }
             );

             it('AntPaginationAction:changePage', () =>
             {
                 // Dispatch the action
                 store.dispatch(changePage(1));

                 // Test if your store dispatched the expected actions
                 const actions = store.getActions();
                 const expectedPayload = { type: 'CHANGE_PAGE', currentPage: 1 }
                 expect(actions).toEqual([expectedPayload])
             });

             it('AntPaginationAction:loadData', () =>
             {
                 // Dispatch the action
                 store.dispatch(loadData(1));

                 // Test if your store dispatched the expected actions
                 const actions = store.getActions();
                 const expectedPayload = { type: 'LOAD_DATA', returnedData: 1 };
                 expect(actions).toEqual([expectedPayload])
             });

             it('AntPaginationAction:loadFeedDocumentFromServer success', () =>
             {
                 spyOn($, 'ajax').and.callFake(
                     function (req) {
                         var d = $.Deferred();
                         d.resolve(testResponse);
                         return d.promise();
                     });
                 store.dispatch(loadFeedDocumentFromServer("123",1,2));
                 const actions = store.getActions();
                 const expectedPayload = { type: 'CHANGE_PAGE', currentPage: 2 };
                 expect(actions[1]).toEqual(expectedPayload);

             });

             it('AntPaginationAction:loadFeedDocumentFromServer fail', () =>
             {
                 spyOn($, 'ajax').and.callFake(function (req) {
                     var d = $.Deferred();
                     d.reject("failed");
                     return d.promise();
                 });
                 store.dispatch(loadFeedDocumentFromServer("123",1,2));
             });
         }
);
