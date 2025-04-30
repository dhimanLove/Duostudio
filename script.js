var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
var video = document.querySelector(".page1 video");

document.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.5,
    ease: "power2.out",
    scale: 1.2,
    backgroundColor: "hotpink",
    borderRadius: "50%",
  });
});

// video.addEventListener("mouseenter", function () {
//   gsap.to(cursor, {
//     scale: 2,
//     backgroundColor: "white",
//     duration: 0.5,
//     ease: "power2.out",
//   });
// });
// video.addEventListener("mouseleave", function () {
//   gsap.to(cursor, {
//     scale: 1,
//     backgroundColor: "hotpink",
//     duration: 0.5,
//     ease: "power2.out",
//   });
// }
// );

function init() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

init();

gsap.from(".page1 h1, .page1 h2", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 0.2,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 27%",
    end: "top 0%",
    scrub: 3,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "anim"
);

tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);
tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim"
);
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    //markers: true,
    top: "30%",
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  },
});

tl2.to(".main", {
  backgroundColor: "#fff",
  color: "#000",
  duration: 1,
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    //markers: true,
    start: "top -450%",
    end: "top -470%",
    scrub: 3,
  },
});

tl3.to(".main", {
  backgroundColor: "black",
  color: "#ffffff",

  duration: 1,
});

var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    cursor.style.width = "300px";
    cursor.style.height = "250px";
    cursor.style.borderRadius = "0";
    cursor.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to(elem, {
      backgroundColor: "black",
      duration: 0.3,
    });
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.backgroundImage = "none";
  });
  gsap.to(elem, {
    scale: 1.1,
    y: -10,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: elem,
      scroller: ".main",
      start: "top 70%",
      end: "top 65%",
      scrub: 3,
    },
  });
});
var purple = document.querySelector(".purple");
var marqueeContent = document.querySelector(".marquee-content");
var h4 = document.querySelectorAll(".nav2 h4");

h4.forEach(function (nav) {
  nav.addEventListener("mouseenter", function () {
    purple.style.display = "block";
    purple.style.opacity = "1";
    purple.style.transform = "scale(1)";
    purple.style.transition = "opacity 0.4s ease, transform 0.4s ease";

    var text = nav.textContent.toUpperCase();
    if (text === "HOME") {
      marqueeContent.textContent =
        "HOME   WELCOME   EXPLORE   HOME   WELCOME   EXPLORE  ";
    } else if (text === "WORK") {
      marqueeContent.textContent =
        "WORK   PROJECTS   PORTFOLIO   WORK   PROJECTS   PORTFOLIO  ";
    } else if (text === "STUDIO") {
      marqueeContent.textContent =
        "STUDIO   CREATIVE   DESIGN   STUDIO   CREATIVE   DESIGN  ";
    } else if (text === "CONTACT") {
      marqueeContent.textContent =
        "CONTACT   CONNECT   REACH   CONTACT   CONNECT   REACH  ";
    }
  });

  nav.addEventListener("mouseleave", function () {
    purple.style.opacity = "0";
    purple.style.transform = "scale(0.95)";
    setTimeout(() => {
      purple.style.display = "none";
      marqueeContent.textContent = "";
    }, 400);
  });
});
var circle = document.querySelector("footer .top .circle");
circle.addEventListener("mouseenter", function () {
  gsap.to(circle, {
    scale: 1.1,
    duration: 0.5,
    ease: "elastic.out(1, 0.3)",
  });
});
circle.addEventListener("mouseleave", function () {
  gsap.to(circle, {
    scale: 1,
    duration: 0.5,
    scale: 1,
    ease: "bounce.out",
  });
});
