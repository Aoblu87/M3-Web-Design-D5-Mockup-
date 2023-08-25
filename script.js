const bookmarks=document.querySelectorAll('[data-target=favorites]')
const bookmarkFill=document.querySelectorAll('.bi-bookmark-fill')

window.onload= function(){

for (const bookmark of bookmarks) {
    bookmark.addEventListener('click', function(event){

        for (const fill of bookmarkFill) {
            
            fill.classList.toggle('favorites')
        }


    })
}

}