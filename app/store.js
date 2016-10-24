import {createStore, combineReducers} from 'redux';
import {activeSection} from './reducers/reducer_main-navigation'
import {posts} from './reducers/reducer-posts'
import visiblePreviews from './reducers/reducer-visible-previews'
import data from '../data/posts.json';


const reducers = combineReducers({
    // Reducers go here
    activeSection,
    posts,
    visiblePreviews

});

//sorting the posts data from newest to oldest

const postsData = data.posts.sort((a, b)=>(Number(b.date) - Number(a.date)));

//initializing the store with the existing posts in the JSON
//and setting the visible posts to be the 3 newest
const persistedState = {
    posts: postsData,
    visiblePreviews: {
        data: postsData.slice(0, 3),
        tracking: {
            firstVisiblePreviewIndex: 0,
            newerPostsAvailable: false,
            olderPostsAvailable: postsData.length > 3,
            currentPage: 1,
            numberOfPages: postsData%3 === 0 ?
                (postsData.length - postsData.length%3)/3 :
                    1+(postsData.length - postsData.length%3)/3
        }
    }
};

const store = createStore(reducers, persistedState);

function logStore(){console.log(store.getState())};

store.subscribe(logStore);

logStore();

export default store;
