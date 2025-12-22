import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  // Cuenta regresiva
  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Cambiar el estado de la luz
  useEffect(() => {
    if (countdown === 0) {
      setCountdown(5);
      if (light === "red") {
        setLight("green");
      } else if (light === "green") {
        setLight("yellow");
      } else if (light === "yellow") {
        setLight("red");
      }
    }
  }, [countdown, light]);

  return { light, colors, countdown };
};
