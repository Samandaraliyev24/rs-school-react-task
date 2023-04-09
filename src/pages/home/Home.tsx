import React, { useState } from 'react';
import { SearchCard, Card } from '../../components';
import './home.styles.css';

type Icard = {
  _id: number;
  name: string;
  description: string;
  spouse: string;
  wikiUrl?: string;
};

const Home = () => {
  const [val, setVal] = useState(window.localStorage.getItem('inputVal') || '');

  const [cards, setCards] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState<Icard>();

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
        setCards(data.docs);
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
      <SearchCard val={val} setVal={setVal} handleSubmit={handleSubmit} />
      <h1>Cards</h1>
      <ul className="cards-list">
        {cards &&
          cards.length > 0 &&
          cards.map((card: Icard) => <Card card={card} key={card._id} openModal={openModal} />)}
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
