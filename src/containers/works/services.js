import axios from 'axios';

export default function fetchWorksData() {
  return axios({
    method: 'get',
    url: 'resources/works.json'
  });
}
