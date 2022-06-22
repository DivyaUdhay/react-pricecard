import logo from "./logo.svg";
import "./App.css";
import Pricecard from "./Pricecard";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  let PriceCard = [
    {
      title :'Free',
      price : 0,
      features:[
        {
        name : "single user",
        isEnable : true
        },
        {
          name : "5GB Storage",
          isEnable : true
        },
        {
          name : "Unlimited Public Projects",
          isEnable : true
        },
        {
          
          name : "Community Access",
          isEnable : true
        },
        {
          name : "Unlimited Private Projects",
          isEnable : false
        },
        {
          name : "Dedicated Phone Support",
          isEnable : false
        },
        {
          name : "Free Subdomain",
          isEnable : false
        },
        {
          name : "Monthly Status Reports",
          isEnable : false
        }
      ]
    },
    {
      title:'plus',
      price : 29,
      features:[
        {
        name : "single user",
        isEnable : true
        },
        {
          name : "5GB Storage",
          isEnable : true
        },
        {
          name : "Unlimited Public Projects",
          isEnable : true
        },
        {
          name : "Community Access",
          isEnable : true
        },
        {
          name : "Unlimited Private Projects",
          isEnable : true
        },
        {
          name : "Dedicated Phone Support",
          isEnable :true
        },
        {
          name : "Free Subdomain",
          isEnable : true
        },
        {
          name : "Monthly Status Reports",
          isEnable : false
        },
      ]
    },
    {
      title:'plus',
      price : 49,
      features:[
        {
        name : "single user",
        isEnable : true
        },
        {
          name : "5GB Storage",
          isEnable : true
        },
        {
          name : "Unlimited Public Projects",
          isEnable : true
        },
        {
          name : "Community Access",
          isEnable : true
        },
        {
          name : "Unlimited Private Projects",
          isEnable : true
        },
        {
          name : "Dedicated Phone Support",
          isEnable : true
        },
        {
          name : "Free Subdomain",
          isEnable : true
        },
        {
          name : "Monthly Status Reports",
          isEnable : true
        },
      ]
    }
  ]
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            PriceCard.map((card)=>{
            return<Pricecard data={card}></Pricecard>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
