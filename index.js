'use strict';
function getDogImage(numberOfPics) {
  // const numberOfPics = $('#numberOfDogPics').val()
  const URL = `https://dog.ceo/api/breeds/image/random/${numberOfPics}`
  fetch(URL)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  let image = responseJson.message;
  let result = displayMultipleDogpics(image);
  $('.results-img').html(result);
  
  //display the results section
   $('.results').removeClass('hidden');
}
function displayMultipleDogpics(images) {
  let html= "";
  for (let i = 0; i < images.length; i++) {
    html +=`<img src="${images[i]}" class="results-img">`
  }
  return html;
}
function watchForm() {
  $('form').submit(event => {
    console.log("App started")
    event.preventDefault();
    // capture user input here form event.
    let input = $('#numberOfDogPics').val();
    getDogImage(input);
   
  });
}
$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});