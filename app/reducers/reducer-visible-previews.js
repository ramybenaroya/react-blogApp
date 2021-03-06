import {GET_ACTIVE_POSTS} from '../actions/get-active-posts'
import {combineReducers} from 'redux'

//there are tow versions of the same reducer here:
    //the first one has all the logic inside a single reducer (nested objects)
    //the second one seperates the first one in to 2 reducers and usese combineReducers to combine them before exproting
//I still haven't decided which one is better..

//////////////////////////////////////////1.SINGLE REDUCER//////////////////////////////////////////////////////////////////////

// const visiblePreviews = (state = {}, action) => {
//
//     let newFirstPreviewIndex = (action.payload) && action.payload.page * 3 - 3;
//     switch (action.type) {
//         case GET_ACTIVE_POSTS:
//                 return Object.assign({},
//                     state,
//                     {
//                         data: action.payload.posts.slice(newFirstPreviewIndex,
//                             newFirstPreviewIndex +3),
//                         tracking: Object.assign({},state.tracking, {
//                             firstVisiblePreviewIndex : newFirstPreviewIndex,
//                             newerPostsAvailable: newFirstPreviewIndex > 0,
//                             olderPostsAvailable: action.payload.page < state.tracking.numberOfPages,
//                             currentPage: action.payload.page
//                         })
//                     }
//                 );
//
//     }
//     return state;
// };


/////////////////////////////////////////////////2.SEPARATED REDUCERS (combined)/////////////////////////////////////


const data = (state = [], action) => {
    let newFirstPreviewIndex = (action.payload) && action.payload.page * 3 - 3;
    switch (action.type) {
        case GET_ACTIVE_POSTS:
            return action.payload.posts.slice(newFirstPreviewIndex,
                newFirstPreviewIndex + 3);
    }
    return state;
};



const tracking = (state={},action) => {
    let newFirstPreviewIndex = (action.payload) && action.payload.page * 3 - 3;
    switch (action.type) {
        case GET_ACTIVE_POSTS:
            return Object.assign({}, state, {
                firstVisiblePreviewIndex: newFirstPreviewIndex,
                newerPostsAvailable: newFirstPreviewIndex > 0,
                olderPostsAvailable: action.payload.page < state.numberOfPages,
                currentPage: action.payload.page,
                numberOfPages: state.numberOfPages
            })
    }
    return state;
};

const visiblePreviews = combineReducers({
        data, tracking
    }
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default visiblePreviews;