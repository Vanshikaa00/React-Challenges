import { useState } from "react";

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState("#fff");
  function handleColorChange(event) {
    setSelectedColor(event.target.value);
  }
  return (
    <div>
      <input
        value={selectedColor}
        type="color"
        onChange={(event) => handleColorChange(event)}
      />

      <p> Selected Color Code is: {selectedColor}</p>
    </div>
  );
}
