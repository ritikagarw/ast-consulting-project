"use client";

import { Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./city.css";

const City = () => {
  const [city, setCity] = useState("");
  const router = useRouter()
  const onSubmit = (e) => {
    e.preventDefault();
    if (city) {
        router.push(`/city/${city}`);
    }
  };
  return (
    <div className="cityMain">
      <form onSubmit={onSubmit}>
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Enter a city name here..."
          className="cityInput"
        />
        <Button type="submit" colorScheme="teal" variant="outline" className="citySearchBtn">
          Search
        </Button>
      </form>
    </div>
  );
};

export default City;
