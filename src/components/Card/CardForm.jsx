import useWindowDimensions from "../../hooks/useWindowDimensions";
import { CardLogo } from "./CardLogo";

export const CardForm = () => {
  const { width } = useWindowDimensions();

  return (
    <div
      className={`bg-no-repeat bg-pattern-size h-full
      ${width > 490 ? "bg-main-desktop" : "bg-main-mobile"}`}
    >
      <div className="bg-card-back bg-no-repeat card rounded-md text-white flex justify-end items-center">
        <span>000</span>
      </div>

      <div className="bg-card-front bg-no-repeat card rounded-md text-white">
        <div className="grid grid-rows-4 h-full p-6">
          <div className="row-span-2">
            <CardLogo />
          </div>
          <span className="text-center font-semibold">0000 0000 0000 0000</span>

          <div className="flex justify-between">
            <span>Jane Appleseed</span>
            <span>00/00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
