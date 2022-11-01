// nav bar scroll :
window.addEventListener("scroll",() => {
    const nav = document.querySelector('nav');
    nav.classList.toggle("sticky",window.scrollY > 0);
})


// filter
if(document.querySelector('.element-item')){
    var iso = new Isotope(".items", { itemSelector: ".element-item", layoutMode: "fitRows" }),
        filterFns = {
            numberGreaterThan50: function (e) {
                var t = e.querySelector(".number").textContent;
                return parseInt(t, 10) > 50;
            },
            ium: function (e) {
                return e.querySelector(".name").textContent.match(/ium$/);
            },
        },
        filtersElem = document.querySelector(".filters-button-group");
    filtersElem.addEventListener("click", function (e) {
        if (matchesSelector(e.target, "button")) {
            var t = e.target.getAttribute("data-filter");
            (t = filterFns[t] || t), iso.arrange({ filter: t });
        }
    });
    for (var buttonGroups = document.querySelectorAll(".button-group"), i = 0, len = buttonGroups.length; i < len; i++) {
        var buttonGroup = buttonGroups[i];
        radioButtonGroup(buttonGroup);
    }
    function radioButtonGroup(e) {
        e.addEventListener("click", function (t) {
            matchesSelector(t.target, "button") && (e.querySelector(".is-checked").classList.remove("is-checked"), t.target.classList.add("is-checked"));
        });
    }
}

