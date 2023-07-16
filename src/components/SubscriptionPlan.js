import React, { useEffect, useState } from "react";
import "./subscription.css";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "../redux/actions";
import { BsCurrencyRupee } from "react-icons/bs";

const SubscriptionPlan = () => {
  const [subscriptions, setSubscriptions] = useState({
    offer12Months: { total: 0, monthly: 0 },
    recommended12Montths: { total: 0, monthly: 0 },
    subscription6Months: { total: 0, monthly: 0 },
    subscription3Months: { total: 0, monthly: 0 },
    totalPrice: 0,
  });

  const [planSelected, setPlanSelected] = useState("");
  const allPrices = useSelector((data) => data);
  console.log(allPrices);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(allPrices);
    setSubscriptions((prev) => ({
      ...prev,
      offer12Months: {
        total: allPrices.offer12Months.total,
        monthly: allPrices.offer12Months.monthly,
      },
      recommended12Montths: {
        total: allPrices.recommended12Months.total,
        monthly: allPrices.recommended12Months.monthly,
      },
      subscription6Months: {
        total: allPrices.subscription6Months.total,
        monthly: allPrices.subscription6Months.monthly,
      },
      subscription3Months: {
        total: allPrices.subscription3Months.total,
        monthly: allPrices.subscription3Months.monthly,
      },
      totalPrice: allPrices.totalPrice,
    }));
  }, [allPrices]);

  useEffect(() => {
    console.log(subscriptions.offer12Months);
  }, [subscriptions]);

  const handleRadioClick = (e) => {
    setPlanSelected(e);
    let cost;
    if (e === "months12") cost = 179;
    if (e === "months6") cost = 149;
    if (e === "months3") cost = 99;

    dispatch(calculateTotal(cost));
  };

  return (
    <div className="subscription-section">
      <div className="login">
        <div className="choose">
          <h3>1</h3>
          <p>Sign Up</p>
        </div>
        <div className="choose">
          <h3>2</h3>
          <p>Suscribe</p>
        </div>
      </div>
      <div className="title">Select your subscription plan</div>
      <div className="all-plans">
        <div className="plan1 plan expired">
          <div className="offer-expired-label">Offer-expired</div>
          <div className="plan-description">
            <input type="radio" disabled />
            <p>12 Months Subscription</p>
          </div>
          <div className="total">
            <div className="plan-cost">
              <p className="plan-cost-label">Total</p>
              <span>
                <BsCurrencyRupee />
                {subscriptions.offer12Months.total}
              </span>
            </div>
            <div className="per-month">
              <p>
                <BsCurrencyRupee />
              </p>
              <span>{subscriptions.offer12Months.monthly}</span>
              <p>/mo</p>
            </div>
          </div>
        </div>
        <div className="plan2 plan">
          <div className="recommended">Recommended</div>
          <div className="plan-description">
            <input
              type="radio"
              onClick={() => handleRadioClick("months12")}
              checked={planSelected === "months12"}
            />
            <p>12 Months Subscription</p>
          </div>
          <div className="cost">
            <div className="plan-cost">
              <p className="plan-cost-label">Total</p>
              <span>
                <BsCurrencyRupee />
                {subscriptions.recommended12Montths.total}
              </span>
            </div>
            <div className="per-month">
              <p>
                <BsCurrencyRupee />
              </p>
              <span>{subscriptions.recommended12Montths.monthly}</span>
              <p>/mo</p>
            </div>
          </div>
        </div>
        <div className="plan3 plan">
          <div className="plan-description">
            <input
              type="radio"
              onClick={() => handleRadioClick("months6")}
              checked={planSelected === "months6"}
            />
            <p>6 Months Subscription</p>
          </div>
          <div className="cost">
            <div className="plan-cost">
              <p className="plan-cost-label">Total</p>
              <span>
                <BsCurrencyRupee />
                {subscriptions.subscription6Months.total}
              </span>
            </div>
            <div className="per-month">
              <p>
                <BsCurrencyRupee />
              </p>
              <span>{subscriptions.subscription6Months.monthly}</span>
              <p>/mo</p>
            </div>
          </div>
        </div>
        <div className="plan4 plan">
          <div className="plan-description">
            <input
              type="radio"
              onClick={() => handleRadioClick("months3")}
              checked={planSelected === "months3"}
            />
            <p>3 Months Subscription</p>
          </div>
          <div className="cost">
            <div className="plan-cost">
              <p className="plan-cost-label">Total</p>
              <span>
                <BsCurrencyRupee />
                {subscriptions.subscription6Months.total}
              </span>
            </div>
            <div className="per-month">
              <p>
                <BsCurrencyRupee />
              </p>
              <span>{subscriptions.subscription6Months.monthly}</span>
              <p>/mo</p>
            </div>
          </div>
        </div>
        <div className="overall-cost">
          <div className="subscription-fee">
            <p>Subscription Fee</p>
            <span>
              <BsCurrencyRupee />
              18,500
            </span>
          </div>
          <div className="offer">
            <div className="limited-offer">
              <p>Limited time offer</p>
              <p>Offer valid till 25th March 2023</p>
            </div>
            <div className="offer-cost">
              <BsCurrencyRupee />
              18,401
            </div>
          </div>
          <div className="total-cost">
            <p>Total(Incl. of 18% GST)</p>
            <span>
              <BsCurrencyRupee />
              {subscriptions.totalPrice}
            </span>
          </div>
        </div>
        <div className="actions">
          <button className="cancel">CANCEL</button>
          <button className="pay">PROCEED TO PAY</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
