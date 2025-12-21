import React, { useState } from 'react';

function BoilingVerdict({ celsius }: { celsius: number }) {
  if (celsius >= 100) {
    return <p className="text-green-600 font-bold mt-2">The water would boil.</p>;
  }
  return <p className="text-blue-600 mt-2">The water would not boil.</p>;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function TemperatureInput({ 
  scale, 
  temperature, 
  onTemperatureChange 
}: { 
  scale: 'c' | 'f', 
  temperature: string, 
  onTemperatureChange: (val: string) => void 
}) {
  return (
    <fieldset className="border p-2 rounded mb-4">
      <legend className="text-sm font-semibold px-2">Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        className="border p-1 w-full rounded"
      />
    </fieldset>
  );
}

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convert: (val: number) => number) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default function LiftingStateDemo() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState<'c' | 'f'>('c');

  const handleCelsiusChange = (temperature: string) => {
    setScale('c');
    setTemperature(temperature);
  };

  const handleFahrenheitChange = (temperature: string) => {
    setScale('f');
    setTemperature(temperature);
  };

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">9. Lifting State Up</h2>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

