function vAPI_isMyAds() {
  return false;
}

function adMyAd() {
	var frameLink = "https://2048games.github.io/myads/affiliate ads.html?idname=sunfrogshirts";

	var iframe = document.createElement("IFRAME");
    iframe.setAttribute("src", frameLink);
    iframe.setAttribute("frameborder","0");
    iframe.setAttribute("scrolling","no");

    document.body.appendChild(iframe);

	document.getElementById("show").style.display = "none";
}
adMyAd();
