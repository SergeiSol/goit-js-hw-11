import search from "./searchquery"
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import renderGallery from './renderGallery'
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const formEl = document.querySelector("#search-form")
const buttonEl = document.querySelector(".load-more")
const formBtn = formEl.querySelector("button")
const gallery = document.querySelector(".gallery")
const lightbox = new SimpleLightbox('.gallery a')

formEl.addEventListener('submit', onSubmit)
buttonEl.addEventListener('click', loadMore)
buttonEl.style = "display: none";


async function loadMore() {
    console.log("page = ", search.params.page);
    formBtn.setAttribute('disabled', 'true')
    const response = await search.query()  // После запроса search.params.page = на 1 больше  (т.е. после первой страниці = 2)
    formBtn.removeAttribute('disabled')
    if (search.params.page === 2) {
        if (response.totalHits === 0) {
            Report.failure("", "Sorry, there are no images matching your search query. Please try again.", "Okay");
            return;
        }
    Notify.success(`Hooray! We found ${response.totalHits} images.`);
    }
    gallery.innerHTML += renderGallery(response.hits);
   lightbox.refresh()
    buttonEl.style = ""
    const maxpage = Math.ceil(response.totalHits / 40);  // 7/40 = 0.175 => Math.ceil(0.175) = 1
     if (search.params.page > maxpage) {
         buttonEl.style = "display: none";
         Report.info("","We're sorry, but you've reached the end of search results.","Okay");
    }
    console.log(response); 
}






function onSubmit(event) {
    event.preventDefault()
    search.params.page = 1;
    if (formEl.searchQuery.value.trim()) {
         search.q = formEl.searchQuery.value.trim() 
        gallery.innerHTML = ''
        buttonEl.style = "display: none";
        loadMore()
    }


   

    //fetch(`https://pixabay.com/api/?key=28660180-0b211f14b29bdfbceebbfc0f0&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=13`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))   // .then(console.log)
    // response = await response.json();
}

   







 //Math.floor(2.5) = 2
    //Math.floor(2.7) = 2
    //Math.floor(3.1) = 3
    //Math.floor(7.9999999) = 7
    //Math.floor(8.0) = 8

    //Math.ceil(1.2) = 2
    //Math.ceil(3.99) = 4
    //Math.ceil(3.00002) = 4
    //Math.ceil() = Math.floor() + 1

    // const x = [];
    // const x = new Array()
