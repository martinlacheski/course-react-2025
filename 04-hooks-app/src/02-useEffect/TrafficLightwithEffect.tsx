import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
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
      // eslint-disable-next-line react-hooks/set-state-in-effect
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <p>Countdown: {countdown}</p>
        <button onClick={() => setCountdown(countdown - 1)}>Decrement</button>
        <div
          className={`w-32 h-32 
        ${light === "red" ? colors[light] : "bg-gray-500"} 
        rounded-full`}
          onClick={() => setLight("red")}
        ></div>
        <div
          className={`w-32 h-32 
        ${light === "yellow" ? colors[light] : "bg-gray-500"} 
        rounded-full`}
          onClick={() => setLight("yellow")}
        ></div>
        <div
          className={`w-32 h-32 
        ${light === "green" ? colors[light] : "bg-gray-500"} 
        rounded-full`}
          onClick={() => setLight("green")}
        ></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setLight("red")}
          >
            Rojo
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setLight("yellow")}
          >
            Amarillo
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setLight("green")}
          >
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};
