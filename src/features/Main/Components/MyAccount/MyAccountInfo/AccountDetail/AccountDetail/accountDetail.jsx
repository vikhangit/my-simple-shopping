import React, { useState } from "react";
import Email from "../Email/email";
import FirstName from "../FirstName/firstName";
import LastName from "../LastName/lastName";
import Password from "../Password/password";
import "./accountDetail.scss";

function AccountDetail({ detail, user }) {
  const [editFirstName, setEditFirstName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  return (
    <div>
      {detail && (
        <div className="my-account__info__detail">
          <div className="my-account__info__detail__header">
            The following infmation will be used on the checkout page by
            default.
          </div>
          <div className="my-account__info__detail__content">
            <FirstName
              user={user}
              editFirstName={editFirstName}
              setEditFirstName={setEditFirstName}
              setEditLastName={setEditLastName}
              setEditEmail={setEditEmail}
              setEditPassword={setEditPassword}
            />
            <LastName
              user={user}
              editLastName={editLastName}
              setEditFirstName={setEditFirstName}
              setEditLastName={setEditLastName}
              setEditEmail={setEditEmail}
              setEditPassword={setEditPassword}
            />
            <Email
              user={user}
              editEmail={editEmail}
              setEditFirstName={setEditFirstName}
              setEditLastName={setEditLastName}
              setEditEmail={setEditEmail}
              setEditPassword={setEditPassword}
            />
            <Password
              user={user}
              editPassword={editPassword}
              setEditFirstName={setEditFirstName}
              setEditLastName={setEditLastName}
              setEditEmail={setEditEmail}
              setEditPassword={setEditPassword}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountDetail;
