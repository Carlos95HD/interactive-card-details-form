import cardImg from "../../assets/images/card-logo.svg"

export const FrontCard = ({ cardName, cardNumber, mm, yy }) => {
  return (
      <div className="card front-card bg-no-repeat rounded-md text-white grid grid-rows-4 h-full p-4 lg:p-7 animate__animated animate__fadeInLeft">
        <img className="row-span-2 w-12 md:w-16"src={cardImg} />
        <div className="flex font-medium md:text-xl lg:align-text-bottom lg:items-end lg:text-2xl">
          <p>
            {cardNumber ? cardNumber : "0000 0000 0000 0000"}
          </p>
        </div>

        <div className="flex justify-between place-items-end text-[9px] md:font-normal md:text-sm">
          <span>{cardName ? cardName.toUpperCase(): "JANE APPLESEED"}</span>
          <span>
            {mm ? mm : "00"}/{yy ? yy : "00"}
          </span>
        </div>
      </div>
  );
};
