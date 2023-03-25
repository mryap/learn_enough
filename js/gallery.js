  //variable to hold all the images nested inside the div with id: gallery-thumbs
  let thumbnails = document.querySelectorAll('#gallery-thumbs > div > img');

  //set variable to hold img nested inside id: gallery-photo 
  let mainImage = document.querySelector('#gallery-photo img');


  thumbnails.forEach(function(thumbnail) {
    //preload large images
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;

    thumbnail.addEventListener('click', function() {
      //variable for alt
      let newImageAlt = thumbnail.dataset.description;
      //change the src/alt attribute to the current display image 
      mainImage.setAttribute('src', largeVersion.src);
      mainImage.setAttribute('alt', newImageAlt);

      //change orange border to current img
      document.querySelector('.current').classList.remove('current');
      thumbnail.parentNode.classList.add('current');

      //update image info
      let galleryInfo = document.querySelector('#galler-info');
      let title = galleryInfo.querySelector('.title');
      let description = galleryInfo.querySelector('.description');

      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
