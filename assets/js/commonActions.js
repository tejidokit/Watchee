


$(document).ready(function() {
    
//nav bar button function

    $(".navShowHide").on("click", function() {
    
        //console.log("utot")
        var main = $("#mainSectionContainer");
        var nav = $("#sideNavContainer");

        if(main.hasClass("leftPadding")) {
            nav.hide();
        }
        else {
            nav.show();
        }
        main.toggleClass("leftPadding");
    });
});



/**/