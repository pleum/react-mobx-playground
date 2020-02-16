import React from "react";
import { Provider } from "mobx-react";
import AppStore from "../stores";

import CatFact from "./CatFact";

const store = new AppStore();

const App = () => {
  return (
    <Provider catStore={store.catStore}>
      <div>
        <h1>Cat fact</h1>
      </div>
      <div>
        <CatFact />
      </div>
    </Provider>
  );
};

export default App;
