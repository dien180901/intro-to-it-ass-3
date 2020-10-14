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
		$("a").addClass("dm-navContainer")
		console.log("OK");
	} else {
		$(".nav").removeClass("affix");
		$("a").removeClass("size");
		$("a").removeClass("dm-navContainer")
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
				link: "https://twitter-catalina.netlify.app/",
				skills: ["BOOSTRAP", "HTML","CSS"],
				name:"Twitter"
			},
			{
				imgUrl: "images/Image 10-14-20 at 09.33.jpeg",
				link: "https://musing-chandrasekhar-7264e7.netlify.app/",
				skills: ["REACT","EXPRESS","MOMENT"],
				name:"WeatherApp"
			},
		],
		[
			{
				imgUrl: "images/Screen Shot 2020-08-13 at 16.12.19.png",
				link: "https://wizardly-goldberg-a91665.netlify.app/",
				skills: ["JAVASCRIPT", "REACT"],
				name:"Movie"
			},
			{
				imgUrl: "images/Screen Shot 2020-08-13 at 16.12.58.png",
				link: "https://dien-w3-p2.netlify.app/",
				skills: ["HTML", "CSS"],
				name:"To do List"
			},
		],
	],
];
function clickCard(card){
	
		window.open( 
		  "https://www.geeksforgeeks.org", "_blank"); 
	
}
function write(card) {
	return `
	
  <div class="container">
  <div class="row justify-content-center">
    <div class="col-md-3">
    <div class="card-container">
	<div class="grid__item">
        <div class="card"><img class="card__img" src="${card[0].imgUrl}" alt="Snowy Mountains">
            <div class="card__content">
				<h1 class="card__header">${card[0].name}</h1>
				<div class="badge-container">
      ${card[0].skills
				.map(
					(item) => `<span class="badge badge-primary dien-badge">${item}</span>`
				)
				.join("")}
      </div>
                <button class="card__btn"  onclick=" window.open('${card[0].link}','_blank')">Explore <span>&rarr;</span></button></div>
        </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
     
    </div>
    <div class="col-md-3">
	<div class="card-container">
	<div class="grid__item">
        <div class="card"><img class="card__img" src="${card[1].imgUrl}" alt="Snowy Mountains">
            <div class="card__content">
				<h1 class="card__header">${card[1].name}</h1>
				<div class="badge-container">
      ${card[1].skills
				.map(
					(item) => `<span class="badge badge-primary dien-badge">${item}</span>`
				)
				.join("")}
      </div>
                <button class="card__btn"  onclick=" window.open('${card[1].link}','_blank')">Explore <span>&rarr;</span></button></div>
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
