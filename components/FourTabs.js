app.component("four-tabs", {
  props: {
    activetab: {
      type: Number,
      required: true
    },
    pppdata: {
      // Do not use capital characters!!
      type: Array,
      required: true
    }
  },
  template:
    /*html*/
    `
<div class="four-tabs">
  <!-- tabs -->
  <div id="tabs" class="container">
    <div class="tabs">
      <a
        v-on:click="changeTabRequest(1)"
        v-bind:class="[ activetab === 1 ? 'active' : '' ]"
        >PPP</a
      >
      <a
        v-on:click="changeTabRequest(2)"
        v-bind:class="[ activetab === 2 ? 'active' : '' ]"
        >AAA</a
      >
      <a
        v-on:click="changeTabRequest(3)"
        v-bind:class="[ activetab === 3 ? 'active' : '' ]"
        >CCC</a
      >
      <a
        v-on:click="changeTabRequest(4)"
        v-bind:class="[ activetab === 4 ? 'active' : '' ]"
        >TTT</a
      >
      </div>

    <div class="content">
      <div v-if="activetab === 1" class="tabcontent">
        Content for tab PPP
        <p-display :pppdata="pppdata"></p-display>
      </div>
      <div v-if="activetab === 2" class="tabcontent">
        Content for tab AAA
      </div>
      <div v-if="activetab === 3" class="tabcontent">
        Content for tab CCC
      </div>
      <div v-if="activetab === 4" class="tabcontent">
        Content for tab TTT
      </div>
    </div>
  </div>
</div>
  `,
  methods: {
    changeTabRequest(tabId) {
      this.$emit("change-tab", tabId);
      // console.log("I am FourTabs.js PPPData is:");
      // console.log(this.pppdata);
    }
  }
});
