import axios from 'axios';

export default function fetchBlogData() {
  return axios({
    method: 'get',
    url: 'https://medium.com/@jerrythimothy/latest?format=json'
  });
}
