export const BackCard = ({ cvc }) => {
  return (
    <div className="card back-card bg-no-repeat rounded-md text-white flex justify-end items-center md:order-2 animate__animated animate__fadeInUp">
      <span className="cvc text-xs md:text-sm tracking-widest">{ cvc ? cvc : '000' }</span>
    </div>
  );
};