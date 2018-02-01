


function animateEverythingDown(){
    console.log("lbalubb");
    $("#AmazonVideoNavigation").css("top","100px");
    $("#Content").css("top","30%");
}

function animateEverythingUp(){
    $("#AmazonVideoNavigation").css("top","50px");
    $("#Content").css("top","20%");
}


$(document).ready(function(){
    $("#showAmazonMenuIcon").click(function(){
        if ($('#AmazonPrimeNavigationLowerPart').css('display')=="none"){
            $("#AmazonPrimeNavigationLowerPart").show();
            $("#hideAmazonNavigationIcon").show();
            $("#showAmazonNavigationIcon").hide();  
            animateEverythingDown();
        } else {
            $("#AmazonPrimeNavigationLowerPart").hide();
            $("#hideAmazonNavigationIcon").hide();
            $("#showAmazonNavigationIcon").show();
            animateEverythingUp();
        }                
    });
    
    
    
    $("#AmazonVideoNavigation li").on('click', function(){       
        
        $("#AmazonVideoNavigation a").each(function(){
            $(this).css("color", "black");
        })
        
        $("#AmazonVideoNavigation i").each(function(){
            $(this).css("color", "white");
        })
        
        var li = $( this )[0];        
        $(li).css("color", "#F28500");
        var liIcon = $(li).children()[0];  
        $(liIcon).css("color", "#F28500");
        var liAnchor = $(li).children()[1];  
        $(liAnchor).css("color", "#F28500");        
    });
    
    
    
    
    $("#AmazonVideoVideoKategoriesNavigation li").on('click', function(){
            
        $("#AmazonVideoVideoKategoriesNavigation li").each(function(){
            var allLis = $( this )[0];
            $(allLis).css("border-bottom-color", "transparent");
            $(allLis).children().css("color", "lightgrey");
        });
        
        var li = $( this )[0];
        $(li).css("border-bottom-color", "#F28500");
        $(li).children().css("color", "#F28500");  
        
    });
    
    
    
    $("#AmazonVideoFilter .FilterContainer").on('click', function(){        
        
        $(".FilterContainer label").each(function(){
            $(this).css("color", "white");
        });        

        var filterContainer = $(this);        
        var radio = $(filterContainer).children()[0]
        var label = $(filterContainer).children()[1];
        
        $(radio).prop("checked", true);
        $(label).css("color", "#F28500");
    })
    
    $("#AmazonVideoFilter .FilterContainer").on('hover', function(){        

        var filterContainer = $(this);
        var label = $(filterContainer).children()[1];

        $(label).css("color", "#F28500");
    })
    
    $(".dropbtn").on('click', function(){
        if ($("#dropdown-content").css("display")=="none"){
            $("#dropdown-content").css("display", "block"); 
        } else {
            $("#dropdown-content").css("display", "none");
        }        
    })
    
    
});