import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../../../../../Slice-Reducer/checkoutSlice";
import DeleteOrder from "../../../Message/DeleteOrder/deleteOrder";
import DeleteOrderSuccess from "../../../Message/DeleteOrderSuccess/DeleteOrderSuccess";
import "./order.scss";
import OrderDetail from "./orderDetail";

function Oder({ order }) {
  const orderTotal = (checkout) => {
    let total = 0;
    let res = 0;
    for (let i = 0; i < checkout.length; i++) {
      total += checkout[i].quantities * checkout[i].price;
    }
    if (total >= 500) {
      res = total;
    } else {
      res = total + 15;
    }
    return res.toFixed(2);
  };
  const user = JSON.parse(localStorage.getItem("user-login"));
  const checkout = useSelector((state) => {
    const data = user ? state.checkout.filter((x) => x.userId === user.id) : [];
    return data;
  });
  const [showMessage, setShowMessage] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingAccept, setLoadingAccept] = useState(false);
  const [info, setInfo] = useState();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(-1);
  const onDeleteOrder = (position, value) => {
    setIsLoading(true);
    setCurrentIndex(position);
    setTimeout(() => {
      setInfo(value);
      setShowMessage(true);
      setIsLoading(false);
      setCurrentIndex(-1);
    }, 2000);
  };
  const onAcceptDelete = (value) => {
    setLoadingAccept(true);
    setTimeout(() => {
      setSuccessMsg(true);
      dispatch(removeOrder(value));
      setLoadingAccept(false);
      setCurrentIndex(-1);
      setShowMessage(false);
      setTimeout(() => {
        setSuccessMsg(false);
      }, 1500);
    }, 2000);
  };
  const [showDetail, setShowDetail] = useState(false);
  const [infoDetail, setInfoDetail] = useState();
  const onViewOrderDetail = (value) => {
    setShowDetail(true);
    setInfoDetail(value);
  };
  return (
    <div className="my-account__info__order">
      {order && (
        <table className="my-account__info__order__table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {checkout.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
                <td>{orderTotal(item.product)}</td>
                <td className="my-account__info__order__table__btn">
                  <button
                    className="my-account__info__order__table__btn__view"
                    onClick={() => onViewOrderDetail(item)}
                  >
                    View
                  </button>
                  {item.status === "Pending" && (
                    <button
                      className="my-account__info__order__table__btn__delete"
                      onClick={() => onDeleteOrder(index, item)}
                    >
                      {isLoading && currentIndex === index ? (
                        <div>
                          <div className="my-account__info__order__table__btn__delete__loading"></div>{" "}
                        </div>
                      ) : (
                        "Delete"
                      )}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showDetail && (
        <OrderDetail
          infoDetail={infoDetail}
          setShowDetail={setShowDetail}
          orderTotal={orderTotal}
        />
      )}
      {showMessage && (
        <DeleteOrder
          info={info}
          loadingAccept={loadingAccept}
          setShowMessage={setShowMessage}
          onAcceptDelete={onAcceptDelete}
        />
      )}
      {successMsg && <DeleteOrderSuccess setSuccessMsg={setSuccessMsg} />}
    </div>
  );
}

export default Oder;
