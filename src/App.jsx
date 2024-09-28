import logo from './logo.svg';
import './App.css';
import { Card, } from './components/cards';

const Data = [
  {
    title: "Leather baseball caps",
    duration: "2 weeks ago",
    price: "Rs 1,2800",
    image: "https://images.olx.com.pk/thumbnails/170883333-400x300.webp",
    location: "Dalmia Cement Factory Road, Karachi",

  },
  {
    title: "4Tb sata HARd drive for desktop pc or NVR seagate",
    duration: "1 minute ago",
    price: "Rs 1,120",
    image: "https://images.olx.com.pk/thumbnails/305510585-400x300.webp",
    location: "Blue Area, Islamabad",

  },
   {
    title: "Sony 6500 30mm 2 batterys charger",
    duration: "2 minutes ago",
    price: "Rs 1,25000",
    image: "https://images.olx.com.pk/thumbnails/305510774-400x300.webp",
    location: "Orangi Town, Karachi",

  },
   {
    title: "khan Shaahb",
    duration: "life Time",
    price: "Bilkul muft",
    image: "https://tse2.mm.bing.net/th?id=OIP.hOuUrEPexEZgLJe4IwXxiQHaFN&pid=Api&P=0",
    location: "All of the world",

  }
]



function App() {

  return (
    <div className="main">
      {
        Data.map((v , i)=>{
          return(
            <Card
            key={i}
            title = {v.title}
            duration = {v.duration}
            price ={v.price}
            image = {v.image}
            location={v.location}
            
            
            
            />
          )

        })
      }
      

    </div>
  );
}

export default App;
