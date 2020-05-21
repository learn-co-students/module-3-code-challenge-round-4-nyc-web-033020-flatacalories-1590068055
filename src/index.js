document.addEventListener('DOMContentLoaded', function() {

    //image 
    const  postName = document.getElementById("name")
    console.log(postName)
    const post = document.getElementById("image")
    console.log(post)
    const imageLink = "http://localhost:3000/characters"
 
    fetch(imageLink)
    .then(resp => resp.json())
    .then(image => {
        renderImage(image)
    })
    
    function renderImage(showImage) {
        post.src = showImage.image
        postName.innerText = showImage.postName
    }
    
    
    })
    