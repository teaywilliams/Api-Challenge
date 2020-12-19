const URL= "https://picsum.photos/v2/list?page=2&limit=40";
const lorem = document.querySelector(".lorem");

fetch(URL)
.then ((result) => {
  console.log(result);
  return result.json();
})
.then((data)=> {
  displayImages(data);
  console.log(data);
})

function displayImages(imagesPassingThrough) {
  console.log(imagesPassingThrough);
  imagesPassingThrough.forEach((element) => {
    
    let imageDiv = document.createElement("div");
    let imageTag = document.createElement("img");
    let imageAuthor = document.createElement("h5");

    imageDiv.setAttribute("class", "img-div");
    imageTag.setAttribute("class","imageClass");
    imageAuthor.setAttribute("class", "author");

    imageTag.src = element.download_url;
    imageAuthor.textContent = element.author;
    
    // console.log(element.download_url);

    lorem.appendChild(imageDiv);
    imageDiv.appendChild(imageTag);
    imageDiv.appendChild(imageAuthor);
  });
}

