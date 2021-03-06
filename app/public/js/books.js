const Books = {
    data() {
      return {
          books: []
        
        }
    },
    computed: {},
    methods: {
        fetchBookData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },

    },
    created() {
        return this.fetchBookData();
     
    }
}
  
Vue.createApp(Books).mount('#booksApp');