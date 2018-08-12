import { FETCH_POSTS, NEW_POST } from './Types';

export function fetchPosts(){
    console.log('fetching post');
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>dispatch({
            type: FETCH_POSTS,
            payload: data
        }));
    }
}

export const createPost = (postData) => dispatch => {
    console.log('new post action');
    fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(res=> res.json())
            .then(data=>dispatch({
                type: NEW_POST,
                payload: data
            }));
};