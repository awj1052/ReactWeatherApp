import styled from 'styled-components';
import { useRef, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Result from './components/Result';
import Modal from './components/Modal';
import { useCallback } from 'react';

// openweathermap.org
// 지역 (lat 위도) (lon 경도)
// 서울 37.50 127.00
// 대전 36.35 127.38

const API_KEY = 'X'
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
let location;

function App() {

  

  const inputRef = useRef();
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = useCallback(function handleCloseModal(){
    setIsModalOpen(false);
  });

  const searchWeather = async () => {
    location = inputRef.current.value;
    try{
      const result = await axios({
        method: 'get',
        url: url(location),
      })
      setData(result);
    }catch (err){
      setIsModalOpen(true);
    }
  }

  return (
    <>
    <Modal open={isModalOpen} onClose={handleCloseModal}/>
    <Header/>
    <AppWarp>
      <div className='input-line'>
        <input ref={inputRef} placeholder='Enter the city name' required type='text'/>
        <button onClick={searchWeather}>✔</button>
      </div>
      {Object.keys(data).length !== 0 && <Result data={data}/>}
    </AppWarp>
    </>
  );
}

export default App;

const AppWarp = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(72 72 74);

  .input-line {
    display: flex;
    flex-direction: row;
  }

  .input-line input {
    width: fit-content;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    background-color: #d1d5db;
    color: #374151;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .input-line button {
    margin-left: 0.5rem;
    width: 25%;
    color: green;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }

`
