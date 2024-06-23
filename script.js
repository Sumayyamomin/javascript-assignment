let order = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function showOrder(order) {
  document.getElementById('order').textContent = "Order: " + order.toString();
}

showOrder(order);

//DRAG AND DROP SWAP

var draggedImage = null;
var items;

function dragStart(e) {
  draggedImage = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("item", this.innerHTML);
}

function dragOver(e) {
  e.preventDefault();

  e.dataTransfer.dropEffect = "move";
  return false;
}

function dragEnter(e) {
  this.classList.add("dragover");
}

function dragLeave(e) {
  this.classList.remove("dragover");
}

function drop(e) {
  e.stopPropagation();

  if (draggedImage != this) {
    draggedImage.innerHTML = this.innerHTML;
    draggedImage.setAttribute("data-item", this.innerHTML);

    let replacedImage = e.dataTransfer.getData("item");
    this.innerHTML = replacedImage;
    this.setAttribute("data-item", replacedImage);
  }
  return false;
}

function dragEnd(e) {
  items.forEach(function(item) {
    item.classList.remove("dragover");
  });
}

document.addEventListener("DOMContentLoaded", event => {
  items = document.querySelectorAll(".container .image");

  items.forEach(function(item) {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragover", dragOver);
    item.addEventListener("dragleave", dragLeave);
    item.addEventListener("drop", drop);
    item.addEventListener("dragend", dragEnd);
  });

});