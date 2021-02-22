app.component("send-receive-buttons", {
  props: {},
  template:
    /*html*/
    `
<div class="send-receive-buttons">

  <button 
    class="button"
    v-on:click="sendAll">
    Send All
  </button>

  <button 
    class="button"
    v-on:click="receiveAll">
    Receive All
  </button>

  <button 
    class="button"
    v-on:click="send">
    Send
  </button>

  <button 
    class="button"
    v-on:click="receive">
    Receive
  </button>

</div>
  `
});
