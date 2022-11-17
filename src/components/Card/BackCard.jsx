export const BackCard = ({ cvc }) => {
  return (
    <div className="card back-card bg-no-repeat rounded-md text-white flex justify-end items-center sm:order-2">
      <span className="cvc" placeholder="">{ cvc ? cvc : '000' }</span>
    </div>
  );
};