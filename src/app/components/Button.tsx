interface ButtonProps {
  value: string;
  method: () => void;
}

export default function Button({ value, method }: ButtonProps) {
  return (
    <>
      <button
        onClick={method}
        className="bg-green-400 p-2 rounded-lg text-black"
      >
        {value}
      </button>
    </>
  );
}
