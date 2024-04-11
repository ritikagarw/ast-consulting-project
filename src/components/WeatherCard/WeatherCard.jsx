import "./WeatherCard.css";
import Image from "next/image";
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { TbUvIndex } from "react-icons/tb";

const WeatherCard = ({
  city,
  time,
  temp,
  status,
  windspeed,
  humidity,
  uvindex,
  statusImage,
}) => {
  return (
    <div className="main-card">
      <div className="upper">
        <div className="city">{city}</div>
        <div className="time">{time.split(" ")[1]}</div>
      </div>
      <div className="middle">
        <div className="temp"> {`${temp}\u00B0C`}</div>
        <div className="status">{status}</div>
      </div>
      <div className="lower">
        <div className="left">
          <div className="windspeed"><FiWind />{`${windspeed} km/h`}</div>
          <div className="humidity"><WiHumidity/>{`${humidity}%`}</div>
          <div className="uvindex"><TbUvIndex />{uvindex}</div>
        </div>
        <div className="right">
          <Image
            src={`https:${statusImage}`}
            width={100}
            height={100}
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
