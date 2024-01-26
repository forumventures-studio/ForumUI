import { useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

type ColorPickerProps = {
  color: string;
  onColorChange: (color: string) => void;
  isVisible: boolean;
  onClickOutside: () => void;
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  onColorChange,
  isVisible,
  onClickOutside,
}) => {
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      pickerRef.current &&
      !pickerRef.current.contains(event.target as Node)
    ) {
      onClickOutside();
    }
  };

  return isVisible ? (
    <div
      ref={pickerRef}
      style={{
        position: "absolute",
        left: "0",
        top: "100%",
        zIndex: 1000,
      }}
    >
      <HexColorPicker color={color} onChange={onColorChange} />
    </div>
  ) : null;
};
