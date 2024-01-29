import React, { useContext } from "react";
import Card from "../card/card";
import { DataContext } from "../../context/DataContext";


function FreshRecommendation() {
  const { data, incrementLimit, error } = useContext(DataContext);
  console.log(data)
  return (
    <>
      {data && (
        <div className="m-16 rounded py-5 px-10 relative">
          <h1 className="text-2xl pb-3">Fresh Recommendations</h1>
          <div className="flex flex-wrap">
            {data.map((product) => {
              return <Card data={product} key={product.id} />;
            })}
            {error && (
              <div>
                <h1 className="text-red-500">{error}</h1>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex justify-center" onClick={incrementLimit}>
        <button className="border-2 rounded border-black p-3 font-bold hover:border-4 mb-10 hover:mb-9">
          Load More
        </button>
      </div>
    </>
  );
}

export default FreshRecommendation;