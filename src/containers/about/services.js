import axios from 'axios';

export function fetchAboutData() {
  return axios({
    method: 'get',
    url: 'resources/about.json'
  });
}

export function fetchRecommendationsData() {
  return axios({
    method: 'get',
    url: 'resources/recommendations.json'
  });
}
