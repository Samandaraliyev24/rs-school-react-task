import React, { useEffect } from 'react';
import './search.styles.css';

interface SearchProp {
  val: string;
  setVal: (val: string) => void;
}

const SearchCard = ({ val, setVal }: SearchProp) => {
  useEffect(() => {
    return () => {
      window.localStorage.setItem('inputVal', val);
    };
  }, [val]);

  return (
    <div className="search">
      <form className="search__form">
        <img src={require('../../assets/searchIcon.webp')} className="search__form-icon" />
        <input
          className="search__form-input"
          value={val}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchCard;
