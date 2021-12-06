import RootScreen from "./navigation/RootScreen";
import { Provider } from "react-redux";
import appStore from "./app-redux/store";

function App() {
  return (
    <Provider store={appStore}>
      <RootScreen />
    </Provider>
  );
}

export default App;
