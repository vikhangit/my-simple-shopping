import React from "react";
import "./dashboard.scss";

function Dashboard({ dashboard, user, LogoutAccount }) {
  return (
    <div>
      {dashboard && (
        <div className="my-account__info__doashboard">
          <div className="my-account__info__doashboard__header">
            <span>
              Welcome {user && <h4>{`${user.firstName} ${user.lastName}`}</h4>}
            </span>
            <button
              onClick={() => LogoutAccount(user)}
              className="my-account__info__doashboard__header__btn"
            >
              Logout
            </button>
          </div>
          <p className="my-account__info__doashboard__desc">
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses, and edit your password and
            account details.
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
