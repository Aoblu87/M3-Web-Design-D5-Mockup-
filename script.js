const bookmarks=document.querySelectorAll('[data-target=favorites]')


window.onload= function(){

for (const bookmark of bookmarks) {
    bookmark.addEventListener('click', function(event){

        bookmark.classList.toggle('favorites')

    })
}

}