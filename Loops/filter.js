let Mobiles = [
    {name:'poco',
     price: 10000},
     {
        name:'samsung',
        price:20000
     },
     {
        name:'redmi',
        price:8000
     },
     {
        name:'iphone',
        price:40000
     }
]

let sort  = Mobiles.filter((item)=> item.price>35000 )
console.log(sort);