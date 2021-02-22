app.component("upper-components", {
  props: {},
  template:
    /*html*/
    `
  <div class="upper-display">
  <h3>RRR</h3>
  <h4>User 001</h4>
  <h4>User PPP001</h4>
    
<button 
  class="button" 
  v-on:click="sendAllOfR">
  Send
</button>

<button 
  class="button" 
  v-on:click="receiveAllOfR">
  Receive
</button>

<!--
<div class="tabmenu">
	<label>
		<input name="tab" type="radio" checked>
    <em>P</em>
    <span>
    <p-display></p-display>
    </span>
	</label>
	<label>
		<input name="tab" type="radio">
		<em>A</em><span>TEXT2</span>
	</label>
	<label>
		<input name="tab" type="radio">
		<em>C</em><span>TEXT3</span>
	</label>
	<label>
		<input name="tab" type="radio">
		<em>T</em><span>TEXT3</span>
	</label>
</div>
-->

</div>
  `
});
