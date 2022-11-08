export const BackCard = ({ cvc }) => {
  return (
    <div className="bg-card-back bg-no-repeat card rounded-md text-white flex justify-end items-center">
      <span className="cvc" placeholder="">{ cvc ? cvc : '000' }</span>
    </div>
  );
};