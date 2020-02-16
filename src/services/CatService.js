import axios from "axios";

const BASE_URL = "https://catfact.ninja";

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json"
  }
});

const CatService = httpClient => {
  const fetchRandomFact = () => {
    return httpClient.get("/fact");
  };

  return {
    fetchRandomFact
  };
};

export default CatService(httpClient);
