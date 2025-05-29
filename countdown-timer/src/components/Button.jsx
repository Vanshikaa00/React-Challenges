const colorMap = {
  sky: "bg-sky-800",
  red: "bg-red-800",
  blue: "bg-blue-800",
  gray: "bg-gray-800",
  green: "bg-green-800",
};

export default function Button({ children, btnType = "gray", onClick }) {
  const bgColor = colorMap[btnType] || "bg-gray-800";

  return (
    <button
      onClick={onClick}
      className={`p-2 m-1 text-white rounded ${bgColor}`}
    >
      {children}
    </button>
  );
}
