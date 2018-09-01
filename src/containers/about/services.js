import axios from 'axios';

export default function fetchRecommendationsData() {
  return axios({
    method: 'get',
    url: 'resources/recommendations.json'
  });
}
