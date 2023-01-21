// zmiana_zdjęcia_dalej.js

var e = entry();
// Name of Primary field
var images = "zdjęcie";   //  <= Rename
var integer = "integer";  //  <= Rename

var prime = e.field(images);
var prevCount = parseInt(e.field(integer));

var newImages = [];
var newPrime = [];

var imageCount = prime.length;

var diffCount = imageCount - prevCount;

var lastImage = prime[imageCount - 1];

message(e.field("Nazwa zadania"));

if(imageCount > 1)
{
  if(prevCount === 0 && diffCount > 0)
  {
    // Simply reverse, first images are new
    prime.reverse();
    newPrime = prime;
  } else if(diffCount < 1) { 
    if(imageCount < prevCount)
    {
      e.set(integer, imageCount);
    } else {
      // No images added or some removed
      // Do nothing...
    }
  } else if(diffCount === 1) {
    // Remove from bottom and add to top
    prime.pop();
    prime.unshift(lastImage);
    newPrime = prime;
  } else { // (difCount > 1)
    if(prevCount > diffCount)
    { // [Fix] Fixes order issues
      diffCount = prevCount;
    }
    for(i=imageCount-1; i>=diffCount; i--)
    { // Identify and remove new images
      newImages.push(prime[i]);
      prime.pop();
    }
    newPrime = newImages;
    for(i=0; i < prime.length; i++)
    { // Add new images to top
      newPrime.push(prime[i]);
    }
  }

// Image field is array

  if(lastImage == newPrime[0]) // Verify
  { // Set new order and new image count
    e.set(images, newPrime);
    //e.set(integer, imageCount);
    e.set(integer, 1);  
  }
}

// ----- End of Script ----- //
