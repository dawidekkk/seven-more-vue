import mutations from "./mutations.js"
import getters from "./getters.js"
import actions from "./actions.js"

export default {
  state() {
    return {
      test: 'aaa',
      counter: 0,
      dummyProducts: [
        {
          id: '1',
          name: 'Czapka 77 #1',
          color: 'czarny',
          price: 99.99,
          image: '../../assets/images/1.png',
          collection: 'RESTOCK',
        },
        {
          id: '2',
          name: 'Jogger Welur 7MORE7',
          color: 'blekit',
          price: 189.99,
          image: null,
          collection: "NOWOSC",
        },
        {
          id: '3',
          name: 'Jogger Welur SICARIOS',
          color: 'bialy',
          price: 199.99,
          image: null,
          collection: "NOWOSC",
        },
        {
          id: '4',
          name: 'Hoodie Welur SICARIOS',
          color: 'bezowy',
          price: 349.99,
          image: null,
          collection: "NOWOSC",
        },
        {
          id: '5',
          name: 'Jogger Welur 7MORE7',
          color: 'grafit',
          price: 199.99,
          image: null,
          collection: "NOWOSC",
        },
        {
          id: '6',
          name: 'Hoodie Welur SICARIOS',
          color: 'czarny',
          price: 349.99,
          image: null,
          collection: "NOWOSC",
        },
        {
          id: '6',
          name: 'Hoodie FIRE DRAGON',
          color: 'pomaranczowy',
          price: 249.99,
          image: null,
          collection: "RESTOCK",
        },
        {
          id: '7',
          name: 'Hoodie UNLUCKY',
          color: 'czarny',
          price: 249.99,
          image: null,
          collection: "RESTOCK",
        },
        {
          id: '8',
          name: 'Jogger UNSTABLE WORLD slim',
          color: 'czarny',
          price: 249.99,
          image: null,
          collection: "RESTOCK",
        },
        {
          id: '9',
          name: 'Hoodie Welur 7MORE7',
          color: 'blekit',
          price: 349.99,
          image: null,
          collection: "RESTOCK",
        },
        {
          id: '10',
          name: 'Jogger Welur 7MORE7',
          color: 'czarny',
          price: 189.99,
          image: null,
          collection: "RESTOCK",
        },
        {
          id: '11',
          name: 'Hoodie Welur SICARIOS',
          color: 'bordowy',
          price: 349.99,
          image: null,
          collection: "RESTOCK",
        },
      ]
    }
  },
  mutations: mutations,
  getters: getters,
  actions: actions,
}