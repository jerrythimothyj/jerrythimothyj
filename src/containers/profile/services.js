import axios from 'axios';

export default function fetchProfileData() {
  return axios({
    method: 'get',
    url: 'resources/profile.json',
  });
}
