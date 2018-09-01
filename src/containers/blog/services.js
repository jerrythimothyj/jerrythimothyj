import axios from 'axios';

export default function fetchBlogData() {
  return axios({
    method: 'get',
    url: 'resources/blog.json'
  });
}
