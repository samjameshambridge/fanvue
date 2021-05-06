import { Provider } from "react-redux";

import "./styles/App.scss";

import store from "./redux";

import Interface from "./components/Interface";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Interface />
      </div>
    </Provider>
  );
}

export default App;
