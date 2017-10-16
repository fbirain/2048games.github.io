function vAPI_isMyAds() {
  return true;
}

function adMyAd() {
	var frameLink = "https://2048games.github.io/myads/affiliate ads.html?idname=sunfrogshirts";

	var iframe = document.createElement("IFRAME");
    iframe.setAttribute("id", "adsframe");
    iframe.setAttribute("src", frameLink);
    iframe.setAttribute("frameborder","0");
    iframe.setAttribute("scrolling","no");

    document.body.appendChild(iframe);
	
    document.getElementById("adsframe").style.margin = "-10px 0px 0px -10px";

    document.getElementById("show").style.display = "none";
}
adMyAd();
