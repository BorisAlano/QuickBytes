const sliderTrack = document.getElementById('sliderTrack');

const recipes = [
  /*
  {
    title: "Fried Rice with Egg (Silog)",
    url: "fried-rice-with-egg.html",
    image: "/Assets/Recipepic/Almusal/FR.png"
  },
  {
    title: "Fried Rice with Egg (Mixed In)",
    url: "fried-rice-with-fried-egg.html",
    image: "/Assets/Recipepic/Almusal/mixFR.png"
  },
  {
    title: "Fried Rice with Chopped Hotdog",
    url: "fried-rice-with-chopped-hotdog.html",
    image: "/Assets/Recipepic/Almusal/hotdogFR.png"
  },
  {
    title: "Fried Rice with Canned Tuna",
    url: "fried-rice-with-canned-tuna-flakes.html",
    image: "/Assets/Recipepic/Almusal/cantunaFR.png"
  },
  {
    title: "Fried Rice with Tuyo",
    url: "fried-rice-with-tuyo-flakes.html",
    image: "/Assets/Recipepic/Almusal/tuyoFR.png"
  },
  {
  title: "Garlic Tomato Fried Rice",
  url: "garlic-tomato-fried-rice.html",
  image: "/Assets/Recipepic/Almusal/tomatoFR.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/kangkongTOR.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/kaninTOR.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/ketchupFR.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/lugaw.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/maluggayRP.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/malunggaySE.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/mixFR.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/omurice.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/sardinasTOR.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/SET.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/tofu.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/tomatoegg.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/tomatoFR.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/tomateSE.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/toyomansiFR.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/tuyoFR.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/tuyongdilisFR.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Almusal/TYFR.png"
  },

  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/bananapancake.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/bananaq.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/bihonsardines.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/boiledkamote.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/cheesericeballs.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/egginahole.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/eggSW.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/friedbanana.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/hatdogballs.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/hotdogSW.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/kamote.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/kamotefries.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/kwekkwek.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/malunggayballs.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/maruya.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/pancitcanton.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/pancitcantoncheese.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/ricecorndog.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/ricesheesebombs.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/ricetoast.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/saltedeggspread.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/saltedpotato.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/tunaSW.png"
  },
  {
  title: "Rice Sticks",
  url: "recipes/rice-sticks.html",
  image: "/Assets/Recipepic/Meryenda/wrappercheese.png"
  },
  */

  {
    name: "Fried Rice with Egg (Silog)",
    description: "Classic breakfast with garlic fried rice and a sunny-side-up egg.",
    image: "/Assets/Recipepic/Almusal/FR.png",
    category: "Almusal/Fried Rice Series",
    page: "/recipes/fried-rice-with-egg.html"
  },
  {
    name: "Fried Rice with Egg (Mixed In)",
    description: "Simple stir-fried rice with egg mixed in.",
    image: "/Assets/Recipepic/Almusal/mixFR.png",
    category: "Almusal/Fried Rice Series",
    page: "/recipes/fried-rice-with-fried-egg.html"
  },
  {
    name: "Fried Rice with Chopped Hotdog",
    description: "Garlic fried rice with sliced hotdogs.",
    image: "/Assets/Recipepic/Almusal/hotdogFR.png",
    category: "Almusal/Hotdog Series",
    page: "/recipes/fried-rice-with-chopped-hotdog.html"
  },
  {
    name: "Fried Rice with Canned Tuna",
    description: "Fried rice with canned tuna.",
    image: "/Assets/Recipepic/Almusal/cantunaFR.png",
    category: "Almusal/Canned Tuna Series",
    page: "/recipes/fried-rice-with-canned-tuna-flakes.html"
  },
  {
    name: "Fried Rice with Tuyo",
    description: "Fried rice with dried fish flakes.",
    image: "/Assets/Recipepic/Almusal/tuyoFR.png",
    category: "Almusal/Tuyo Series",
    page: "/recipes/fried-rice-with-tuyo-flakes.html"
  },
  {
    name: "Garlic Tomato Fried Rice",
    description: "Fried rice with garlic and tomatoes.",
    image: "/Assets/Recipepic/Almusal/tomatoFR.png",
    category: "Almusal/Fried Rice Series",
    page: "/recipes/garlic-tomato-fried-rice.html"
  },
  {
    name: "Scrambled Egg with Tomato",
    description: "Scrambled eggs with diced tomatoes.",
    image: "/Assets/Recipepic/Almusal/tomatoSE.png",
    category: "Almusal/Tomato Series",
    page: "/recipes/scrambled-egg-with-tomato.html"
  },
  {
    name: "Tortang Hotdog",
    description: "Hotdog omelet.",
    image: "/Assets/Recipepic/Almusal/hotdogTOR.png",
    category: "Almusal/Hotdog Series",
    page: "/recipes/tortang-hotdog.html"
  },
  {
    name: "Scrambled Egg with Malunggay",
    description: "Scrambled eggs with malunggay leaves.",
    image: "/Assets/Recipepic/Almusal/malunggaySE.png",
    category: "Almusal/Malunggay Series",
    page: "/recipes/scrambled-egg-with-malunggay.html"
  },
  {
    name: "Tortang Corned Beef",
    description: "Corned beef omelet.",
    image: "/Assets/Recipepic/Almusal/cornbeefTOR.png",
    category: "Almusal/Corned Beef Series",
    page: "/recipes/tortang-corned-beef.html"
  },
  {
    name: "Salted Egg with Tomatoes",
    description: "Chopped salted egg and tomatoes.",
    image: "/Assets/Recipepic/Almusal/SET.png",
    category: "Almusal/Itlog Series",
    page: "/recipes/salted-egg-with-tomatoes.html"
  },
  {
    name: "Rice and Fried Egg with Toyomansi",
    description: "Rice and fried egg with soy sauce and calamansi.",
    image: "/Assets/Recipepic/Almusal/TYFR.png",
    category: "Almusal/Itlog Series",
    page: "/recipes/rice-and-fried-egg-with-toyomansi.html"
  },
  {
    name: "Fried Tofu with Toyomansi",
    description: "Fried tofu with soy sauce and calamansi.",
    image: "/Assets/Recipepic/Almusal/tofu.png",
    category: "Almusal/Tokwa Series",
    page: "/recipes/fried-tofu-with-toyomansi.html"
  },
  {
    name: "Tortang Sardinas",
    description: "Sardines omelet.",
    image: "/Assets/Recipepic/Almusal/sardinasTOR.png",
    category: "Almusal/Sardinas Series",
    page: "/recipes/tortang-sardinas.html"
  },
  {
    name: "Tortang Kanin",
    description: "Fried rice omelet with vegetables.",
    image: "/Assets/Recipepic/Almusal/kaninTOR.png",
    category: "Almusal/Kanin Series",
    page: "/recipes/tortang-kanin.html"
  },
  {
    name: "Tortang Kangkong",
    description: "Water spinach omelet.",
    image: "/Assets/Recipepic/Almusal/kangkongTOR.png",
    category: "Almusal/Kangkong Series",
    page: "/recipes/tortang-kangkong.html"
  },
  {
    name: "Arroz a la Budget",
    description: "Rice porridge made from leftover rice.",
    image: "/Assets/Recipepic/Almusal/lugaw.png",
    category: "Almusal/Bahaw Series",
    page: "/recipes/arroz-a-la-budget.html"
  },
  {
    name: "Champorado (Bahaw + Milo)",
    description: "Sweet chocolate rice porridge with Milo.",
    image: "/Assets/Recipepic/Almusal/champorado.png",
    category: "Almusal/BahawMilo Series",
    page: "/recipes/champorado.html"
  },
  {
    name: "Egg and Carrot Pancake",
    description: "Savory pancake made from grated carrots and egg.",
    image: "/Assets/Recipepic/Almusal/carrotPC.png",
    category: "Almusal/Carrot Series",
    page: "/recipes/Egg-and-Carrot-Pancake.html"
  },
  {
    name: "Malunggay Rice Patties",
    description: "Rice patties with malunggay leaves.",
    image: "/Assets/Recipepic/Almusal/maluggayRP.png",
    category: "Almusal/Malunggay Series",
    page: "/recipes/Malunggay-Rice-Patties.html"
  },
  {
    name: "Omurice",
    description: "Omelet rice.",
    image: "/Assets/Recipepic/Almusal/omurice.png",
    category: "Almusal/Omelette Series",
    page: "/recipes/Omurice-Omelette-Rice.html"
  },
  {
    name: "Tomato Egg Rice Stir",
    description: "Stir-fried rice with scrambled eggs and tomatoes.",
    image: "/Assets/Recipepic/Almusal/tomatoegg.png",
    category: "Almusal/Tomato Series",
    page: "/recipes/Tomato-Egg-Rice-Stir.html"
  },
  {
    name: "Fried Rice with Dilis and Coffee",
    description: "Fried rice with dried anchovies and coffee.",
    image: "/Assets/Recipepic/Almusal/tuyongdilisFR.png",
    category: "Almusal/Dilis Series",
    page: "/recipes/Fried-Rice-with-Tuyo-or-Dilis-and-Coffee.html"
  },
  {
    name: "Ketchup Fried Rice with Scrambled Egg",
    description: "Ketchup-flavored fried rice with scrambled egg.",
    image: "/Assets/Recipepic/Almusal/ketchupFR.png",
    category: "Almusal/Ketchup Series",
    page: "/recipes/Ketchup-Fried-Rice-with-Scrambled-Egg.html"
  },
  {
    name: "Toyomansi Fried Rice with Fried Egg",
    description: "Fried rice flavored with a soy-calamansi blend, topped with a fried egg for a salty-citrusy kick.",
    image: "/Assets/Recipepic/Almusal/TYFR.png",
    category: "Almusal/Ketchup Series",
    page: "/recipes/Toyomansi-Fried-Rice-with-Fried-Egg.html"
  },

  /*Lunch*/
  {
    name: "Adobong Egg with Tokwa (Tofu)",
    description: "Hard-boiled eggs and tofu simmered in a classic adobo sauce made of soy sauce, vinegar, garlic, and bay leaves.",
    image: "/Assets/Recipepic/Tanghalian/adobongeggtofu.png",
    category: "Tanghalian/Hapunan/Adobo Series",
    page: "/recipes/adobongeggtofu.html"
  },
  {
    name: "Adobong Tokwa with Potatoes",
    description: "Crispy tofu cubes and tender potatoes cooked in savory adobo-style sauce for a hearty meatless option.",
    image: "/Assets/Recipepic/Tanghalian/adobongtokwapotato.png",
    category: "Tanghalian/Hapunan/Adobo Series",
    page: "/recipes/adobongtokwapotato.html"
  },
  {
    name: "Adobong Kangkong with Tokwa",
    description: "Water spinach (kangkong) and fried tofu stewed in soy-vinegar adobo sauce—simple and satisfying.",
    image: "/Assets/Recipepic/Tanghalian/adobongkangkong.png",
    category: "Tanghalian/Hapunan/Adobo Series",
    page: "/recipes/adobongkangkong.html"
  },
  {
    name: "Adobong Sitaw with Tokwa",
    description: "String beans and tofu simmered together in a flavorful adobo sauce, great with rice.",
    image: "/Assets/Recipepic/Tanghalian/adobongsitaw.png",
    category: "Tanghalian/Hapunan/Adobo Series",
    page: "/recipes/adobongsitaw.html"
  },
  {
    name: "Adobong Pechay with Tokwa",
    description: "Chinese cabbage (pechay) and tofu in a tangy, garlicky adobo blend—nutritious and easy to cook.",
    image: "/Assets/Recipepic/Tanghalian/adobongpetchay.png",
    category: "Tanghalian/Hapunan/Adobo Series",
    page: "/recipes/adobongpechay.html"
  },
  {
    name: "Ginisang Repolyo with Corned Beef",
    description: "Shredded cabbage sautéed with canned corned beef for a quick and filling ulam.",
    image: "/Assets/Recipepic/Tanghalian/ginisangrepolyocornbeef.png",
    category: "Tanghalian/Hapunan/Ginisa Series",
    page: "/recipes/ginisangrepolyocornbeef.html"
  },

  {
    name: "Ginisang Talbos ng Kamote with Tofu",
    description: "Sautéed sweet potato leaves with tofu in garlic and onions—packed with iron and fiber.",
    image: "/Assets/Recipepic/Tanghalian/kamotetofu.png",
    category: "Tanghalian/Hapunan/Ginisa Series",
    page: "/recipes/kamotetofu.html"
  },
  {
    name: "Ginisang Sayote with Sardines",
    description: "Chayote sautéed with canned sardines in tomato sauce, creating a budget-friendly, flavorful dish.",
    image: "/Assets/Recipepic/Tanghalian/ginisangsayotesardines.png",
    category: "Tanghalian/Hapunan/Ginisa Series",
    page: "/recipes/ginisangsayotesardines.html"
  },
  {
    name: "Ginisang Corned Beef with Potatoes",
    description: "Corned beef sautéed with diced potatoes, garlic, and onions for a comforting dish best paired with rice.",
    image: "/Assets/Recipepic/Tanghalian/cornbeefpotato.png",
    category: "Tanghalian/Hapunan/Ginisa Series",
    page: "/recipes/cornbeefpotato.html"
  },
   {
    name: "Ginisang Sayote with Corned Beef",
    description: "Quick sauté of chayote and corned beef for a nutritious and affordable meal.",
    image: "/Assets/Recipepic/Tanghalian/cornbeefsayote.png",
    category: "Tanghalian/Hapunan/Ginisa Series",
    page: "/recipes/cornbeefsayote.html"
  },
  {
    name: "Ginisang Sardinas with Misua",
    description: "Canned sardines and misua noodles cooked together for a warm, savory noodle soup.",
    image: "/Assets/Recipepic/Tanghalian/sardinasmiswa.png",
    category: "Tanghalian/Hapunan/Ginisa Series",
    page: "/recipes/sardinasmisua.html"
  },
  {
    name: "Lucky Me Noodles with Malunggay",
    description: "Instant noodles boosted with fresh malunggay leaves for added nutrients and flavor.",
    image: "/Assets/Recipepic/Tanghalian/lucymemaluggay.png",
    category: "Tanghalian/Hapunan/LuckyMe Series",
    page: "/recipes/luckymemalunggay.html"
  },
  {
    name: "Tokwang Sisig",
    description: "Crispy tofu bits tossed in spicy, tangy sisig-style dressing with onions and calamansi.",
    image: "/Assets/Recipepic/Tanghalian/tofusisisg.png",
    category: "Tanghalian/Hapunan/Tokwa Series",
    page: "/recipes/tofusisig.html"
  },
  {
    name: "Egg Drop Soup (with Misua or Sotanghon)",
    description: "A light and savory soup with beaten egg ribbons and either misua or sotanghon noodles.",
    image: "/Assets/Recipepic/Tanghalian/eggsoupmisua.png",
    category: "Tanghalian/Hapunan/Itlog Series",
    page: "/recipes/eggsoupmisua.html"
  },
  {
    name: "Ginisang Mixed Veggies (Budget Pakbet)",
    description: "Assorted vegetables sautéed in garlic, onions, and bagoong—an affordable version of pakbet.",
    image: "/Assets/Recipepic/Tanghalian/mixedveg.png",
    category: "Tanghalian/Hapunan/Ginisa Series",
    page: "/recipes/mixedveg.html"
  },
  {
    name: "Ginisang Upo with Giniling (with Egg)",
    description: "Bottle gourd cooked with ground meat and topped with scrambled or poached egg.",
    image: "/Assets/Recipepic/Tanghalian/upoginiling.png",
    category: "Tanghalian/Hapunan/Ginisa Series",
    page: "/recipes/upoginiling.html"
  },
  {
    name: "Tortang Talong (Eggplant Omelette)",
    description: "Grilled eggplant dipped in egg batter and pan-fried into a savory Filipino-style omelet.",
    image: "/Assets/Recipepic/Tanghalian/tortangtalong.png",
    category: "Tanghalian/Hapunan/Talong Series",
    page: "/recipes/tortangtalong.html"
  },
  {
    name: "Sayote Soup with Egg and Misua",
    description: "Chayote simmered in broth with misua noodles and egg—light yet satisfying.",
    image: "/Assets/Recipepic/Tanghalian/sayotemisua.png",
    category: "Tanghalian/Hapunan/Misua Series",
    page: "/recipes/sayotemisua.html"
  },
  {
    name: "Ginisang Togue with Tokwa (Bean Sprouts & Tofu)",
    description: "Crunchy bean sprouts and tofu stir-fried with garlic and soy sauce—simple and healthy.",
    image: "/Assets/Recipepic/Tanghalian/toge.png",
    category: "Tanghalian/Hapunan/Ginisa Series",
    page: "/recipes/toge.html"
  },
  {
    name: "Cabbage Pancake (Filipino Okoy Style)",
    description: "Shredded cabbage mixed with batter and pan-fried like okoy, often dipped in vinegar.",
    image: "/Assets/Recipepic/Tanghalian/cabbagepancake.png",
    category: "Tanghalian/Hapunan/Repolyo Series",
    page: "/recipes/cabbagepancake.html"
  },
  {
    name: "Stir-Fried Ampalaya with Egg",
    description: "Bitter gourd sautéed with egg, garlic, and onions—a classic healthy Filipino favorite.",
    image: "/Assets/Recipepic/Tanghalian/ampalaya.png",
    category: "Tanghalian/Hapunan/Ampalaya Series",
    page: "/recipes/ampalaya.html"
  },
  {
    name: "Misua Soup with Malunggay and Tokwa",
    description: "Stir-fried rice with scrambled eggs and sautéed tomatoes for a sweet-savory taste.",
    image: "/Assets/Recipepic/Tanghalian/malunggaymisua.png",
    category: "Tanghalian/Hapunan/Misua Series",
    page: "/recipes/malunggaymisua.html"
  },
   {
    name: "Menudong Hotdog (Hotdog Menudo)",
    description: "A playful take on menudo using hotdogs, potatoes, and tomato sauce for a kid-friendly version.",
    image: "/Assets/Recipepic/Tanghalian/menudonghotdog.png",
    category: "Tanghalian/Hapunan/Hotdog Series",
    page: "/recipes/menudonghotdog.html"
  },
  {
    name: "Spicy Ginisang Repolyo (Sautéed Spicy Cabbage)",
    description: "Sautéed cabbage in garlic and chili for a spicy, crunchy, and low-cost dish.",
    image: "/Assets/Recipepic/Tanghalian/ginisangrepolyo.png",
    category: "Tanghalian/Hapunan/Ginisa Series",
    page: "/recipes/ginisangrepolyo.html"
  },
  {
    name: "Budget Chop Suey with Tofu",
    description: "Fried rice flavored with a soy-calamansi blend, topped with a fried egg for a salty-citrusy kick.",
    image: "/Assets/Recipepic/Tanghalian/chopsuey.png",
    category: "Tanghalian/Hapunan/Chop Suey Series",
    page: "/recipes/chopsuey.html"
  },

  /*Meryenda*/
  {
    name: "Boiled Kamote (Sweet Potato)",
    description: "Boiled Kamote (Sweet Potato) Simple, nutritious boiled sweet potatoes served plain or with margarine.",
    image: "/Assets/Recipepic/Meryenda/boiledkamote.png",
    category: "Meryenda Series",
    page: "/recipes/boiled-kamote.html"
  },
  {
    name: "Canned Tuna Sandwich",
    description: "Canned Tuna Sandwich Bread filled with canned tuna mixed with mayo or calamansi for a quick and protein-rich snack.",
    image: "/Assets/Recipepic/Meryenda/tunaSW.png",
    category: "Meryenda Series",
    page: "/recipes/canned-tuna-sandwich.html"
  },
  {
    name: "Caramelized Banana (Saba)",
    description: "Caramelized Banana (Saba) Ripe saba bananas glazed with sugar while frying, creating a sweet and sticky coating.",
    image: "/Assets/Recipepic/Meryenda/bananaq.png",
    category: "Meryenda Series",
    page: "/recipes/caramelized-banana.html"
  },
  {
    name: "Caramelized Kamote (Sweet Potato)",
    description: "Caramelized Kamote (Sweet Potato) Sweet potato slices fried and coated in sugar syrup for a sticky, chewy treat.",
    image: "/Assets/Recipepic/Meryenda/kamote.png",
    category: "Meryenda Series",
    page: "/recipes/caramelized-kamote.html"
  },
  {
    name: "Cheese Rice Balls",
    description: "Cheese Rice Balls Cooked rice mixed with cheese, formed into balls and lightly fried or baked.",
    image: "/Assets/Recipepic/Meryenda/cheesericeballs.png",
    category: "Meryenda Series",
    page: "/recipes/cheese-rice-balls.html"
  },
  {
    name: "Egg in a Hole",
    description: "Egg in a Hole(Poor Man’ s Toad - in - the - Hole) Bread with a hole in the middle, fried with an egg cracked in the center— crispy and hearty.",
    image: "/Assets/Recipepic/Meryenda/egginahole.png",
    category: "Meryenda Series",
    page: "/recipes/egg-in-a-hole.html"
  },
  {
    name: "Egg Sandwich",
    description: "Egg Sandwich Soft - boiled or scrambled egg mixed with mayo and seasonings, spread between bread slices.",
    image: "/Assets/Recipepic/Meryenda/eggSW.png",
    category: "Meryenda Series",
    page: "/recipes/egg-sandwich.html"
  },
  {
    name: "Fried Banana(Saba)",
    description: "Fried Banana(Saba) Saba bananas sliced and fried until golden— simple, sweet, and crunchy.",
    image: "/Assets/Recipepic/Meryenda/friedbanana.png",
    category: "Meryenda Series",
    page: "/recipes/fried-banana.html"
  },
  {
    name: "Hotdog Balls",
    description: "Hotdog Balls Hotdog slices coated in batter or breading and deep - fried into crunchy bite - sized snacks.",
    image: "/Assets/Recipepic/Meryenda/hatdogballs.png",
    category: "Meryenda Series",
    page: "/recipes/hotdog-balls.html"
  },
  {
    name: "Hotdog Coated with Rice(Rice Corn Dog Style)",
    description: "Hotdog Coated with Rice(Rice Corn Dog Style) Hotdog skewered and wrapped with sticky rice, then fried— similar to Korean rice dogs.",
    image: "/Assets/Recipepic/Meryenda/ricecorndog.png",
    category: "Meryenda Series",
    page: "/recipes/hotdog-coated-with-rice.html"
  },
  {
    name: "Hotdog Sandwich",
    description: "Hotdog Sandwich Pan-fried hotdog served in bread with ketchup, mayo, or cheese for a classic merienda.",
    image: "/Assets/Recipepic/Meryenda/hotdogSW.png",
    category: "Meryenda Series",
    page: "/recipes/hotdog-sandwich.html"
  },
  {
    name: "Kwek-Kwek (Orange Egg Fritters)",
    description: "Kwek-Kwek (Orange Egg Fritters) Quail eggs coated in orange batter and deep-fried—often dipped in spicy vinegar or sauce.",
    image: "/Assets/Recipepic/Meryenda/kwekkwek.png",
    category: "Meryenda Series",
    page: "/recipes/kwek-kwek.html"
  },
  {
    name: "Lumpia Wrapper with Cheese Powder",
    description: "Lumpia Wrapper with Cheese Powder Crispy fried lumpia wrappers dusted with cheese powder—crunchy and addicting.",
    image: "/Assets/Recipepic/Meryenda/wrappercheese.png",
    category: "Meryenda Series",
    page: "/recipes/lumpia-wrapper-with-cheese-powder.html"
  },
  {
    name: "Malunggay Balls (Veggie Fritters)",
    description: "Malunggay Balls (Veggie Fritters) Malunggay leaves mixed with flour and spices, then deep-fried into crispy veggie balls.",
    image: "/Assets/Recipepic/Meryenda/malunggayballs.png",
    category: "Meryenda Series",
    page: "/recipes/malunggay-balls.html"
  },
  {
    name: "Maruya",
    description: "Maruya (Pritong Saba / Banana Fritters) Sliced bananas dipped in batter and fried into fluffy, golden fritters.",
    image: "/Assets/Recipepic/Meryenda/maruya.png",
    category: "Meryenda Series",
    page: "/recipes/maruya.html"
  },
  {
    name: "Mashed Banana Pancake",
    description: "Mashed Banana Pancake Ripe bananas mashed and mixed with flour or egg, pan-fried like a soft, sweet pancake.",
    image: "/Assets/Recipepic/Meryenda/bananapancake.png",
    category: "Meryenda Series",
    page: "/recipes/mashed-banana-pancake.html"
  },
  {
    name: "Pancit Bihon with Sardines",
    description: "Pancit Bihon with Sardines Thin rice noodles sautéed with canned sardines and veggies— great as a filling snack or light meal.",
    image: "/Assets/Recipepic/Meryenda/bihonsardines.png",
    category: "Meryenda Series",
    page: "/recipes/pancit-bihon-with-sardines.html"
  },
  {
    name: "Pancit Canton with Cheese",
    description: "Pancit Canton with Cheese Stir-fried instant noodles mixed with grated cheese for a creamy twist on a favorite.",
    image: "/Assets/Recipepic/Meryenda/pancitcantoncheese.png",
    category: "Meryenda Series",
    page: "/recipes/pancit-canton-with-cheese.html"
  },
  {
    name: "Pancit Canton with Egg",
    description: "Pancit Canton with Egg Instant pancit canton noodles topped with a fried or boiled egg.",
    image: "/Assets/Recipepic/Meryenda/pancitcanton.png",
    category: "Meryenda Series",
    page: "/recipes/pancit-canton-with-egg.html"
  },
  {
    name: "Rice Cheese Bomb",
    description: "Rice Cheese Bomb Rice balls stuffed with cheese, coated in crumbs or batter, and fried until gooey inside.",
    image: "/Assets/Recipepic/Meryenda/ricesheesebombs.png",
    category: "Meryenda Series",
    page: "/recipes/rice-cheese-bomb.html"
  },
  {
    name: "Rice Sticks",
    description: "Rice Sticks (Crispy Fried Rice Logs) Leftover rice shaped into logs, fried until crispy on the outside and chewy inside.",
    image: "/Assets/Recipepic/Meryenda/samplericestick.jpeg",
    category: "Meryenda Series",
    page: "/recipes/rice-sticks.html"
  },
  {
    name: "Salted Egg Spread",
    description: "Salted Egg Spread and Bread Mashed salted egg mixed with butter or mayo, spread on warm bread for a salty, rich flavor.",
    image: "/Assets/Recipepic/Meryenda/saltedeggspread.png",
    category: "Meryenda Series",
    page: "/recipes/salted-egg-spread.html"
  },
  {
    name: "Salted Potato Chips",
    description: "Salted Potato Chips Homemade thin-sliced potatoes fried until crisp and seasoned with salt.",
    image: "/Assets/Recipepic/Meryenda/saltedpotato.png",
    category: "Meryenda Series",
    page: "/recipes/salted-potato-chips.html"
  },
  {
    name: "Kamote Fries",
    description: "Sweet Kamote Strips(Kamote Fries) Thin kamote slices deep - fried like fries, served with sugar or syrup.",
    image: "/Assets/Recipepic/Meryenda/kamotefries.png",
    category: "Meryenda Series",
    page: "/recipes/sweet-kamote-strips.html"
  },

];

const fullList = [...recipes, ...recipes];

fullList.forEach(recipe => {
  const link = document.createElement('a');
  link.href = recipe.page;
  link.className = 'slider-item';

  const img = document.createElement('img');
  img.src = recipe.image;
  img.alt = recipe.name;

  const title = document.createElement('div');
  title.className = 'slider-title';
  title.textContent = recipe.name;

  link.appendChild(img);
  link.appendChild(title);
  sliderTrack.appendChild(link);
});
