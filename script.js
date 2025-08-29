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


function addCallHistory(title, number) {
    var historyList = document.getElementById("call-history");
    var newEntry = document.createElement("div");
    let callTime = new Date().toLocaleTimeString();

    newEntry.className = "call-entry flex flex-row items-center justify-between mt-4 p-4 bg-gray-50 rounded-lg";

    newEntry.innerHTML = `
        <div>
            <span class="font-bold text-xl">${title}</span><br/>
            <span class="text-left text-gray-500">${number}</span>
        </div>
        <div class="text-gray-700 text-xs whitespace-nowrap">
            ${callTime}
        </div>
    `;
    historyList.appendChild(newEntry);
}


function callNumber(title, number) {
    let coins = getTextContent("coin");
    if (coins < 20) {
        alert("আপনার পর্যাপ্ত পরিমাণ কয়েন নেই কল করতে ২০ কয়েন লাগবে ");
        return;
    }
    decreaseCount("coin", 20);
    addCallHistory(title, number);
    alert('Calling ' + title + ": " +number);

}