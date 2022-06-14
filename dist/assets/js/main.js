window.onload = () => {
  owlCarousel.init();
  tabs.init();
  header.init();
  formSearch.init();
};

const loading = {
  init: function () {
    this.configLoading();
  },
  configLoading: function () {},
};

const owlCarousel = {
  init: function () {
    this.setupTabsCarousels();
  },
  setupTabsCarousels: function () {
    const mains = document.querySelectorAll(".News-carousel");
    mains.forEach((main) => {
      const $owl = $(main).owlCarousel({
        responsive: {
          0: {
            items: 1.3,
            slideBy: 1.3,
          },
        },
        loop: true,
        autoplay: false,
        lazyLoad: true,
        dots: false,
        nav: false,
        margin: 20,
      });
    });
  },

  setupTeamCarousel: function () {
    const $owl = $("#about-team-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
        },
        575: {
          items: 2,
          slideBy: 2,
        },
        700: {
          items: 3,
          slideBy: 3,
        },
        991: {
          items: 4,
          slideBy: 4,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: true,
      nav: true,
      navText: [
        '<img src="./assets/icons/icon-arrow-left-white.svg" alt="" />',
        '<img src="./assets/icons/icon-arrow-right-white.svg" alt="" />',
      ],
      margin: 20,
    });
  },
};

const header = {
  init: function () {
    this.activeLink();
    this.toggleSidebar();
    this.subItemSidebar();
  },
  activeLink: function () {
    const { pathname } = window.location;
    const navigationLinks = document.querySelectorAll(".Navigation-item");
    const sidebarLinks = document.querySelectorAll(
      ".Sidebar-list-item-wrapper"
    );

    sidebarLinks.forEach((item) => {
      const dataPath = item.dataset.path.split(",");
      if (dataPath.includes(pathname)) item.classList.add("active");
    });

    navigationLinks.forEach((item) => {
      const dataPath = item.dataset.path.split(",");
      if (dataPath.includes(pathname)) item.classList.add("active");
    });
  },
  toggleSidebar: function () {
    const btnOpenSidebar = document.querySelector(".js-open-sidebar");
    const main = document.querySelector(".Sidebar");
    const overlayMain = main.querySelector(".Sidebar-overlay");

    btnOpenSidebar.addEventListener("click", (e) => {
      e.preventDefault();
      main.classList.toggle("active");
    });

    overlayMain.addEventListener("click", () => {
      main.classList.remove("active");
    });
  },
  subItemSidebar: function () {
    const sidebarItems = document.querySelectorAll(".Sidebar-list-item");

    sidebarItems.forEach((item) => {
      const children = item.querySelector(".Sidebar-list-sub");

      if (children) {
        const wrapper = item.querySelector(".Sidebar-list-item-wrapper");
        wrapper.addEventListener("click", (e) => {
          e.preventDefault();
          children.classList.toggle("active");
        });
      }
    });
  },
};

const tabs = {
  init: function () {
    this.config();
  },
  config: function () {
    const tabsWrappers = document.querySelectorAll(".tabs-wrapper");
    tabsWrappers.forEach((wrapper) => {
      const tabItems = wrapper.querySelectorAll(".tab-item");
      const tabMainItems = wrapper.querySelectorAll(".tab-main-item");

      tabItems.forEach((item, index) =>
        item.addEventListener("click", () => {
          tabItems.forEach((i) => i.classList.remove("active"));
          tabMainItems.forEach((i) => i.classList.remove("active"));

          tabItems[index].classList.add("active");
          tabMainItems[index].classList.add("active");
        })
      );

      tabItems?.[0]?.classList?.add("active");
      tabMainItems?.[0]?.classList?.add("active");
    });
  },
};

const formSearch = {
  init: function () {
    this.config();
  },
  config: function () {
    const form = document.querySelector(".SearchInput");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "ket-qua-tim-kiem.html";
    });
  },
};
