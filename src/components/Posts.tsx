import { useEffect } from 'react';

import {
    useAppDispatch,
    useAppSelector,
} from '../store/hooks';

import {
    getPosts,
    selectPosts,
} from '../store/slices/postSlice';

const Posts = () => {
    const dispatch = useAppDispatch();
    const postList = useAppSelector(selectPosts);

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <>
            <h1>Posts</h1>

            {postList.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <div>{item.body}</div>
                </div>
            ))}
        </>
    )
}

export default Posts;
