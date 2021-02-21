const app = {
    data() {
        return {
            expandPhoto: false,
            photoIndex: '',
            inputSearch: '',
            heart: 'images/heart.png',
            name: "Why don't we",
            type: "My husband",
            photos: [{
                    id: '1',
                    src: 'images/jack.jpg',
                    done: false,
                    title: 'Jack Avery',
                    show: false 
                },
                {
                    id: '2',
                    src: 'images/corbyn.jpg',
                    done: false,
                    title: 'Corbyn Besson',
                    show: false 
                },
                {
                    id: '3',
                    src: 'images/jonah.jpg',
                    done: false,
                    title: 'Jonah Marais',
                    show: false 
                
                },
                {
                    id: '4',
                    src: './images/zach.jpg',
                    done: false,
                    title: 'Zach Herron',
                    show: false 
                },
                {
                    id: '5',
                    src: './images/daniel.jpg',
                    done: false,
                    title: 'Daniel Seavay',
                    show: false 
                }
            ],
            isHidden: true

        }
    },
    methods: {
        favIcon(index) {
            this.photos[index].done = !this.photos[index].done
        },
        expandPic(index){
            if(!this.expandPhoto){
                this.photoIndex = index;
            }
            this.expandPhoto = !this.expandPhoto;
        },
        toggleCancel() {
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