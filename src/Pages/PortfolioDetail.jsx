import { useParams } from "react-router-dom";

const PortfolioDetail = () => {
  const { category } = useParams();

  return (
    <div className="p-10 text-center text-2xl font-bold text-white bg-black min-h-screen">
      Showing portfolio for category: <span className="text-primary">{category}</span>
    </div>
  );
};

export default PortfolioDetail;
