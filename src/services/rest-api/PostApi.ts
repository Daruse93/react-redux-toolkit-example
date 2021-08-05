import ServerRequest from '../ServerRequest';

const PostApi = {
    /** Получение всех записей */
    getPosts() {
        return ServerRequest.get(`/posts`);
    },
};

export default PostApi;
