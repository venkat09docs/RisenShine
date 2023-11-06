
    function showLeft() {
        document.getElementById("classShow").style.display = "block";
    }
    var multipleCardCarousel = document.querySelector("#carouselExampleControls");

    if (window.matchMedia("(min-width: 576px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#carouselExampleControls .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 2) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
        $("#carouselExampleControls .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
    } else {
        $(multipleCardCarousel).addClass("slide");
    }
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //>=, not <=
        if (scroll >= 500) {
            //clearHeader, not clearheader - caps H
            $(".navbar-light").addClass("shownav");
            $(".back-to-top").addClass("shownav");

        }
        else {
            $(".navbar-light").removeClass("shownav");
            $(".back-to-top").removeClass("shownav");
        }
        //>=, not <=
        if (scroll <= 500) {
            //clearHeader, not clearheader - caps H
            $(".scroll-to-bottom").addClass("showarrow");
        }
        else {
            $(".scroll-to-bottom").removeClass("showarrow");
        }
    }); //missing );

    function loadMore() { var x = document.getElementById("loadmore"); if (x.innerHTML === "Load More") { x.innerHTML = "Load Less" } else { x.innerHTML = "Load More" } }
