import axios from 'axios';
import * as _ from 'lodash';

const pending: any[] = [];

const ServerRequest = {
    request: (httpMethod: any, args: any[]) => {
        const endPoint = args[0];
        // const url = `${process.env.REACT_APP_API_URL}${endPoint}` || '';
        const url = `https://jsonplaceholder.typicode.com${endPoint}`;
        const cancel = axios.CancelToken.source();

        const opts = {
            cancelToken: cancel.token,
            headers: {
                // Authorization: localStorage.getItem('token'),
            },
            method: httpMethod,
            url,
            ...(args[2] || {}),
        };
        if (args[1]) {
            if (httpMethod === 'get') {
                opts.params = args[1];
            } else {
                opts.data = args[1];
            }
        }

        pending.push(cancel);
        return axios(opts)
            .then((res) => {
                pending.splice(pending.indexOf(cancel), 1);
                return res.data;
            })
            .catch((err) => {
                pending.splice(pending.indexOf(cancel), 1);
                if (axios.isCancel(err)) {
                    console.log('err');
                } else {
                    throw err;
                }
            });
    },
    get: (...args: any[]) => {
        return ServerRequest.request('get', args);
    },
    post: (...args: any[]) => {
        return ServerRequest.request('post', args);
    },
    put: (...args: any[]) => {
        return ServerRequest.request('put', args);
    },
    patch: (...args: any[]) => {
        return ServerRequest.request('patch', args);
    },
    delete: (...args: any[]) => {
        return ServerRequest.request('delete', args);
    },
    errorHandler: (error: any) => {
        if (_.get(error, 'response.status') === 401) {
            const pathname = window.location.hash ? window.location.hash.replace('#', '') : '';
            return {
                payload: pathname,
                type: 'UNAUTHORIZED',
            };
        } else {
            return false;
        }
    },
};
export default ServerRequest;
