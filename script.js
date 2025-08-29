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