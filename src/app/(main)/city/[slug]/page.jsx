"use client";

import { useEffect, useState } from "react";
import WeatherCard from "../../../../components/WeatherCard/WeatherCard";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./cityStyle.css";

const GetCityData = ({ params }) => {
  const [cityData, setCityData] = useState();
  const router = useRouter();

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=d34cbd751f4549e79ce134615241004&q=${params.slug}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCityData(data);
      })
      .catch((error) => console.log(error));
  }, [params]);

  useEffect(() => {
    if (cityData && cityData.error) {
      toast.error("Enter a valid city!");
      setTimeout(() => {
        router.push("/city");
      }, 1500);
    }
  }, [cityData, router]);

  return (
    <>
      <div className="dynamic-city">
        {cityData && !cityData.error && cityData.location.name == "Agra" && (
          <Image
            src="https://images.pexels.com/photos/6989252/pexels-photo-6989252.jpeg"
            alt="cityImg"
            fill
            loading = 'lazy'
            className="cityImage"
          />
        )}
        {cityData && !cityData.error && (
          <WeatherCard
            city={cityData.location.name}
            time={cityData.location.localtime}
            temp={cityData.current.temp_c}
            status={cityData.current.condition.text}
            windspeed={cityData.current.wind_kph}
            humidity={cityData.current.humidity}
            uvindex={cityData.current.uv}
            statusImage={cityData.current.condition.icon}
          />
        )}
      </div>
      <Toaster />
    </>
  );
};

export default GetCityData;
