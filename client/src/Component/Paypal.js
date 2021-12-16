import React, { useEffect } from "react";

// function Paypal() {
//   return (
//     //   window.paypal.Buttons({createOrder=(data , actions)=>{
//     //       return actions.order.create({
//     //           purchase_units=[{amount= {value=600.00}}]
//     //       })
//     //   }
//     //     createOrder:(data,actions) {
//     //    return actions.order.create({
//     //     purchase_units [{
//     //       amount: {
//     //         value: 600.00
//     //       }
//     //     }]

//     //  }).render({'#paypal-button-container'});

//     // <div id="paypal-button-container"></div>)
//     window.paypal
//       .Buttons({
//         createOrder: function (data, actions) {
//           // This function sets up the details of the transaction, including the amount and line item details.
//           return actions.order.create({
//             purchase_units: [
//               {
//                 amount: {
//                   value: "600.25",
//                 },
//               },
//             ],
//           });
//         },

//     onApprove: function(data, actions) {
//       // This function captures the funds from the transaction.
//       return actions.order.capture().then(function(details) {
//         // This function shows a transaction success message to your buyer.
//         alert('Transaction completed by ' + details.payer.name.given_name);
//       });
//     }

//     })

//       .render("#paypal-button-container");
//       return   <div id="paypal-button-container"></div>
//   );
// }

function Paypal() {
  //   <>
  //     <script src="https://www.paypal.com/sdk/js?client-id=AcV3n2Xz6Zgvhina8aVH60Q90gr5rHHPzqDHLQc0EztI1nWhup3BPGgfFRkNerWpYeC-HbGsKCikWFVX"></script>
  //     <script>paypal.Buttons().render("body");</script>
  //     useEffect(() ={" "}
  //     {window.paypal.Buttons({
  //       createOrder: (data, actions) => {
  //         return actions.order.create({
  //           purchase_units: [
  //             {
  //               amount: {
  //                 value: "600.0",
  //               },
  //             },
  //           ],
  //         });
  //       },
  //     })}
  //     ).render('#paypal-button-container');
  //   </>;
}
export default Paypal;
