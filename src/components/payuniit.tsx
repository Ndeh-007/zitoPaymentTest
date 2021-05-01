import { IonButton, IonRouterLink } from '@ionic/react';
import React , {Component}  from 'react'
import  PayUnit  from "./PayUnit"

export default class Pay extends Component {
    
    componentDidMount() {
          PayUnit(
            {
              apiUsername: "payunit_sand_gs2SwD1Xc",
              apiPassword: "a1cbea67-b553-4471-bd6b-06c2d1f417e4",
              x_api_key: "56bcc402ce8d8c64126c1ddc3bc158e5fc07e61d",
              mode: "test",
            },
            { 
              return_url:"https://localhost:8100/map",
              notify_url: " ",
              description: "",
              purchaseRef: "",
              total_amount: `50`,
              name: "Ndeh_ngwa",
              currency: "XAF",
            }
          );
    }
   render() {
      return (
          <div>
             <button id ="payunit-pay"> Pay  with payunit </button>
          </div>
        )
    }
}

// export const Pay: React.FC = ()=>{
//     PayUnit(
//       {
//         apiUsername: "payunit_sand_gs2SwD1Xc",
//         apiPassword: "a1cbea67-b553-4471-bd6b-06c2d1f417e4",
//         x_api_key: "56bcc402ce8d8c64126c1ddc3bc158e5fc07e61d",
//         mode: "test",
//       },
//       {
//         return_url: "https://localhost:8101/login",
//         notify_url: " ",
//         description: "",
//         purchaseRef: "",
//         total_amount: `50`,
//         name: "Ndeh_ngwa",
//         currency: "XAF",
//       }
//       );

//   return(
//     <div>
//        <IonButton id ="payunit-pay"> Pay  with payunit </IonButton>
//     </div>
//   )
// }
