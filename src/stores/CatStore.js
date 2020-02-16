import { observable, decorate, action } from "mobx";

import CatService from "../services/CatService";

export default class CatStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  fact = "";
  state = "idle";

  fetchNewFact() {
    this.state = "fetching";

    CatService.fetchRandomFact()
      .then(response => {
        this.fact = response.data.fact;
        this.state = "idle";
      })
      .catch(() => {
        this.state = "error";
      });
  }
}

decorate(CatStore, {
  fact: observable,
  state: observable,
  fetchNewFact: action
});
