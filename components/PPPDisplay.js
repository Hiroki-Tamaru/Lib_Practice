app.component("p-display", {
  props: {
    pppdata: {
      type: Array,
      required: true
    }
  },
  template:
    /*html*/
    `
<div class="p-display">

<send-receive-buttons></send-receive-buttons>

<ul>
  <li v-for="ppp in pppdata" :key="ppp.id">
    {{ ppp.id }} {{ ppp.PPPname }} {{ ppp.AAAname }} {{ ppp.CCCname }} {{ ppp.RRRname }}
  </li>
</ul>


</div>
  `
});
