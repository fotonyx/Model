export default function GoogleReviewButton() {
  const handleRedirect = () => {
    window.open(
      "https://g.page/r/Ce2i1eeedmD0EBM/review",
      "_blank"
    );
  };

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={handleRedirect}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition"
      >
        Leave a Google Review
      </button>
    </div>
  );
}
