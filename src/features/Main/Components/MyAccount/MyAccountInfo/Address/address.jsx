import React, { useState } from "react";
import "./address.scss";
import EditAdress from "./editAdress";
import EditPhone from "./editPhone";

function Address({ address, user }) {
  const [editAddress, setEditAddress] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  return (
    <div>
      {address && (
        <div className="my-account__info__address">
          <EditAdress
            user={user}
            editAddress={editAddress}
            setEditPhone={setEditPhone}
            setEditAddress={setEditAddress}
          />
          <EditPhone
            user={user}
            editPhone={editPhone}
            setEditPhone={setEditPhone}
            setEditAddress={setEditAddress}
          />
        </div>
      )}
    </div>
  );
}

export default Address;
