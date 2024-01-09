import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

export const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [isToggle, setIsToggle] = useState(true);
  const [isLoad, setIsLoad] = useState(false);
  const [isVideoLink, setIsVideoLink] = useState("");
  const [dataList, setDataList] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [isArrorToggle, setIsArrowToggle] = useState(false);
  const [modalSec, setModalSec] = useState(false);
  const searchvalue = useRef("");
  const [toggleSeach, setToggleSeach] = useState(false);
  const [loadSearch, setLoadSearch] = useState(true);
  const [isCheckCountry, setIsCheckCountry] = useState("");
  const [isCheckCatigory, setIsCheckCatigory] = useState("");
  const [isCheckYear, setIsCheckYaer] = useState("");

  useEffect(() => {
    function handleResize() {
      if (window.screen.width <= 950) {
        setIsToggle(false);
      } else {
        setIsToggle(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function ToggleHandle() {
    setIsArrowToggle(!isArrorToggle);
  }

  return (
    <StateContext.Provider
      value={{
        dataList,
        isLoad,
        setIsLoad,
        isToggle,
        setIsToggle,
        isVideoLink,
        setIsVideoLink,
        dataLength,
        setDataLength,
        isArrorToggle,
        setIsArrowToggle,
        ToggleHandle,
        modalSec,
        setModalSec,
        searchvalue,
        setToggleSeach,
        toggleSeach,
        loadSearch,
        isCheckCountry,
        setIsCheckCountry,
        isCheckCatigory,
        setIsCheckCatigory,
        isCheckYear,
        setIsCheckYaer,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
