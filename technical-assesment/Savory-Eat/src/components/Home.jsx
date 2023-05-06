import { React } from "react";
// import AllRecipies from "./allRecipies.jsx";

const Home = ({ changeView }) => {
  // const [view, setView] = useState("Home");

  return (
    <div>
      <div className="latest_trand_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="trand_info text-center">
                <h3>Discover latest trending recipes</h3>
                <a className="boxed-btn3" onClick={() => changeView("AllRecipies")}>
                  View all Recipies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {view === "AllRecipes" && <AllRecipes />} */}
    </div>
  );
};

export default Home;
