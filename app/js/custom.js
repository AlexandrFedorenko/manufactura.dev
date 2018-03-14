$(function() {

    // no dragstart img
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    //burger menu
    $(".burger-menu").click(function () {
        $(this).toggleClass("menu-on");
    });
});

//open search top
function setOpenClass() {
    var searchTopOpen = document.querySelector('.search_form--desc');
    if(searchTopOpen.classList.contains('search_form--close')){
        searchTopOpen.classList.add('search_form--open');
        searchTopOpen.classList.remove('search_form--close');
    }else{
        searchTopOpen.classList.remove('search_form--open');
        searchTopOpen.classList.add('search_form--close');
    }
}
//open search top mob
function setOpenClassMob() {
    var searchTopOpen = document.querySelector('.search_form--mob');
    if(searchTopOpen.classList.contains('search_form--close')){
        searchTopOpen.classList.add('search_form--open');
        searchTopOpen.classList.remove('search_form--close');

    }else{
        searchTopOpen.classList.remove('search_form--open');
        searchTopOpen.classList.add('search_form--close');
    }
}

//open mob menu
function setOpenMenu() {
    var searchTopOpen = document.querySelector('.mob-header');
    if(searchTopOpen.classList.contains('mob-header--close')){
        searchTopOpen.classList.add('mob-header--open');
        searchTopOpen.classList.remove('mob-header--close');

    }else{
        searchTopOpen.classList.remove('mob-header--open');
        searchTopOpen.classList.add('mob-header--close');
    }
}



