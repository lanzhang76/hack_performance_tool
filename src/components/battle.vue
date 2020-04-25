<template>
  <div class="battle-module">
    <div class="textInput">
      <textarea
        ref="battletextinput"
        @keydown.enter.prevent="submit_sentence"
        cols="100"
        rows="1"
        placeholder
        required
      ></textarea>
    </div>
    <div class="textInput">
      <button v-on:click="submit_sentence">Write</button>
      <button v-on:click="clean">Clean</button>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "battle",
  data() {
    return {};
  },
  methods: {
    init_byKey: function(e) {
      if (e.keyCode === 13) {
        console.log("battle submitted");
        this.submit_sentence();
      }
    },
    submit_sentence: function() {
      let current_sentence = this.$refs.battletextinput.value;
      bus.$emit("battleF", current_sentence.replace("\n", ""));
      this.$refs.battletextinput.value = "";
    },
    clean: function() {
      bus.$emit("clean");
    }
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap);
.battle-module {
  position: fixed;
  /* display: inline-block; */
  text-align: center;
  padding: 5px;
  background-color: black;
  /* border: 2px solid black; */
  color: blueviolet;
  bottom: 0em;
}
.textInput {
  /* width: 600px; */
  display: inline-block;
  vertical-align: middle;
}

.textInput textarea {
  font-family: "Roboto Mono", monospace;
  font-size: 0.7em;
  background: transparent;
  color: white;
  outline: none;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
}

.textInput button {
  font-size: 0.4em;
  color: white;
  background-color: black;
  outline: none;
}
</style>