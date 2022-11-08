import { CardLogo } from "./CardLogo";

export const FrontCard = ({ cardName, cardNumber, mm, yy }) => {
  return (
    <div className="bg-card-front bg-no-repeat card rounded-md text-white">
      <div className="grid grid-rows-4 h-full p-6">
        <div className="row-span-2">
          <CardLogo />
        </div>
        <span className="text-center font-semibold">
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </span>

        <div className="flex justify-between">
          <span>{cardName ? cardName : "Jane Appleseed"}</span>
          <span>
            {mm ? mm : "00"}/{yy ? yy : "00"}
          </span>
        </div>
      </div>
    </div>
  );
};
