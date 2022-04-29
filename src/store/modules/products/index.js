import mutations from "./mutations.js"
import getters from "./getters.js"
import actions from "./actions.js"

export default {
  // namespaced: true,
  state() {
    return {

      tshirts: [
        {
          id: '13',
          name: 'T-SHIRT ALIEN',
          color: 'czarny',
          price: 99.99,
          image: [
            {first: require("../../../assets/images/14.png")},
            {second: require("../../../assets/images/14a.png")}
          ],
          stock: "NOWOSC",
          category: 'tshirt',
          info: 'Bluza z kapturem.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
        },
        {
          id: '14',
          name: 'Hoodie ALIEN',
          color: 'czarny',
          price: 249.99,
          image: [
            {first: require("../../../assets/images/13.png")},
            {second: require("../../../assets/images/13a.png")}
          ],
          stock: "NOWOSC",
          category: 'tshirt',
          info: 'Bluza z kapturem.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
          desc: `dwuwarstwowy kaptur; taśma wzmacniająca na karku z pojedynczej dzianiny; z przodu kieszeń-kangurka. `
        },
      ],

      bestsellerProducts: [
        {
          id: '7',
          name: 'Hoodie FIRE DRAGON',
          color: 'pomaranczowy',
          price: 249.99,
          image: require("../../../assets/images/7.png"),
          stock: "RESTOCK",
        },
        {
          id: '8',
          name: 'Hoodie UNLUCKY',
          color: 'czarny',
          price: 249.99,
          image: require("../../../assets/images/8.png"),
          stock: "RESTOCK",
        },
        {
          id: '9',
          name: 'Jogger UNSTABLE WORLD slim',
          color: 'czarny',
          price: 249.99,
          image: require("../../../assets/images/9.png"),
          stock: "RESTOCK",
        },
        {
          id: '10',
          name: 'Hoodie Welur 7MORE7',
          color: 'blekit',
          price: 349.99,
          image: require("../../../assets/images/10.png"),
          stock: "RESTOCK",
        },
        {
          id: '11',
          name: 'Jogger Welur 7MORE7',
          color: 'czarny',
          price: 189.99,
          image: require("../../../assets/images/11.png"),
          stock: "RESTOCK",
        },
        {
          id: '12',
          name: 'Hoodie Welur SICARIOS',
          color: 'bronze',
          price: 349.99,
          image: require("../../../assets/images/12.png"),
          stock: "RESTOCK",
        },
        {
          id: '13',
          name: 'T-SHIRT ALIEN',
          color: 'czarny',
          price: 99.99,
          image: require("../../../assets/images/13.png"),
          stock: "RESTOCK",
        },
        {
          id: '14',
          name: 'Hoodie ALIEN',
          color: 'czarny',
          price: 249.99,
          image: require("../../../assets/images/14.png"),
          stock: "RESTOCK",
        },
      ],

      shopProducts: [
        {
          id: '1',
          name: 'Czapka 77 #1',
          color: 'czarny',
          price: 99.99,
          image: [
            {first: require("../../../assets/images/1.png")},
            {second: require("../../../assets/images/1a.png")},
          ],
          stock: 'RESTOCK',
          category: 'akcesoria',
          info: 'Wykonana z wysokiej jakości wełny Merino 100%',
          gender: 'unisex',
          size: ['uniwersalny'],
          qty: 1,
        },
        {
          id: '2',
          name: 'Jogger Welur 7MORE7',
          color: 'blekit',
          price: 189.99,
          image: [
            {first: require("../../../assets/images/2.png")},
            {second: require("../../../assets/images/2a.png")}
          ],
          stock: "NOWOSC",
          category: 'spodnie',
          info: 'Spodnie welurowe. 80% bawełna, 20% poliester.',
          gender: 'unisex',
          size: ['M'],
          qty: 1,
        },
        {
          id: '3',
          name: 'Jogger Welur SICARIOS',
          color: 'bialy',
          price: 199.99,
          image: [
            {first: require("../../../assets/images/3.png")},
            {second: require("../../../assets/images/3a.png")}
          ],
          stock: "NOWOSC",
          category: 'spodnie',
          info: 'Spodnie welurowe. 80% bawełna, 20% poliester.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
        },
        {
          id: '4',
          name: 'Hoodie Welur SICARIOS',
          color: 'bezowy',
          price: 349.99,
          image: [
            {first: require("../../../assets/images/4.png")},
            {second: require("../../../assets/images/4a.png")}
          ],
          stock: "NOWOSC",
          category: 'hoodie',
          info: '80% bawełna, 20% poliester.',
          gender: 'unisex',
          size: ['S', 'M', 'L', 'XL'],
          qty: 1,
          desc: `dwuwarstwowy kaptur; taśma wzmacniająca na karku z pojedynczej dzianiny; z przodu kieszeń-kangurka. `
        },
        {
          id: '5',
          name: 'Jogger Welur 7MORE7',
          color: 'grafit',
          price: 189.99,
          image: [
            {first: require("../../../assets/images/5.png")},
            {second: require("../../../assets/images/5a.png")}
          ],
          stock: "NOWOSC",
          category: 'spodnie',
          info: 'Spodnie welurowe. 80% bawełna, 20% poliester.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
        },
        {
          id: '6',
          name: 'Hoodie Welur SICARIOS',
          color: 'czerwony',
          price: 349.99,
          image: [
            {first: require("../../../assets/images/6.png")},
            {second: require("../../../assets/images/6a.png")}
          ],
          stock: "NOWOSC",
          category: 'hoodie',
          info: 'Bluza z kapturem.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
          desc: `dwuwarstwowy kaptur; taśma wzmacniająca na karku z pojedynczej dzianiny; z przodu kieszeń-kangurka. `
        },
        {
          id: '7',
          name: 'Hoodie FIRE DRAGON',
          color: 'pomaranczowy',
          price: 249.99,
          image: [
            {first: require("../../../assets/images/7.png")},
            {second: require("../../../assets/images/7a.png")}
          ],
          stock: "NOWOSC",
          category: 'hoodie',
          info: 'Bluza z kapturem.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
          desc: `dwuwarstwowy kaptur; taśma wzmacniająca na karku z pojedynczej dzianiny; z przodu kieszeń-kangurka. `

        },
        {
          id: '8',
          name: 'Hoodie UNLUCKY',
          color: 'czarny',
          price: 249.99,
          image: [
            {first: require("../../../assets/images/8.png")},
            {second: require("../../../assets/images/8a.png")}
          ],
          stock: "NOWOSC",
          category: 'hoodie',
          info: 'Bluza z kapturem.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
          desc: `dwuwarstwowy kaptur; taśma wzmacniająca na karku z pojedynczej dzianiny; z przodu kieszeń-kangurka. `

        },
        {
          id: '9',
          name: 'Jogger UNSTABLE WORLD slim',
          color: 'czarny',
          price: 249.99,
          image: [
            {first: require("../../../assets/images/9.png")},
            {second: require("../../../assets/images/9a.png")}
          ],
          stock: "NOWOSC",
          category: 'spodnie',
          info: 'Spodnie slim.  90% bawełna, 10% poliestru. ',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
        },
        {
          id: '10',
          name: 'Hoodie Welur 7MORE7',
          color: 'blekit',
          price: 349.99,
          image: [
            {first: require("../../../assets/images/10.png")},
            {second: require("../../../assets/images/10a.png")}
          ],
          stock: "NOWOSC",
          category: 'hoodie',
          info: 'Bluza z kapturem.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
          desc: `dwuwarstwowy kaptur; taśma wzmacniająca na karku z pojedynczej dzianiny; z przodu kieszeń-kangurka. `

        },
        {
          id: '11',
          name: 'Jogger Welur 7MORE7',
          color: 'czarny',
          price: 189.99,
          image: [
            {first: require("../../../assets/images/11.png")},
            {second: require("../../../assets/images/11a.png")}
          ],
          stock: "NOWOSC",
          category: 'hoodie',
          info: 'Spodnie welurowe. 80% bawełna, 20% poliester.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
        },
        {
          id: '12',
          name: 'Hoodie Welur SICARIOS',
          color: 'bronze',
          price: 349.99,
          image: [
            {first: require("../../../assets/images/12.png")},
            {second: require("../../../assets/images/12a.png")}
          ],
          stock: "NOWOSC",
          category: 'hoodie',
          info: 'Bluza z kapturem.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
          desc: `dwuwarstwowy kaptur; taśma wzmacniająca na karku z pojedynczej dzianiny; z przodu kieszeń-kangurka. `

        },
        {
          id: '13',
          name: 'T-SHIRT ALIEN',
          color: 'czarny',
          price: 99.99,
          image: [
            {first: require("../../../assets/images/14.png")},
            {second: require("../../../assets/images/14a.png")}
          ],
          stock: "NOWOSC",
          category: 'tshirt',
          info: 'Bluza z kapturem.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
        },
        {
          id: '14',
          name: 'Hoodie ALIEN',
          color: 'czarny',
          price: 249.99,
          image: [
            {first: require("../../../assets/images/13.png")},
            {second: require("../../../assets/images/13a.png")}
          ],
          stock: "NOWOSC",
          category: 'tshirt',
          info: 'Bluza z kapturem.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
          desc: `dwuwarstwowy kaptur; taśma wzmacniająca na karku z pojedynczej dzianiny; z przodu kieszeń-kangurka. `
        },
        {
          id: '15',
          name: 'Longsleeve SICARIOS',
          color: 'czarny',
          price: 179.99,
          image: [
            {first: require("../../../assets/images/15.png")},
            {second: require("../../../assets/images/15a.png")}
          ],
          stock: "NOWOSC",
          category: 'longsleeve',
          info: 'Bluza z kapturem.',
          gender: 'unisex',
          size: ['S', 'M', 'L'],
          qty: 1,
        },
      ],

      cart: { items: [], total: 0, qty: 0 }
    }
  },
  mutations: mutations,
  getters: getters,
  actions: actions,
}
