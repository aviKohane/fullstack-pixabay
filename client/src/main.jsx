import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.js";
import App from "./App.jsx";
import { fetchImages } from "./features/imagesSlice.js";

(async function bootstrap() {
  await store.dispatch(fetchImages({ category: "sports", page: 1, perPage: 9 }));
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
})();
