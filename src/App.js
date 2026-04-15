import './App.css';
import { useState } from 'react';
import Title from './componenta/title';
import Card from './componenta/card';
import image from './componenta/images/image.png';

function App() {
  const [books] = useState([
    {
      id: 1,
      img: image,
      name: "O‘tgan kunlar",
      author: "Abdulla Qodiriy",
    },
    {
      id: 2,
      img: image,
      name: "Mehrobdan chayon",
      author: "Abdulla Qodiriy",
    },
    {
      id: 3,
      img: image,
      name: "Mehrobdan chayon",
      author: "Abdulla Qodiriy",
    },
    {
      id: 4,
      img: image,
      name: "Mehrobdan chayon",
      author: "Abdulla Qodiriy",
    },
    {
      id: 5,
      img: image,
      name: "Mehrobdan chayon",
      author: "Abdulla Qodiriy",
    },
    {
      id: 6,
      img: image,
      name: "Mehrobdan chayon",
      author: "Abdulla Qodiriy",
    }
  ]);

  return (
    <div>
      <Title
        Bookscoung={6784}
        Authors="200+"
        country={50}
        language="10+"
        Title="Badiiy Kitoblar"
        description="Har bir sahifa - yangi olam."
      />

      <div className='grid grid-cols-3 gap-4 ml-10 mt-10 w-7xl ml-30'>
        {books.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            name={item.name}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}

export default App;