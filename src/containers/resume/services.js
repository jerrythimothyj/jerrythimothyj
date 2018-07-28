import axios from 'axios';

export default function fetchResumeData() {
  return axios({
    method: 'get',
    url: 'resources/resume.json',
  });
}
