import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css';

const FetchData = () => {
  const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
  console.log(data);
  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Fruits</h1>
        {data && data.map((e, listIndex) => (
            <>
              <li key={listIndex} className='list_data'>
                <h3>{e.name}</h3>
                <p><strong>Index: </strong>{listIndex + 1}</p>
                <p><strong>Importance: </strong>{e.importance}</p>
                <p><strong>Benefits: </strong>{e.benefits}</p>
                <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
                <img src={e.image} width='100vw' height='100vh' alt="Picture"/>
              </li>
            </>
        ))}
     </ul>
    </>
  )
}

export default FetchData