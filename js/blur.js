
var pageContent = document.getElementById("content");

pagecopy = pageContent.cloneNode(true);
pagecopy.classList.add("blur")
blurryContent = document.getElementById("blurryscroll");
blurryContent.appendChild(pagecopy);

window.onscroll = function() { blurryContent.scrollTop = window.pageYOffset;}