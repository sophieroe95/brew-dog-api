import React, {useState} from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SearchBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    // 1. Here we have just received our props from Navbar component
    const { placeholder, updateSearchText } = props;
  
    // 2. Event Listener listening to each keypress. When this happens, we call updateSearchText and get the input-value from the event
    const input = isOpen ? <input type="text" placeholder={placeholder} onInput={e => updateSearchText(e.target.value)} /> : null;
  
    return (
      <div className={styles.search}>Click to search
        {input}
        <span className={styles.fa} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon="search" size='2x' />
      </span>
      </div>
  );
};

export default SearchBar;
