if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "../styles/index.scss";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import AppProvider from "../context/AppContext";
import { persistStore } from "redux-persist";
import SEO from "@components/seo";
import { useState } from "react";
import Preloader from "@components/common/preloader";
import { useEffect } from "react";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true); // Add this state

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the desired delay in milliseconds

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      <SEO
        font={
          // "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap",
          "https://fonts.googleapis.com/css2?family=Freeman&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        }
      />
      <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <AppProvider>
            {isLoading ? <Preloader /> : <Component {...pageProps} />}
            <ToastContainer />
          </AppProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
