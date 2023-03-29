/*
Stampare a schermo un messaggio all’interno di un h1 utilizzando una proprietá nell'oggetto restituito dalla funzione data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

// let counter = 0;

const { createApp } = Vue;

createApp({
  data() {
    return {
      counter : 1,
      myText: "This is my first message printed with Vue.js",
      imagePath: `https://picsum.photos/${this.generateRandomImageSideResolution()}/${this.generateRandomImageSideResolution()}`
    }
  },
  methods: {
    generateRandomImageSideResolution() {
      // console.log(this);
      const sideResolution = Math.floor(Math.random() * 501) + 300;
      this.counter % 2 !== 0 ? console.log(`Width: ${sideResolution}px`) : console.log(`Height: ${sideResolution}px`)
      this.counter++;
      console.log(this.counter);
      return sideResolution;
    },
    counterRecall() {
      console.log(this.counter);
    }
  },
  created() {
    // this.generateRandomImageSideResolution();
    // console.log("CREATED" + this.imagePath);
  }
}).mount('#app');