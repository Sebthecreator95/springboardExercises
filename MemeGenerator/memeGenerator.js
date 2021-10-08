const memeform = document.querySelector('#makeAMeme');
const pictureLink = document.querySelector('#pictureLink');
const topTextInput = document.querySelector('#top');
const bottomTextInput = document.querySelector('#bottom');
const allMemes = document.querySelector('#mainDiv');

memeform.addEventListener('submit', function(event) {
	event.preventDefault();
	let memeSection = document.createElement('div');
	memeSection.classList = 'placeMemeHere';
	allMemes.prepend(memeSection);
	let newMemeImg = document.createElement('img');
	newMemeImg.classList = 'newMeme';
	newMemeImg.src = pictureLink.value;
	memeSection.append(newMemeImg);

	let topText = document.createElement('div');
	topText.innerText = topTextInput.value;
	topText.classList = 'top';
	memeSection.append(topText);

	let bottomText = document.createElement('div');
	bottomText.innerText = bottomTextInput.value;
	bottomText.classList = 'bottom';
	memeSection.append(bottomText);

	let removeButton = document.createElement('button');
	removeButton.innerText = 'Delete Meme';
	removeButton.classList = 'deleteMeme';
	memeSection.append(removeButton);

	removeButton.addEventListener('click', function(event) {
		event.target.parentElement.remove();
	});
	pictureLink.value = '';
	topTextInput.value = '';
	bottomTextInput.value = '';
});

//const deleteButtons = document.querySelectorAll('.deleteMeme');
//deleteButtons.addEventListener('click', function(event) {
//if (event.target.tagName === 'button') {
//	event.target.parentElement.remove();
//}
//});
