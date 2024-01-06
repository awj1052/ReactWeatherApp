import { memo } from "react";
import style from './Result.module.css';

function Result({data}){
  return (
    <div className={style.result}>
      <p className={style.text}>{data.data.name}</p>
      <p className={style.text}>{Math.round(((data.data.main.temp - 273.15)*9/5+32)*10)/10}°F</p>
      <p className={style.text}>{data.data.weather[0].main}</p>
    </div>
  );
}

export default memo (Result);
