import React from "react";
import "../index.scss";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import RecepieCard from "./RecepieCard.jsx";
const AllRecipies = ({setOne, changeView, data}) => {
  console.log(data);
  return (
    <div className="card-container">
      {data?.map((e, i) => (
        <RecepieCard e={e} key={i} setOne={setOne} changeView={changeView} />
      ))}
    </div>
  );
};

export default AllRecipies;