import * as React from "react";
import ColorSketchPicker from "../components/Color";

export default function App() {
  const [color, setColor] = React.useState<string>("#fff");

  const okHandle = (color: string) => {
    setColor(color);
  };

  return (
    <div
      style={{
        flexDirection: "column",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#121212",
        padding: "100px",
      }}
    >
      <ColorSketchPicker color={color} />
    </div>
  );
}
