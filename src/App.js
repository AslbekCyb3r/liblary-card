import './App.css';
import { useState } from 'react';
import Card from './componenta/card';
import image from './componenta/images/image.png';
import Modal from './componenta/modal';

function App() {
  const [showmodal, setshowmodal] = useState(false);
  const [books, setbooks] = useState([
     {
    id: 1,
    img: image,
    name: "O‘tgan kunlar",
    author: "Abdulla Qodiriy",
    description: "Bu asar o‘zbek adabiyotining eng mashhur romanlaridan biri bo‘lib, unda XIX asr Turkiston hayoti, sevgi va ijtimoiy muammolar chuqur tasvirlangan. Asarda Otabek va Kumushning fojeali muhabbati orqali jamiyatdagi eskilik va yangilik o‘rtasidagi kurash yoritiladi."
  },
  {
    id: 2,
    img: image,
    name: "Mehrobdan chayon",
    author: "Abdulla Qodiriy",
    description: "Mazkur roman diniy niqob ostidagi jaholat, ikkiyuzlamachilik va adolatsizlikni ochib beradi. Asarda insoniy qadriyatlar, halollik va muhabbat masalalari juda ta’sirli tarzda yoritilgan bo‘lib, o‘quvchini chuqur o‘yga toldiradi."
  },
  {
    id: 3,
    img: image,
    name: "Kecha va kunduz",
    author: "Cho‘lpon",
    description: "Bu roman o‘zbek jamiyatining o‘zgarish davridagi murakkab holatini tasvirlaydi. Asarda eski urf-odatlar bilan yangi fikrlar o‘rtasidagi ziddiyat, inson erkinligi va ayol taqdiri masalalari keng yoritilgan."
  },
  {
    id: 4,
    img: image,
    name: "Sarob",
    author: "Abdulla Qahhor",
    description: "Asarda insonning ichki kechinmalari, orzu va umidlari hamda hayotdagi sinovlar aks ettirilgan. Qahhor o‘ziga xos uslubda oddiy hayotiy voqealarni chuqur falsafiy ma’no bilan boyitgan."
  },
  {
    id: 5,
    img: image,
    name: "Dunyoning ishlari",
    author: "O‘tkir Hoshimov",
    description: "Bu asar oddiy insonlarning hayoti, mehr-oqibat, oilaviy qadriyatlar va insoniylik haqida hikoya qiladi. Kitobda muallif hayotning kichik detallaridan katta ma’no chiqarib, o‘quvchiga iliq taassurot qoldiradi."
  }
  ]);

  const [newBook, setNewBook] = useState({
    name: "",
    author: "",
    description: ""
  });

  function closemodal() {
    setshowmodal(false);
  }

  function handleChange(e) {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value
    });
  }

  function addBook() {
    const newItem = {
      id: Date.now(),
      img: image,
      ...newBook
    };

    setbooks([...books, newItem]);

    setNewBook({
      name: "",
      author: "",
      description: ""
    });

    setshowmodal(false);
  }

  return (
    <div className="p-6">

      <button
        onClick={() => setshowmodal(true)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg mb-6"
      >
        + Kitob qo‘shish
      </button>

      <div className="grid grid-cols-3 gap-4">
        {books.map((item) => (
          <Card key={item.id} img={item.img} name={item.name} author={item.author} />
        ))}
      </div>

      {showmodal && (
        <Modal onClose={closemodal}>
          <div className="space-y-3">

            <input
              name="name"
              value={newBook.name}
              onChange={handleChange}
              placeholder="Kitob nomi"
              className="w-full border p-2 rounded"
            />

            <input
              name="author"
              value={newBook.author}
              onChange={handleChange}
              placeholder="Muallif"
              className="w-full border p-2 rounded"
            />

            <textarea
              name="description"
              value={newBook.description}
              onChange={handleChange}
              placeholder="Tavsif"
              className="w-full border p-2 rounded"
            />

               <input
              name="author"
              value={newBook.img}
              onChange={handleChange}
              placeholder="img"
              className="w-full border p-2 rounded"
            />

            <button
              onClick={addBook}
              className="bg-blue-600 text-white w-full py-2 rounded"
            >
              Saqlash
            </button>

          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;