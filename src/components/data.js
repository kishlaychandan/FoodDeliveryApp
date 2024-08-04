const data=[
    {
      "id": "1",
      "name": "Butter Chicken",
      "category": "North Indian",
      "price": 250,
      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
      "rating": 4.8,
      "toppings": [
        "Chicken",
        "Butter",
        "Tomato Gravy",
        "Cream",
        "Spices"
      ]
    },
    {
      "id": "2",
      "name": "Paneer Tikka",
      "category": "North Indian",
      "price": 199,
      "image": "https://www.sanjanafeasts.co.uk/wp-content/uploads/2020/02/Restaurant-Style-Paneer-Tikka-recipe.jpg",
      "rating": 4.7,
      "toppings": [
        "Paneer",
        "Yogurt",
        "Spices",
        "Onions",
        "Bell Peppers"
      ]
    },
    {
      "id": "3",
      "name": "Chole Bhature",
      "category": "North Indian",
      "price": 150,
      "image": "https://en-media.thebetterindia.com/uploads/2022/08/294156779_1082267416022212_8006411537588067133_n-1_11zon-1660981126.jpg",
      "rating": 4.6,
      "toppings": [
        "Chickpeas",
        "Spices",
        "Fried Bread",
        "Onions",
        "Tomatoes"
      ]
    },
    {
      "id": "4",
      "name": "Rogan Josh",
      "category": "North Indian",
      "price": 170,
      "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgj3xFgYagr_cc-Urne72-eBZ2run9fX8HmuDWQ0LEYrZuA55Q7b7uBXHw5GWa1WRKrMU8xK1RWPwJFawghxdoavxX8p1L4a8Ay35ffX5J0IDmDQdtxWeyaCYAIcfCraRGs9_Ya1iQxAJM/s709/Rogan-Josh-2-PictureTheRecipe.jpg",
      "rating": 4.9,
      "toppings": [
        "Lamb",
        "Yogurt",
        "Spices",
        "Onions",
        "Tomatoes"
      ]
    },
    {
      "id": "5",
      "name": "Dal Makhani",
      "category": "North Indian",
      "price": 180,
      "image": "https://rainbowplantlife.com/wp-content/uploads/2021/06/Dal-Makhani-edited-photos-5-of-6.jpg",
      "rating": 4.5,
      "toppings": [
        "Black Lentils",
        "Kidney Beans",
        "Butter",
        "Cream",
        "Spices"
      ]
    },
    {
      "id": "6",
      "name": "Aloo Gobi",
      "category": "North Indian",
      "price": 120,
      "image": "https://shwetainthekitchen.com/wp-content/uploads/2024/01/aloo-gobi.jpg",
      "rating": 4.4,
      "toppings": [
        "Potatoes",
        "Cauliflower",
        "Spices",
        "Onions",
        "Tomatoes"
      ]
    },
    {
      "id": "7",
      "name": "Paneer Biryani",
      "category": "North Indian",
      "price": 190,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OZQ2lnwk0jSO3ldFNfb4D5gbOn5tqYOrIQ&s",
      "rating": 4.8,
      "toppings": [
        "Rice",
        "Chicken",
        "Spices",
        "Yogurt",
        "Fried Onions"
      ]
    },
    {
      "id": "8",
      "name": "Malai Kofta",
      "category": "North Indian",
      "price": 160,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzQOpvnukeeRU2en1i98s6y3XgGL2EcfkLQ&s",
      "rating": 4.7,
      "toppings": [
        "Paneer Balls",
        "Cream",
        "Tomato Gravy",
        "Spices",
        "Nuts"
      ]
    },
    {
      "id": "9",
      "name": "Kadai Paneer",
      "category": "North Indian",
      "price": 190,
      "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/03/Best-Kadai-Paneer-Recipe.jpg",
      "rating": 4.6,
      "toppings": [
        "Paneer",
        "Bell Peppers",
        "Onions",
        "Tomato Gravy",
        "Spices"
      ]
    },
    {
      "id": "10",
      "name": "Tandoori Chicken",
      "category": "North Indian",
      "price": 200,
      "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe-500x500.jpg",
      "rating": 4.8,
      "toppings": [
        "Chicken",
        "Yogurt",
        "Spices",
        "Lemon",
        "Onions"
      ]
    },
    {
      "id": "11",
      "name": "Dosa",
      "category": "South Indian",
      "price": 80,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gcIkGQBSjY9-V7XZcW7F1Yw1RF1yry7g71O_Ox89wsbBKhyeiQIwLIFp95lMHVlNc-I&usqp=CAU",
      "rating": 4.7,
      "toppings": [
        "Rice Batter",
        "Lentil Batter",
        "Potato Filling",
        "Ghee",
        "Spices"
      ]
    },
    {
      "id": "12",
      "name": "Idli",
      "category": "South Indian",
      "price": 60,
      "image": "https://artofpalate.com/wp-content/uploads/2016/08/idli-with-rice-flour.jpg",
      "rating": 4.6,
      "toppings": [
        "Rice Batter",
        "Lentil Batter",
        "Coconut Chutney",
        "Sambar"
      ]
    },
    {
      "id": "13",
      "name": "Vada",
      "category": "South Indian",
      "price": 70,
      "image": "https://farm1.staticflickr.com/320/18912568232_686613c78c_o.jpg",
      "rating": 4.5,
      "toppings": [
        "Lentil Batter",
        "Spices",
        "Coconut Chutney",
        "Sambar"
      ]
    },
    {
      "id": "14",
      "name": "Uttapam",
      "category": "South Indian",
      "price": 80,
      "image": "https://www.idfreshfood.com/wp-content/uploads/2020/12/jinin.jpg",
      "rating": 4.4,
      "toppings": [
        "Rice Batter",
        "Lentil Batter",
        "Onions",
        "Tomatoes",
        "Spices"
      ]
    },
    {
      "id": "15",
      "name": "Bisi Bele Bath",
      "category": "South Indian",
      "price": 80,
      "image": "https://www.theculinarypeace.com/wp-content/uploads/2019/09/IMG-6010-2-757x1024.jpg",
      "rating": 4.6,
      "toppings": [
        "Rice",
        "Lentils",
        "Vegetables",
        "Tamarind",
        "Spices"
      ]
    },
    {
      "id": "16",
      "name": "Pongal",
      "category": "South Indian",
      "price": 80,
      "image": "https://www.sharmispassions.com/wp-content/uploads/2012/02/VenPongal6.jpg",
      "rating": 4.5,
      "toppings": [
        "Rice",
        "Moong Dal",
        "Ghee",
        "Cashews",
        "Spices"
      ]
    },
    {
      "id": "17",
      "name": "Appam",
      "category": "South Indian",
      "price": 70,
      "image": "https://cookingfromheart.com/wp-content/uploads/2016/09/Appam-4-1.jpg",
      "rating": 4.4,
      "toppings": [
        "Rice Batter",
        "Coconut Milk",
        "Sugar"
      ]
    },
    {
      "id": "18",
      "name": "Chettinad Chicken",
      "category": "South Indian",
      "price": 170,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRSuCt-iu7HhtPFe2r36go0TEss_gDjmDbg&s",
      "rating": 4.7,
      "toppings": [
        "Chicken",
        "Spices",
        "Coconut",
        "Curry Leaves"
      ]
    },
    {
      "id": "19",
      "name": "Kerala Parotta",
      "category": "South Indian",
      "price": 70,
      "image": "https://i.pinimg.com/736x/0e/12/f9/0e12f970004f1efbe238c696f00d68e2.jpg",
      "rating": 4.6,
      "toppings": [
        "Flour",
        "Ghee",
        "Salt"
      ]
    },
    {
      "id": "20",
      "name": "Fish Curry",
      "category": "South Indian",
      "price": 230,
      "image": "https://i2.wp.com/www.pepperdelight.com/wp-content/uploads/2016/01/pepper-delight-fish-curry-with-coconut-milk-1.jpg?resize=2036%2C2945",
      "rating": 4.8,
      "toppings": [
        "Fish",
        "Coconut Milk",
        "Tamarind",
        "Spices",
        "Curry Leaves"
      ]
    },
    {
      "id": "21",
      "name": "Margherita Pizza",
      "category": "Italian",
      "price": 120,
      "image": "https://www.tasteandtellblog.com/wp-content/uploads/2023/07/Margherita-Pizza-4.jpg",
      "rating": 4.8,
      "toppings": [
        "Tomato",
        "Mozzarella",
        "Basil",
        "Olive Oil"
      ]
    },
    {
      "id": "22",
      "name": "Spaghetti Carbonara",
      "category": "Italian",
      "price": 160,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLF7839URt1kRllnua84eoUKrzW-xr3gcug&s",
      "rating": 4.7,
      "toppings": [
        "Spaghetti",
        "Pancetta",
        "Eggs",
        "Parmesan Cheese",
        "Black Pepper"
      ]
    },
    {
      "id": "23",
      "name": "Lasagna",
      "category": "Italian",
      "price": 190,
      "image": "https://www.thecookierookie.com/wp-content/uploads/2017/02/dutch-oven-lasagna-9-of-10.jpg",
      "rating": 4.9,
      "toppings": [
        "Pasta Sheets",
        "Bolognese Sauce",
        "Béchamel Sauce",
        "Parmesan Cheese",
        "Mozzarella"
      ]
    },
    {
      "id": "24",
      "name": "Fettuccine Alfredo",
      "category": "Italian",
      "price": 170,
      "image": "https://www.modernhoney.com/wp-content/uploads/2019/04/Chicken-Fettucine-Alfredo-6.jpg",
      "rating": 4.8,
      "toppings": [
        "Fettuccine",
        "Cream",
        "Parmesan Cheese",
        "Butter",
        "Garlic"
      ]
    },
    {
      "id": "25",
      "name": "Bruschetta",
      "category": "Italian",
      "price": 180,
      "image": "https://yestoyolks.com/wp-content/uploads/2020/06/IMG_9109-2.jpg",
      "rating": 4.6,
      "toppings": [
        "Bread",
        "Tomato",
        "Basil",
        "Garlic",
        "Olive Oil"
      ]
    },
    {
      "id": "26",
      "name": "Risotto",
      "category": "Italian",
      "price": 170,
      "image": "https://evergreenkitchen.ca/wp-content/uploads/2021/10/Creamy-Mushroom-Risotto-0-4X5.jpg",
      "rating": 4.7,
      "toppings": [
        "Arborio Rice",
        "Chicken Broth",
        "Parmesan Cheese",
        "White Wine",
        "Butter"
      ]
    },
    {
      "id": "27",
      "name": "Tiramisu",
      "category": "Italian",
      "price": 210,
      "image": "https://jessicainthekitchen.com/wp-content/uploads/2022/09/Vegan-Tiramisu2501-e1663640834251.jpg",
      "rating": 4.9,
      "toppings": [
        "Mascarpone",
        "Ladyfingers",
        "Coffee",
        "Cocoa Powder",
        "Sugar"
      ]
    },
    {
      "id": "28",
      "name": "Tacos",
      "category": "Mexican",
      "price": 180,
      "image": "https://www.jocooks.com/wp-content/uploads/2020/08/ground-beef-tacos-1-11.jpg",
      "rating": 4.7,
      "toppings": [
        "Tortilla",
        "Beef",
        "Lettuce",
        "Cheese",
        "Tomato"
      ]
    },
    {
      "id": "29",
      "name": "Burrito",
      "category": "Mexican",
      "price": 200,
      "image": "https://reciperunner.com/wp-content/uploads/2013/12/black-bean-veggie-burritos-4.jpg",
      "rating": 4.8,
      "toppings": [
        "Tortilla",
        "Rice",
        "Beans",
        "Chicken",
        "Salsa"
      ]
    },
    {
      "id": "30",
      "name": "Quesadilla",
      "category": "Mexican",
      "price": 200,
      "image": "https://www.inspiredtaste.net/wp-content/uploads/2021/03/Vegetable-Quesadilla-Recipe-1200.jpg",
      "rating": 4.6,
      "toppings": [
        "Tortilla",
        "Cheese",
        "Chicken",
        "Onions",
        "Peppers"
      ]
    },
    {
      "id": "31",
      "name": "Enchiladas",
      "category": "Mexican",
      "price": 190,
      "image": "https://thecookingjar.com/wp-content/uploads/2024/02/beef-enchiladas-7.jpg",
      "rating": 4.7,
      "toppings": [
        "Tortilla",
        "Chicken",
        "Cheese",
        "Red Sauce",
        "Onions"
      ]
    },
    {
      "id": "32",
      "name": "Guacamole",
      "category": "Mexican",
      "price": 185,
      "image": "https://peasandcrayons.com/wp-content/uploads/2023/03/chunky-guacamole-recipe-tomato-cilantro-3.jpg",
      "rating": 4.8,
      "toppings": [
        "Avocado",
        "Onions",
        "Tomatoes",
        "Lime",
        "Cilantro"
      ]
    },
    {
      "id": "33",
      "name": "Churros",
      "category": "Mexican",
      "price": 140,
      "image": "https://www.everydayfamilycooking.com/wp-content/uploads/2023/11/Air-Fryer-Churros-19.jpg",
      "rating": 4.9,
      "toppings": [
        "Flour",
        "Cinnamon",
        "Sugar",
        "Chocolate Sauce"
      ]
    },
    {
      "id": "34",
      "name": "Nachos",
      "category": "Mexican",
      "price": 170,
      "image": "https://littlespicejar.com/wp-content/uploads/2023/06/California-Sushi-Nachos-6-735x1103.jpg",
      "rating": 4.6,
      "toppings": [
        "Tortilla Chips",
        "Cheese",
        "Jalapenos",
        "Sour Cream",
        "Salsa"
      ]
    },
    {
      "id": "35",
      "name": "Cheesecake",
      "category": "Desserts",
      "price": 220,
      "image": "https://natashaskitchen.com/wp-content/uploads/2020/05/Pefect-Cheesecake-7.jpg",
      "rating": 4.8,
      "toppings": [
        "Cream Cheese",
        "Graham Cracker Crust",
        "Sugar",
        "Vanilla"
      ]
    },
    {
      "id": "36",
      "name": "Brownie",
      "category": "Desserts",
      "price": 120,
      "image": "https://bakewithshivesh.com/wp-content/uploads/2023/10/cooker-brownie-1.jpg",
      "rating": 4.7,
      "toppings": [
        "Chocolate",
        "Sugar",
        "Butter",
        "Eggs",
        "Flour"
      ]
    },
    {
      "id": "37",
      "name": "Ice Cream",
      "category": "Desserts",
      "price": 120,
      "image": "https://www.eatingbirdfood.com/wp-content/uploads/2023/04/cottage-cheese-ice-cream-hero-NEW.jpg",
      "rating": 4.9,
      "toppings": [
        "Milk",
        "Cream",
        "Sugar",
        "Vanilla"
      ]
    },
    {
      "id": "38",
      "name": "Apple Pie",
      "category": "Desserts",
      "price": 260,
      "image": "https://natashaskitchen.com/wp-content/uploads/2019/10/Apple-Pie-2.jpg",
      "rating": 4.8,
      "toppings": [
        "Apples",
        "Cinnamon",
        "Sugar",
        "Pie Crust"
      ]
    },
    {
      "id": "39",
      "name": "Panna Cotta",
      "category": "Desserts",
      "price": 240,
      "image": "https://www.cookingclassy.com/wp-content/uploads/2021/05/panna-cotta-01.jpg",
      "rating": 4.9,
      "toppings": [
        "Cream",
        "Vanilla",
        "Gelatin",
        "Sugar",
        "Berries"
      ]
    },
    {
      "id": "40",
      "name": "Creme Brulee",
      "category": "Desserts",
      "price": 200,
      "image": "https://richanddelish.com/wp-content/uploads/2022/04/creme-brulee-1-683x1024.jpg",
      "rating": 4.8,
      "toppings": [
        "Cream",
        "Egg Yolks",
        "Sugar",
        "Vanilla",
        "Caramelized Sugar"
      ]
    },
    {
      "id": "41",
      "name": "Chocolate Cake",
      "category": "Desserts",
      "price": 250,
      "image": "https://www.halfbakedharvest.com/wp-content/uploads/2018/08/Better-Together-Chocolate-Vanilla-Birthday-Cake-1.jpg",
      "rating": 4.7,
      "toppings": [
        "Chocolate",
        "Flour",
        "Sugar",
        "Eggs",
        "Butter"
      ]
    },
    {
      "id": "42",
      "name": "Coca-Cola",
      "category": "Drinks",
      "price": 110,
      "image": "https://farm4.staticflickr.com/3180/3106042609_b6e3457855.jpg",
      "rating": 4.6,
      "toppings": []
    },
    {
      "id": "43",
      "name": "Orange Juice",
      "category": "Drinks",
      "price": 120,
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/05/Orangejuice.jpg",
      "rating": 4.8,
      "toppings": []
    },
    {
      "id": "44",
      "name": "Lemonade",
      "category": "Drinks",
      "price": 100,
      "image": "https://www.troprockin.com/wp-content/uploads/2022/03/Irish-Lemonade-540x720.jpg",
      "rating": 4.7,
      "toppings": []
    },
    {
      "id": "45",
      "name": "Iced Tea",
      "category": "Drinks",
      "price": 110,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Iced_Tea_from_flickr.jpg/1200px-Iced_Tea_from_flickr.jpg",
      "rating": 4.6,
      "toppings": []
    },
    {
      "id": "46",
      "name": "Coffee",
      "category": "Drinks",
      "price": 90,
      "image": "https://img.freepik.com/free-photo/delicious-coffee-beans-cup_23-2150691429.jpg",
      "rating": 4.9,
      "toppings": []
    },
    {
      "id": "47",
      "name": "Espresso",
      "category": "Drinks",
      "price": 100,
      "image": "https://images.nightcafe.studio/jobs/54UW6GkYrF6WHXU79NZ6/54UW6GkYrF6WHXU79NZ6--3--z3fzi.jpg?tr=w-1600,c-at_max",
      "rating": 4.8,
      "toppings": []
    },
    {
      "id": "48",
      "name": "Hot Chocolate",
      "category": "Drinks",
      "price": 140,
      "image": "https://feelgoodfoodie.net/wp-content/uploads/2021/11/how-to-make-hot-chocolate-7.jpg",
      "rating": 4.9,
      "toppings": []
    },
    {
      "id": "49",
      "name": "Smoothie",
      "category": "Drinks",
      "price": 120,
      "image": "https://realfoodwholelife.com/wp-content/uploads/2022/11/Mango-Pineapple-Smoothie-3.jpg",
      "rating": 4.8,
      "toppings": [
        "Fruit",
        "Yogurt",
        "Honey"
      ]
    },
    {
      "id": "50",
      "name": "Milkshake",
      "category": "Drinks",
      "price": 130,
      "image": "https://n5d6q8j8.rocketcdn.me/wp-content/uploads/2023/06/cookies-and-cream-milkshake-oreo-cookies.jpg",
      "rating": 4.7,
      "toppings": [
        "Milk",
        "Ice Cream",
        "Syrup"
      ]
    },
    {
      "id": "51",
      "name": "Mojito",
      "category": "Drinks",
      "price": 150,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-e0R__ZUvBHjxbnxmCR9qf4OAcwAANWKDw&s",
      "rating": 4.8,
      "toppings": [
        "Mint",
        "Lime",
        "Sugar",
        "Soda Water"
      ]
    },
    {
      "id": "52",
      "name": "Beer",
      "category": "Drinks",
      "price": 170,
      "image": "https://5.imimg.com/data5/NM/UC/DQ/SELLER-5217429/beer-glasses.jpg",
      "rating": 4.6,
      "toppings": []
    }
  ]
  
  export default data;