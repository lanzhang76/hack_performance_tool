<template>
  <div id="app">
    <div>
      <div class="check_box" v-for="({comedian_name},key) in comedians" :key="key">
        <input v-model="selected" v-bind:value="comedian_name" type="checkbox" />
        <label>{{comedian_name}}</label>
      </div>
      <div class="check_box" id="reference_box">
        <input v-model="caption_wanted" type="checkbox" />
        <label>show references: {{caption_wanted}}</label>
      </div>
    </div>
    <div>
      <!-- <battle v-on:submit_sentence="update_battle($event)" /> -->
      <battle />
      <!-- <p>{{battle_input}}</p> -->
    </div>
    <div class="modules" v-for="(i,key) in selected" :key="key">
      <comModule v-bind:comedian_name="i" v-bind:captionWanted="caption_wanted" />
    </div>
  </div>
</template>

<script>
import comModule from "./components/comModule.vue";
import battle from "./components/battle";

export default {
  name: "App",
  components: {
    comModule,
    battle
  },
  data: function() {
    return {
      comedians: [
        { comedian_name: "Aziz Ansari" },
        { comedian_name: "Amy Schumer" },
        { comedian_name: "Bill Maher" },
        { comedian_name: "Jerry Seinfeld" },
        { comedian_name: "Ali Wong" },
        { comedian_name: "Louis C.K." },
        { comedian_name: "Kevin Hart" }
      ],
      selected: [],
      caption_wanted: false
    };
  },
  methods: {}
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap);
body {
  background-color: black;
  color: antiquewhite;
  margin: 1em;
  /* text-align: center; */
}

#app {
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 1.5em auto;
}

.modules {
  margin-top: 15px;
  margin-right: 10px;
  margin-left: 0px;
  display: inline-block;
  color: #2c3e50;
}

.check_box {
  display: inline-block;
  color: antiquewhite;
  margin-left: 10px;
  font-size: 0.8em;
}

#reference_box {
  text-align: right;
}
</style>
