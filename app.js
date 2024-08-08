const app = Vue.createApp({
  data() {
    return {
      url: "https://google.com",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "https://cdn.pixabay.com/photo/2024/08/03/11/31/ai-generated-8941975_1280.png",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "https://cdn.pixabay.com/photo/2024/08/03/11/31/ai-generated-8941975_1280.png",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "https://cdn.pixabay.com/photo/2024/08/03/11/31/ai-generated-8941975_1280.png",
          isFav: true,
        },
      ],
      //   title: "Matilda",
      //   author: "Roald Dahl",
      //   review: "Recommended - Amazing book!!",
      //   age: 40,
      //   x: 0,
      //   y: 0,
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
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
