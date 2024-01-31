$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoPlay: 3000,
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    center: true,
    nav: true,
    loop: true,
    responsive: {
      600: {
        items: 4,
      },
    },
  });
});
// tab

const tabs = document.querySelectorAll("[data-tab-value]");
const tabInfos = document.querySelectorAll("[data-tab-info]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabValue);

    tabInfos.forEach((tabInfo) => {
      tabInfo.classList.remove("active");
    });
    target.classList.add("active");
  });
});
