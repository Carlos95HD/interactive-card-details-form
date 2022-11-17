import cardImg from "../../assets/images/card-logo.svg";

export const FrontCard = ({ cardName, cardNumber, mm, yy }) => {
  return (
      <div className="card front-card bg-no-repeat rounded-md text-white grid grid-rows-4 h-full p-4">
        <img className="row-span-2 w-12"src={cardImg} />
        <span className="font-medium">
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </span>

        <div className="flex justify-between place-items-end text-[9px]">
          <span>{cardName ? cardName.toUpperCase(): "JANE APPLESEED"}</span>
          <span>
            {mm ? mm : "00"}/{yy ? yy : "00"}
          </span>
        </div>
      </div>
  );
};
