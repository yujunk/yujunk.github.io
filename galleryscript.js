//1. Close Box//

const closeButton = document.querySelector('.lightbox-close');
const lightBox = document.querySelector('.lightbox');
const lightBoxImage = document.querySelector('.lightbox-image');

closeButton.onclick = function(event){
	event.preventDefault();
	lightBox.classList.add('hidden'); //dont have to add in "hidden" class in html cause it WILL be added with this event, and the class will be then refered to in the CSS file.//
}

//2. Access EACH image and enable open box//
const galleryItems = document.querySelectorAll('.gallery-item');

for (let i=0; i < galleryItems.length; i++) {
	let item = galleryItems[i];
	item.onclick = function (event) {
		lightBox.classList.remove("hidden");

		//3. When lightbox is opened, display the image concerned//
		
		//3a. 
		const elementClickedOn = event.target; 
		// ~~ event.target - html event of what's clicked on - shows html line item in console.log//
		// ~~ previous only brings back image and not caption, despite selection being entire li. Java distinguishes between elements. So must use:
		
		//3b. select parent element of image //
		const galleryItemParent = elementClickedOn.parentElement;
		
		//3c. Replace "lightbox-image" with current clicked image and border//
		if (elementClickedOn.classList.contains("gallery-item")) {
			lightBoxImage.innerHTML = elementClickedOn.innerHTML;
		}
		else {
			lightBoxImage.innerHTML = galleryItemParent.innerHTML;
		}

	} 
}