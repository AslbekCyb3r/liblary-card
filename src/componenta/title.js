import React from 'react'

export default function title({Title,description,Bookscoung,Authors,language,country}) {



    return (
   <div className='bg-blue-400 p-4 max-w-7xl mx-auto flex justify-between gap-10'>

  <div className='w-2/3 border'>
    <span className='bg-blue-300 text-3xl font-semibold rounded-md text-white px-2 py-1 inline-block'>
      {Title}
    </span>

    <p className='text-md text-white p-2'>
      {description}
    </p>
  </div>

  <div className='w-1/3 border grid grid-cols-2 gap-4 rounded-md p-2 text-xl text-center'>
    
    <div className='border-2 bg-gray-400 text-white p-2'>
      {Bookscoung}
      <p>Kitoblar</p>
    </div>

    <div className='border-2 bg-gray-400 text-white p-2'>
      {Authors}
      <p>Mualliflar</p>
    </div>

    <div className='border-2 bg-gray-400 text-white p-2'>
      {language}
      <p>Mamlakatlar</p>
    </div>

    <div className='border-2 bg-gray-400 text-white p-2'>
      {country}
      <p>Til</p>
    </div>

  </div>

</div>
    )
}
