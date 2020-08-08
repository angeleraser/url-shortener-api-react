import React, { createContext, useReducer } from "react";
export const MainContext = createContext();

const URListingReducer = (state, action) => {
  const updateListItems = (list, id) => {
    return {
      urlList: list.map((url, i) => {
        if (url.id === id) {
          return {
            ...url,
            copied: true,
          };
        } else {
          return {
            ...url,
            copied: false,
          };
        }
      }),
    };
  };
  const getUpdatedList = (list, newURL) => ({
    urlList: [newURL, ...list],
  });
  switch (action.type) {
    case "UPDATE_LIST":
      return updateListItems(state.urlList, action.id);
    case "ADD_TO_LIST":
      return getUpdatedList(state.urlList, action.url);
    default:
      break;
  }
};

const ContextProvider = ({ children }) => {
  const defaultValue = {
    urlList: [],
  };

  const updateList = (id) => {
    dispatch({ type: "UPDATE_LIST", id });
  };
  const addToList = (newUrl) => {
    dispatch({ type: "ADD_TO_LIST", url: newUrl });
  };

  const [{ urlList }, dispatch] = useReducer(URListingReducer, defaultValue);

  const providerValue = {
    urlList,
    updateList,
    addToList,
  };

  return (
    <MainContext.Provider value={providerValue}>
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
