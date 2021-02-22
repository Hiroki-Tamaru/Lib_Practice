const app = Vue.createApp({
  data() {
    return {
      activetab: 1,
      PPPData: [
        {
          id: 1,
          PPPname: "User PPP 001",
          AAAname: "AAA 001",
          CCCname: "CCC 001",
          RRRname: "RRR1"
        },
        {
          id: 2,
          PPPname: "User PPP 002",
          AAAname: "AAA 002",
          CCCname: "CCC 002",
          RRRname: "RRR2"
        },
        {
          id: 3,
          PPPname: "User PPP 003",
          AAAname: "AAA 003",
          CCCname: "CCC 003",
          RRRname: "RRR3"
        }
      ]
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    changeTab(tabId) {
      this.activetab = tabId;
    }
  }
});
