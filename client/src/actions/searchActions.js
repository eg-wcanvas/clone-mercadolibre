import axios from 'axios';
import {
    SEARCH_BY_QUERY,
    SEARCH_ALL,
    SEARCH_BY_CATEGORY
} from '../constants';

export const searchByQuery = (query, page) => (dispatch) => {
    axios.get('http://localhost:3001/api/search?q=' + query + '&page=' + page)
        .then((res) => {
            console.log(res);
            dispatch({
                type: SEARCH_BY_QUERY,
                payload: res.data.results
            })
        }).catch((err) => console.log(err))
};

export const searchByCategory = name => dispatch => {
    axios.get('http://localhost:3001/products/category/' + name)
        .then(res => {
            dispatch({
                type: SEARCH_BY_CATEGORY,
                results: res.data
            })
        })
}
export const searchAll = () => dispatch => {
    axios.get('http://localhost:3001/products')
        .then(res => {
            dispatch({
                type: SEARCH_ALL,
                results: res.data.products
            })
        })
} 