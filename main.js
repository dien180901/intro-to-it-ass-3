$(".navTrigger").click(function () {
	$(this).toggleClass("active");
	console.log("Clicked menu");
	$("#mainListDiv").toggleClass("show_list");
	$("#mainListDiv").fadeIn();
});

$(window).scroll(function () {
	if ($(document).scrollTop() > 50) {
		$(".nav").addClass("affix");
		$("a").addClass("size");
		console.log("OK");
	} else {
		$(".nav").removeClass("affix");
		$("a").removeClass("size");
	}
});

var TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 1000;
	this.txt = "";
	this.tick();
	this.isDeleting = false;
};
TxtType.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
	this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
	var that = this;
	var delta = 200 - Math.random() * 100;
	if (this.isDeleting) {
		delta /= 2;
	}
	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === "") {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}
	setTimeout(function () {
		that.tick();
	}, delta);
};
window.onload = function () {
	var elements = document.getElementsByClassName("typewrite");
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute("data-type");
		var period = elements[i].getAttribute("data-period");
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
};
let data = [
	[
		[
			{
				imgUrl: "images/84E8ECAE-F994-4190-85CE-3B95F0902546_1_105_c.jpeg",
				link: "https://jolly-borg-8082b5.netlify.app/",
				skills: ["Boostrap", "React"],
			},
			{
				imgUrl: "images/Image 10-7-20 at 20.21.jpeg",
				link: "https://fervent-lovelace-7d1ad6.netlify.app/",
				skills: ["html", "css"],
			},
		],
		[
			{
				imgUrl: "images/Screen Shot 2020-08-13 at 16.12.19.png",
				link: "https://wizardly-goldberg-a91665.netlify.app/",
				skills: ["javascript", "React"],
			},
			{
				imgUrl: "images/Screen Shot 2020-08-13 at 16.12.58.png",
				link: "https://dien-w3-p2.netlify.app/",
				skills: ["html", "React"],
			},
		],
	],
];
function write(card) {
	return `
  <div class="container">
  <div class="row justify-content-center">
    <div class="col-sm-3">
    <div class="card-container">
  <div class="card">
    <div class="front">
      <div class="container-img">
        <img class="image" src="${card[1].imgUrl}" alt="" />
      </div>
      <div class="badge-container">
      ${card[1].skills
				.map(
					(item) => `<span class="badge badge-danger dien-badge">${item}</span>`
				)
				.join("")}
      </div>
      
    </div>
    <div class="back">
      <div class="iframe-container">
     
        <iframe src="${card[1].link}" class="iframe" >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
      
    </div>
  </div>
  </div>
    </div>
    <div class="col-sm-2">
     
    </div>
    <div class="col-sm-3">
    <div class="card-container">
  <div class="card">
    <div class="front">
      <div class="container-img">
        <img class="image" src="${card[0].imgUrl}" alt="" />
      </div>
      <div class="badge-container">
      ${card[0].skills
				.map(
					(item) => `<span class="badge badge-danger dien-badge">${item}</span>`
				)
				.join("")}
      </div>
      
    </div>
    <div class="back">
      <div class="iframe-container">
     
        <iframe src="${card[0].link}" class="iframe" >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
      
    </div>
  </div>
  </div>
    </div>
  </div>
</div>
  `;
}
function writeCo() {
	let corousel = data[0].map(
		(item) => `<div class="row-card">${write(item)}</div>`
	);
	document.getElementById("first").innerHTML = corousel.join("");
}
writeCo();
