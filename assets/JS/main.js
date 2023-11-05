/* ========== Start Banner ========== */
let overlay = document.querySelector(".banner .overlay");

let menu = document.querySelector(".banner .menu");
let closeMenu = document.querySelector(".banner .menu .head-menu .x-icon i");
let menuNavItem = document.querySelectorAll(".banner .menu .nav-item");
let menuHeadNavItem = document.querySelectorAll(".banner .menu .head-nav-item");
let menuNavItemIcon = document.querySelectorAll(".banner .menu .head-nav-item .nav-item-x i");
let menuSubNavItems = document.querySelectorAll(".banner .menu .nav-items .nav-item .sub-nav-items");
let headMenuAction = document.querySelectorAll(".banner .menu .menu-action-head");
let menuActionIcon = document.querySelectorAll(".banner .menu .menu-action-head .arrow-icon i");
let menuListOption = document.querySelectorAll(".banner .menu .menu-action .list-option");

let categories = document.querySelector(".categories");
let closeCategories = document.querySelector(".categories .head-categories .x-icon i");
let categoriesNavItem = document.querySelectorAll(".categories .nav-item");
let categoriesHeadNavItem = document.querySelectorAll(".categories .head-nav-item");
let categoriesNavItemIcon = document.querySelectorAll(".categories .head-nav-item .nav-item-x i");
let categoriesSubNavItems = document.querySelectorAll(".categories .nav-items .nav-item .sub-nav-items");

let toggleMenu = document.querySelector(".navigation ul li:first-of-type");
let toggleCategories = document.querySelector(".navigation ul li:last-of-type");

// Swiper for banner image
var swiper = new Swiper(".mySwiper-categories", {
    spaceBetween: 15,
    cssMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});

// Function to add active class
function addActive(icon, subPage) {
    icon.addEventListener("click", ()=> {
        subPage.classList.add("active");
        overlay.classList.add("active");
    })
}

// Function to remove active class
function removeActive(icon, subPage) {
    icon.addEventListener("click", ()=> {
        subPage.classList.remove("active");
        overlay.classList.remove("active");
    })
}

// Handle lists in menu
function handleList(headNavItem, navItemIcon, NavItem, subNavItems) {
    headNavItem.forEach(head => {
        let headNum = head.dataset.num;
        head.addEventListener("click", ()=> {
            // Change Icon 
            navItemIcon.forEach(icon => {
                if (icon.dataset.num == headNum) {
                    icon.classList.toggle("fa-plus");
                    icon.classList.toggle("fa-minus");
                }
            })
            // Add to active class to open the list
            NavItem.forEach(item => {
                if (item.dataset.num == headNum) {
                    item.classList.toggle("active");
                }
            })
            subNavItems.forEach(list => {
                if (list.dataset.num == headNum) {
                    list.classList.toggle("active");
                }
            })   
        })
    })
}
headMenuAction.forEach(head => {
    let headNum = head.dataset.num;
    head.addEventListener("click", ()=> {
        // Change Icon
        menuActionIcon.forEach(icon => {
            if (icon.dataset.num == headNum) {
                icon.classList.toggle("fa-caret-left");
                icon.classList.toggle("fa-caret-down");
            }
        })
        // Add active class to open the list
        menuListOption.forEach(list => {
            if (list.dataset.num == headNum) {
                list.classList.toggle("active")
            }
        })

    })
})

// Call Functions for Menu
addActive(toggleMenu, menu);
removeActive(overlay, menu);
removeActive(closeMenu, menu);
handleList(menuHeadNavItem, menuNavItemIcon, menuNavItem, menuSubNavItems);

// Call Functions for Categories
addActive(toggleCategories, categories);
removeActive(overlay, categories);
removeActive(closeCategories, categories);
handleList(categoriesHeadNavItem, categoriesNavItemIcon, categoriesNavItem, categoriesSubNavItems);
/* ========== End Banner ========== */


/* ========== Start Category Type ========== */
var swiper = new Swiper(".mySwiper-category-type", {
    spaceBetween: 15,
    cssMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        570: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});
/* ========== End Category Type ========== */


/* ========== Start Product Container ========== */
var swiper = new Swiper(".mySwiper-products", {
    spaceBetween: 20,
    cssMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    breakpoints: {
        570: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 1
        }
    }
});

var swiper = new Swiper(".mySwiper-showcase", {
    spaceBetween: 20,
    cssMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    }
});
/* ========== End Product Container ========== */


/* ========== Start Blog ========== */
var swiper = new Swiper(".mySwiper-blog", {
    spaceBetween: 20,
    cssMode: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    breakpoints: {
        570: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
});
/* ========== End Blog ========== */