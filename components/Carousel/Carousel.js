class Carousel {
  constructor(item) {
    this.item = item;
    this.data = this.item.dataset.tab;
    this.imgs = document.querySelectorAll(`img[data-tab='${this.data}']`);
    this.rightButton = document.querySelector(".right-button");
    this.leftButton = document.querySelector(".left-button");

    this.rightButton.addEventListener("click", () => this.changeImg());
    this.leftButton.addEventListener("click", () => this.changeImg());
  }
  changeImg() {
    this.images = document.querySelectorAll(".carousel-item");
    let counter = 0;
    this.images.forEach(function(img) {
      img.classList.remove("active-img");
      counter++;
    });

    this.item.classList.add("active-img");
  }
}

let carousel = document.querySelectorAll(".carousel-item");

carousel.forEach(function(item) {
  return new Carousel(item);
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
