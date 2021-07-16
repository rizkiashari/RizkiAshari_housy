import { Button, Image } from "react-bootstrap";
import bedLogo from "../../assets/logoIcon/bed.png";
import bathLogo from "../../assets/logoIcon/bath 1.png";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { API } from "../../config/api";
import { UserContext } from "../../contexts/userContext";
import ModalOrder from "../ModalOrder/ModalOrder";
import ModalSignIn from "../signinModal";

const DetailProduct = () => {
  const params = useParams();
  const { state, dispatch } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSignin, setshowSignin] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const getProduct = async () => {
    const response = await API.get(`/house/${params.id}`);
    console.log(response.data);
    setData(response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    getProduct();
    return () => {
      setData(null);
    };
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <div className="containerDetailProduct">
      <div className="containerContentImage">
        <Image src={data.image} alt="House1" className="house1" />
        <div className="detailImage d-flex">
          <Image src={data.detail_one} alt="House1" className="house2" />
          <Image src={data.detail_two} alt="House1" className="house3" />
          <Image src={data.detail_three} alt="House1" className="house4" />
        </div>
      </div>
      <div className="containerDescription">
        <h3>{data.name}</h3>
        <div className="detailHouse">
          <div className="leftDetail">
            <h3>
              Rp.{data.price.toLocaleString("id-ID")} / {data.typeRent}
            </h3>
            <p>{data.address}</p>
            <p>{data.city.name}</p>
          </div>
          <div className="rightDetail">
            <div className="Bed">
              <p>Bedrooms</p>
              <div className="bedContent">
                <h4>{data.bedRoom}</h4>
                <Image src={bedLogo} />
              </div>
            </div>
            <div className="Bath">
              <p>Bathrooms</p>
              <div className="bedContent">
                <h4>{data.bathroom}</h4>
                <Image src={bathLogo} />
              </div>
            </div>
            <div className="area">
              <p>Area</p>
              <div className="bedContent">
                <h4>{data.area}</h4>
                <p>ft</p>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="btnPay">
        {!state.isLogin && (
          <>
            <Button
              data-toggle="modal"
              variant="primary"
              type="submit"
              className="btnDetail"
              onClick={() => setshowSignin(true)}
            >
              Book Now
            </Button>
            <ModalSignIn
              show={showSignin}
              handleClose={() => setshowSignin(false)}
              handleSignIn={dispatch}
            />
          </>
        )}
        {state.isLogin && (
          <>
            <Button
              data-toggle="modal"
              variant="primary"
              type="submit"
              className="btnDetail"
              onClick={() => setShowOrder(true)}
            >
              Book Now
            </Button>
            <ModalOrder
              showOrder={showOrder}
              handleClose={() => setShowOrder(false)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DetailProduct;
