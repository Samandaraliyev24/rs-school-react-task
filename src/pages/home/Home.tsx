import React, { useState } from 'react';
import { SearchCard, Card } from '../../components';
import './home.styles.css';

const link = `https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80`;

const Home = () => {
  const [val, setVal] = useState(window.localStorage.getItem('inputVal') || '');
  const [cards] = useState([
    {
      id: 0,
      title: 'Some title',
      image: link,
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 1,
      title: 'Some title',
      image: link,
      description: 'lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      title: 'Some title',
      image: link,
      description: 'lorem ipsum dolor sit amet',
    },
  ]);

  return (
    <div className="root">
      <SearchCard val={val} setVal={setVal} />
      <h1>Cards</h1>
      <ul className="cards-list">
        {cards && cards.length > 0 && cards.map((card) => <Card card={card} key={card.id} />)}
      </ul>
    </div>
  );
};

export default Home;
