import { createContext } from 'react';
import { useState } from 'react';

//export const UIContext = createContext(null);

const UIContext = createContext({
  largeScreen: true,
  setLargeScreen: () => {},
});

export const UIContextProvider = (props) => {
  const [largeScreen, setLargeScreen] = useState(
    window.innerWidth >= 1023 ? true : false
  );

  const setLargeScreenHandler = () => {
    if (window.innerWidth >= 1023) {
      setLargeScreen(true);
      console.log('large screen now');
    } else {
      setLargeScreen(false);
      console.log('small screen now');
    }
  };

  const contextValue = {
    largeScreen,
    setLargeScreen: setLargeScreenHandler,
  };

  return (
    <UIContext.Provider value={contextValue}>
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContext;
