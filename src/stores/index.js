import CatStore from "./CatStore";

export default class RootStore {
  constructor() {
    this.catStore = new CatStore(this);
  }
}
