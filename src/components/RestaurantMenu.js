import React, {useEffect,useState} from 'react'
import MenuCard from './MenuCard';
//import {itemContext} from '../App';
var store =require('store');

function RestaurantMenu() {
  // const [items,setitems]=useState(store.get('items') ?? []);
  const [loading,setLoading]=useState(store.get('loading') ?? true);
  const [error, setError]=useState(store.get('error') ?? '');

  const items = [
  {
    "id": 11111,
    "category": "Break Your Fast",
    "items": [
      {
        "id": 1,
        "itemName": "Plain Dosa",
        "price": 20,
        "vegan": "veg",
        "tag": "",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/pictures/9/19570539/d7670e70e86ebafdc82b9461eebf854e.jpg?output-format=webp"
      },
      {
        "id": 2,
        "itemName": "Poori",
        "price": 30,
        "vegan": "veg",
        "tag": "",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/dish_photos/256/26af11a74ea045de9df8d93bf72af256.jpg?output-format=webp"
      },
      {
        "id": 3,
        "itemName": "Masala Dosa",
        "price": 30,
        "vegan": "veg",
        "tag": "Popular",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/pictures/7/18896837/9bfc04732beb60e473f1833848447d5f.jpg?output-format=webp"
      },
      {
        "id": 4,
        "itemName": "Mangalore Bajji",
        "price": 30,
        "vegan": "veg",
        "tag": "",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/dish_photos/018/4579df5213425055e304fda66f173018.jpg?output-format=webp"
      }
    ]
  },
  {
    "id": 11112,
    "category": "Time for Lunch",
    "items": [
      {
        "id": 222,
        "itemName": "Andhra Veg Meals",
        "price": 300,
        "vegan": "veg",
        "tag": "",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/dish_photos/424/3a19dd93fb46a3bb8bfd662c988a9424.jpg?fit=around|130:130&crop=130:130;*,*"
      },
      {
        "id": 223,
        "itemName": "Andhra Non-veg Meals",
        "price": 350,
        "vegan": "Non veg",
        "tag": "Popular",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/pictures/chains/3/93043/472257cae06db1d30e3d73971f9135be_o2_featured_v2.jpg?output-format=webp"
      },
      {
        "id": 224,
        "itemName": "Andhra Egg Meals",
        "price": 330,
        "vegan": "egg",
        "tag": "",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/pictures/9/92799/306f3388535e234369b230654a950498_o2_featured_v2.jpg"
      }
    ]
  },
  {
    "id": 11113,
    "category": "Can I Have Snacks",
    "items": [
      {
        "id": 330,
        "itemName": "Paneer Hot Dog",
        "price": 70,
        "vegan": "veg",
        "tag": "Popular",
        "quantity": 0,
        "img": "https://cookwithchandni.files.wordpress.com/2020/09/img_20200906_131242_765-1.jpg"
      },
      {
        "id": 331,
        "itemName": "Mushroom Hot Dog",
        "price": 70,
        "vegan": "veg",
        "tag": "",
        "quantity": 0,
        "img": "https://www.connoisseurusveg.com/wp-content/uploads/2017/06/portobello-mushroom-hot-dogs.jpg"
      },
      {
        "id": 332,
        "itemName": "Cheese Sandwich",
        "price": 70,
        "vegan": "veg",
        "tag": "",
        "quantity": 0,
        "img": "https://cdn.cdnparenting.com/articles/2020/02/27142028/GRILLED-CHEESE-SANDWICH.jpg"
      },
      {
        "id": 333,
        "itemName": "Twister",
        "price": 70,
        "vegan": "veg",
        "tag": "",
        "quantity": 0,
        "img": "https://i.pinimg.com/originals/f9/9c/e1/f99ce11733d7aa4103c9d1d1e2f6be17.jpg"
      }
    ]
  },
  {
    "id": 11114,
    "category": "Dinner",
    "items": [
      {
        "id": 920,
        "itemName": "Kathal Pulao",
        "price": 615,
        "vegan": "veg",
        "tag": "Chef's Special",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/dish_photos/1d6/0d3e9dc9e380dc11155580c1c84011d6.jpg?fit=around|130:130&crop=130:130;*,*"
      },
      {
        "id": 921,
        "itemName": "Subz Paneer Pulao",
        "price": 650,
        "vegan": "veg",
        "tag": "",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/dish_photos/d01/b428c38fa7bdc4bc2a40595000377d01.jpg?fit=around|130:130&crop=130:130;*,*"
      },
      {
        "id": 922,
        "itemName": "Chemmeen Pulao",
        "price": 620,
        "vegan": "Non veg",
        "tag": "",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/dish_photos/3b8/22f1f678027ae64255496270886723b8.jpg?fit=around|130:130&crop=130:130;*,*"
      },
      {
        "id": 923,
        "itemName": "Keema Pulao",
        "price": 620,
        "vegan": "Non veg",
        "tag": "Popular",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/dish_photos/e19/656634a615824be2bf028b884a322e19.jpg?fit=around|130:130&crop=130:130;*,*"
      }
    ]
  },
  {
    "id": 11116,
    "category": "Burgers and Beverages",
    "items": [
      {
        "id": 1560,
        "itemName": "1 Double Down Burger",
        "price": 249,
        "vegan": "Non veg",
        "tag": "Chef's Special",
        "quantity": 0,
        "img": "https://b.zmtcdn.com/data/dish_photos/23f/b52e772431509815c12e91ae7886723f.png?fit=around|130:130&crop=130:130;*,*"
      }]
    }
  ]

  
    return (
     error!=="" ? <h2 className="text-center text-danger border border-dark p-2 position-absolute top-50 start-50 translate-middle">{`${error}. Please try after sometime`}</h2> : loading === false ?
      (<div className="container-fluid menuLayout">
        {items && items.map((item) =>
        (<div key={item.id} className="container d-flex flex-column">
        <div className="h3 tt" id={item.category}>{item.category}</div>     
        <div className="menuCardWrapper d-flex flex-wrap">
        {item.items && item.items.map(i=>
          <MenuCard data={i} key={i.id}/>  
          )}    
        </div>
        </div> )
        )}
        </div>) :
        (
          <div className="spinnerBlock d-flex justify-content-center">
          <div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
        )
      
    )
}

export default React.memo(RestaurantMenu)
