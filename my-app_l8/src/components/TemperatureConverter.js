import React, { useState } from "react";
//import Button from "@mui/joy/Button";
import { TextField } from "@mui/joy";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const fahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  const handleCelsiusChange = (event) => {
    setCelsius(event.target.value);
    setFahrenheit(celsiusToFahrenheit(parseFloat(event.target.value)));
  };

  const handleFahrenheitChange = (event) => {
    setFahrenheit(event.target.value);
    setCelsius(fahrenheitToCelsius(parseFloat(event.target.value)));
  };

  return (
    <div>
      <h1>Температурный конвертер</h1>
      <TextField
        label="Температура по Цельсию"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TextField
        label="Температура по Фаренгейту"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
};

export default TemperatureConverter;

// Задание 1: Температурный конвертер с Material UI

// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.
