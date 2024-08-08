const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "Matilda",
      author: "Roald Dahl",
      review: "Recommended - Amazing book!!",
      age: 40,
    };
  },
  methods: {
    // changeTitle() {
    //     this.title = "The witches"
    // } -- method: 2

    // changeTitle(title) {
    //     this.title = title;
    // } -- method: 3

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },

    handleMousemove(e) {
        
    }
  },
});

app.mount("#app");
