import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState('')

  // formData
  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!stripe || !elements){
      return;
    }

    const card = elements.getElement(CardElement);

    if(card === null){
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    if(error){
      setError(error.message)
    }else{
      console.log(paymentMethod)
    }

  }



  return (
    <form onSubmit={handleSubmit}>
      <CardElement
      options={{
        style:{
          base:{
            fontSize: '16px',
            color: '#424770',
            '::placeholder':{
              color: '#aab7c4',
            }
          },
          invalid: {
            color: '#9e2146'
          }
        }
      }}
      ></CardElement>
      <div>
      <button className="btn btn-sm btn-error mt-3" type="submit" disabled={!stripe}>Pay</button>
      </div>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default CheckoutForm;