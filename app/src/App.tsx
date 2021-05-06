import { Provider } from "react-redux";

import store from "./redux";

import Interface from "./components/Interface";

function App() {
  return (
    <Provider store={store}>
      <Interface />
    </Provider>
  );
}

export default App;
