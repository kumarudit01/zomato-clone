import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RNavbar from "../components/rnavbar";
const Resturant = () => {
  const params = useParams();
  const [result, setResult] = useState(undefined);
  const [cart, setCart] = useState([]);
  console.log(params);
  const searchResturant = async (data) => {
    try {
      const res = await axios.get(`https://zomato-clone-eight-rho.vercel.app/resturants/${data}`);
      console.log("The Response:", res);
      setResult(res.data[0]);
    } catch (e) {
      console.log("Error While Serching the Doc", e);
    }
  };
  useEffect(() => {
    searchResturant(params.resturantName);
  }, []);
  if (!result) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <div className="container">
        <RNavbar></RNavbar>
        <div className="galleryContainer">
          <img src={result.imgdata} alt="" />
          <img src={result.imgdata} alt="" />
          <img src={result.imgdata} alt="" />
          <img src={result.imgdata} alt="" />
        </div>
        <div>
          <h1 className="text-xl text-bold">{result.rname}</h1>
          <h3>Pizza Pasta ,Italian,Fast Food</h3>
          <h4>Agra Cantt, Agra</h4>
          <div>{cart.length}</div>
        </div>
        <div>
          <ul>
            {result.menu.map((item, index) => (
              <li className="flex p-3 justify-between shadow-lg">
                <div>{item.dishName}</div>
                <div>{item.price}</div>
                <button
                  type="button"
                  onClick={() => {
                    setCart([...cart, result.menu[index]]);
                  }}
                >
                  Add{" "}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Resturant;
