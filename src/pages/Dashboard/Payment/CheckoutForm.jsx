import  { useContext } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "../Payment/styles/Common.css";
import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";


const CheckoutForm = ({ cart,price }) => {
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [success, setSuccess] = useState(' ');
  const [error, setError] = useState(" ");
  const { user, loading } = useContext(AuthContext);
  const [transectionId, setTransectionId] = useState(' ');

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  console.log(cart);
  useEffect(() => {
      axiosSecure.post("/create-payment-intent",
          { price })
          .then((res) => {
      console.log(res.data?.clientSecrect);
      setClientSecret(res.data?.clientSecrect);
    });
  }, []);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
    //   console.log("[PaymentMethod]", paymentMethod);
      }
         const { paymentIntent, error: paymentIntentError } =
           await stripe.confirmCardPayment(clientSecret, {
             payment_method: {
               card: card,
               billing_details: {
                 name:user?.displayName,
                 email:user?.email,
               },
             },
           });
      if(paymentIntentError){
        console.log("Payment error", paymentIntentError);
        setError(paymentIntentError);
        setSuccess(' ');
      }
    console.log("paymentIntent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransectionId(paymentIntent.id);
      setSuccess("your payment was succesful");
      setError(" ");

      const payment = {
        email: user?.email,
        transectionId: paymentIntent.id,
        price,
        quantity: cart?.length,
        data: new Date(),
        status: "service pending",
        cartItems: cart?.map((item) => item._id),
        menuItems: cart?.map((item) => item.foodItemId),
        itemNames: cart?.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
      });
    }
    };


  return (
    <div className="mx-10 my-8 ">
      <form onSubmit={handleSubmit}>
        <p className="text-3xl font-bold">
          Your total amount of money : ${price}
        </p>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {success && (
        <p className="text-green-500 text-lg my-4 text-center">
          {success} your trasection id: ${transectionId}{" "}
        </p>
      )}
      {error && (
        <p className="text-red-500 text-lg my-4 text-center">
          {error}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
