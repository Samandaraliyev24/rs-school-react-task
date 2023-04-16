import React, { useState } from 'react';
import { SearchCard, Card } from '../../components';
import './home.styles.css';
import { useReduxSelector, useReduxDispatch } from '../../store/store';
import { setQuery, setResults } from '../../store/slices/search/reducer';

type Icard = {
  _id: number;
  name: string;
  description: string;
  spouse: string;
  wikiUrl?: string;
};

const Home = () => {
  const dispatch = useReduxDispatch();

  const [isFetching, setIsFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState<Icard>();

  const { searchQuery, searchResults } = useReduxSelector((state) => ({
    searchQuery: state.search.query,
    searchResults: state.search.results,
  }));

  async function fetchCharacters() {
    setIsFetching(true);
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer gJOivXGlWpKLF_v9cj6M',
      },
    };
    try {
      const response = await fetch('https://the-one-api.dev/v2/character?limit=10', options);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      window.alert(error);
    } finally {
      setIsFetching(false);
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCharacters()
      .then((data) => {
        dispatch(
          setResults({
            results: data.docs,
          })
        );
        return;
      })
      .catch((err) => console.error(err));
  };

  const openModal = (card?: Icard) => {
    setCurrentCard(card);
    setIsDialogOpen(true);
  };

  if (isFetching) return <h1>Loading...</h1>;

  return (
    <div className="root">
      <SearchCard
        val={searchQuery}
        setVal={(e) =>
          dispatch(
            setQuery({
              query: e,
            })
          )
        }
        handleSubmit={handleSubmit}
      />
      <h1>Cards</h1>
      <ul className="cards-list">
        {searchResults &&
          searchResults.length > 0 &&
          searchResults.map((card: Icard) => (
            <Card card={card} key={card._id} openModal={openModal} />
          ))}
      </ul>
      {isDialogOpen && (
        <dialog className="dialog" open={isDialogOpen}>
          <button className="dialog_button" onClick={() => setIsDialogOpen(false)}>
            X
          </button>
          {JSON.stringify(currentCard, null, 2)}
        </dialog>
      )}
    </div>
  );
};

export default Home;
