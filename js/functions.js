var iWebkit;

if (!iWebkit) {
	
	iWebkit = window.onload = function () {
			function fullscreen() {
				var sam = document.getElementsByTagName("sam");
				for (var pipi = 0; pipi < sam.length;pipi++) {
					if (sam[pipi].className.match("noeffect")) {
					}
				else {
						sam[pipi].onclick = function () {
							window.location = this.getAttribute("href");
							return false;
						};
					}
				}
			}

			function hideURLbar() {
				window.scrollTo(0, 0.9);
			}
			iWebkit.init = function () {
				fullscreen();
				hideURLbar();
			};
			iWebkit.init();
		};
}