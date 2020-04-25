<template>
  <div class="source_box">
    <br />
    <p ref="nameC">Source</p>
    <ul class="caption">
      <li v-for="(j,key) in uploadCaptions(comcap)" :key="key">{{j}}</li>
    </ul>
  </div>
</template>

<script>
import json from "../assets/jsons/captions.json";

export default {
  name: "sourceCaption",
  props: { comcap: String },
  data() {
    return {
      comChosen: "bill",
      jsonFile: json
    };
  },
  computed: {
    prin: function() {
      return console.log(2 + 3);
    }
  },
  methods: {
    uploadCaptions: function(comcap) {
      if (comcap == "Aziz Ansari") {
        return this.jsonFile.aziz;
      } else if (comcap == "Jerry Seinfeld") {
        return this.jsonFile.jerry;
      } else if (comcap == "Amy Schumer") {
        return this.jsonFile.amy;
      } else if (comcap == "Bill Maher") {
        return this.jsonFile.bill;
      } else if (comcap == "Ali Wong") {
        return this.jsonFile.ali;
      } else if (comcap == "Louis C.K.") {
        return this.jsonFile.louis;
      } else if (comcap == "Kevin Hart") {
        return this.jsonFile.kevin;
      }
    }
  }
};
</script>

<style scoped>
.caption {
  font-size: 0.5em;
}

ul {
  margin-left: -20px;
}
</style>