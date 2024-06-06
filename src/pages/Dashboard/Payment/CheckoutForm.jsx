import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from './../../../hooks/useAxiosSecure';


const CheckoutForm = ({currentClass, refetch}) => {


  const stripe = useStripe();
  const elements = useElements();
  //error message
  const [error, setError] = useState('');

  // client secret
  const [clientSecret, setClientSecret] = useState("")

  //card data
  const {_id, price,  classImage, className, classId} = currentClass;

  const [axiosSecure] = useAxiosSecure()

  // create-payment-intent
  useEffect(() => {
    if(price > 0){
      axiosSecure.post('/create-payment-intent', {price})
    .then((res) => {
      setClientSecret(res.data.client_secret)
    })
    }
  },[axiosSecure, price])

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
      setError(error.message);
    }else{
      console.log(paymentMethod)
      setError('');
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
      <button className="btn btn-sm btn-error mt-3" type="submit" disabled={!stripe || !clientSecret}>Pay</button>
      </div>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default CheckoutForm;