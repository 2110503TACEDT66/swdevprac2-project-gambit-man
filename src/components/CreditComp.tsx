export default function CreditComp({ cImg, cText }: any) {
  return (
    <div className="flex justify-center items-center">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`/img/${cImg}`}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <p className="py-6 text-xl">{cText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
