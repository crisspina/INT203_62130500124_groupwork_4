const app = {
    data() {
        return {
            inputSearch: '' ,
            heart: 'images/heart.png',
            name:"Why don't we",
            type:"My husband",
            photos: [{
                    src: 'images/jack.jpg',
                    done: false,
                    title: 'Jack Avery'
                },
                {
                    src: 'images/corbyn.jpg',
                    done: false,
                    title: 'Corbyn Besson'
                },
                {
                    src: 'images/jonah.jpg',
                    done: false,
                    title:'Jonah Marais'
                },
                {
                    src: './images/zach.jpg', 
                    done: false,
                    title: 'Zach Herron'
                },
                {
                    src: './images/daniel.jpg', 
                    done: false,
                    title:'Daniel Seavay'
                }
            ],
            isHidden: true  
           
        }
    },
    methods: {
        favIcon(index){
            this.photos[index].done = !this.photos[index].done
        },
    
    toggleCancel(){
        this.inputSearch = '';
        this.isHidden = !this.isHidden;
    },
    },

    computed: {
        filteredSearch() {
            return this.photos.filter(showSearch => {
                return showSearch.title.toLowerCase().includes(this.inputSearch.toLowerCase())
              })
        
        },
        countLike() {
            return this.photos.filter(t => !t.done).length
        },
        countofphotos() {
            return this.photos.length
        }
    }
}
Vue.createApp(app).mount('#app')
