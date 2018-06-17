import axios from "axios";

export default function fetchDog() {
    return axios({
      method: "get",
      url: "https://dog.ceo/api/breeds/image/random"
    });
  }