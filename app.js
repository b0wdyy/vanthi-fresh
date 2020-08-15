const burger = document.querySelector(".burger");
const burgerLines = document.querySelectorAll(".burger span");
const burgerLine1 = document.querySelector(".burger span:nth-of-type(1)");
const burgerLine2 = document.querySelector(".burger span:nth-of-type(2)");
const burgerLine3 = document.querySelector(".burger span:nth-of-type(3)");
const menu = document.querySelector(".main__nav__group ul");

const list = document.querySelectorAll(".services .list__item__number");

list.forEach((el) => {
  // el.style.background = "red";
});

let navOpen = false;

burger.addEventListener("click", () => {
  if (!navOpen) {
    menu.style.transform = "translateX(0)";
    burgerLines.forEach((line) => {
      line.style.background = "white";
      line.style.position = "absolute";
      line.style.top = "10px";
    });

    burgerLine2.style.opacity = 0;
    burgerLine2.style.transform = "translateX(-80%)";
    burgerLine1.style.transform = "rotate(45deg)";
    burgerLine3.style.transform = "rotate(-45deg)";
    burgerLine3.style.width = "100%";

    document.body.style.overflowY = "hidden";
  }

  if (navOpen) {
    menu.style.transform = "translateX(-100%)";
    burgerLines.forEach((line) => {
      line.style.background = "#0477ff";
      line.style.position = "static";
    });

    burgerLine2.style.opacity = 1;
    burgerLine2.style.transform = "translateX(0)";
    burgerLine1.style.transform = "rotate(0)";
    burgerLine3.style.transform = "rotate(0)";
    burgerLine3.style.width = "75%";

    document.body.style.overflowY = "";
  }

  navOpen = !navOpen;
});
