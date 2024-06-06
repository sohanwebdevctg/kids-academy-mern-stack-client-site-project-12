import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({currentClass, refetch}) => {

  //authInfo
  const {user} = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  //error message
  const [error, setError] = useState('');

  //navigate
  const navigate = useNavigate()

  // client secret
  const [clientSecret, setClientSecret] = useState("")

  //card data
  const {_id, price,  classImage, className, classId, instructorName} = currentClass;

  const [axiosSecure] = useAxiosSecure()

  // create-payment-intent
  useEffect(() => {
    if(price > 0){
      axiosSecure.post('/create-payment-intent', {price})
    .then((res) => {
      setClientSecret(res.data.clientSecret)
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

    //payment method
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

    // confirmCardPayment 
    const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: card,
        billing_details:{
          name : user?.displayName || 'unauthorized',
          email : user?.email || 'unauthorized'
        }
      }
    })
    //confirm payment
    if(confirmError){
      console.log('confirm error')
    }else{
      if(paymentIntent.status === 'succeeded'){
        // inserted payment and enroll class
        const enrollClass = {
          selectedClassId : _id,
          transactionId: paymentIntent.id,
          email: user?.email,
          date: new Date(),
          price: price,
          instructorName,
          classImage, 
          className, 
          classId
        }

        axiosSecure.post('/payments', enrollClass)
        .then((res) => {
          if(res.data.insertedId){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "You payment was successfully added",
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
            navigate('/dashboard/myEnrollClasses')
          }
        })


      }
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