import axios from 'axios'
axios.defaults.baseURL = "https://pixabay.com/api/"
const API_KEY = "28660180-0b211f14b29bdfbceebbfc0f0"

const search = {
    q: "",
    params: {
        page: 1,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 40,
    },
    async query() {
        const response = await axios.get(`?key=${API_KEY}&q=${this.q}`, { params:this.params } )
        this.params.page += 1
        return response.data;       
}
}

 export default search
    




// const search = {
//     q: "",  
//     page: 1,
//     async query() {
//         const response = await axios.get(`?key=${API_KEY}`, {
//             params: {
//                 q: this.q,
//                 page: this.page,
//                 image_type: "photo",
//                 orientation: "horizontal",
//                 safesearch: true,
//                 per_page: 40
//             }
//         });
//         this.page += 1;
//         return response.data;
//     }
// }
