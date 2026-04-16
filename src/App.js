import './App.css';
import { useState } from 'react';
import Title from './componenta/title';
import Card from './componenta/card';
import image from './componenta/images/image.png';
import Modal from './componenta/modal';

function App() {

  const [showmodal, setshowmodal] = useState(false)
  const [book, setBook] = useState({})

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
  function closemodal() {
    setshowmodal(false)
  }
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
          <Card key={item.id} img={item.img} name={item.name} author={item.author}>

            <button onClick={() => {
              setshowmodal(true);
              setBook(item);
            }}
              className='bg-blue-600 p-2 rounded-md w-full text-white'>Batafsil

            </button>



          </Card>
        ))}
      </div>


      {showmodal &&
        <Modal onClose={closemodal}>

          <div>
            <img src={book.img} alt="" />



            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {book.name}
              </h2>

              <p className="text-sm text-gray-500 mb-4">
                ✍️ {book.author}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {book.description || "Tavsif mavjud emas."}
              </p>

              <button
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
              >
                Yopish
              </button>
            </div>
          </div>

        </Modal>
      }
    </div>
  );
}

export default App;