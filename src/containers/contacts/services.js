import axios from 'axios';

export default function fetchContactData() {
  return axios({
    method: 'get',
    url: 'resources/contact.json',
  });
}
