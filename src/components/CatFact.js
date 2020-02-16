import React, { useCallback, useEffect } from "react";
import { observer, inject } from "mobx-react";

const CatFact = inject("catStore")(
  observer(({ catStore }) => {
    useEffect(() => {
      catStore.fetchNewFact();
    }, [catStore]);

    const onRandomClicked = useCallback(() => {
      catStore.fetchNewFact();
    }, [catStore]);

    return (
      <div>
        <div style={{ marginBottom: "1em" }}>{catStore.fact}</div>
        <div>
          <button
            onClick={onRandomClicked}
            disabled={catStore.state === "fetching"}
          >
            random new fact!
          </button>
        </div>
      </div>
    );
  })
);

export default CatFact;
