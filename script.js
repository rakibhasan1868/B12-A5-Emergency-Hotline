function getTextContent(element) {
    let number = document.getElementById(element).innerText;
    return number;
}
function increaseCount(element, increment) {
    let count = document.getElementById(element);
    count.innerText = parseInt(count.innerText) + increment;
}
function decreaseCount(element, decrement) {
    let count = document.getElementById(element);
    count.innerText = Math.max(0, parseInt(count.innerText) - decrement);
}
function copyContent(title, number) {
    navigator.clipboard.writeText(number).then(function () {
        let copyCount = getTextContent("copy");
        copyCount = increaseCount("copy", 1);
        alert('Copied ' + title + ": " + number);
    }, function (err) {
        console.error('Could not copy text: ', err);
});
}

function toggleHeart(icon) {
    let heartCount = document.getElementById("heart");

    if (icon.classList.contains("fa-regular")) {
      
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid", "text-red-500");

      
      heartCount.innerText = parseInt(heartCount.innerText) + 1;
    } else {
      
      icon.classList.remove("fa-solid", "text-red-500");
      icon.classList.add("fa-regular");

      let current = parseInt(heartCount.innerText);
      if (current > 0) {
        heartCount.innerText = current - 1;
      }
    }
}