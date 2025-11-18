"use client";

import { useState } from "react";

import Button from "../components/Button";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <p className="text-4xl">Counter</p>
      <p className="text-4xl">{count}</p>

      <div className="flex gap-2">
        <Button value="Increment" method={increment} />
        <Button value="Decrement" method={decrement} />
        <Button value="Reset" method={reset} />
      </div>
    </div>
  );
}
