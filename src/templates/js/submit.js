$( "#submit_button" ).click(function() {

    M.toast({html: 'Submitting your profile data', classes: 'rounded'});

    setTimeout(function(){
        var options = {
            type: "basic",
            title: "Your profile has been created",
            message: "Profile number: 123456789",
            iconUrl: "clearstar.png"
        };
        
        chrome.notifications.create(options, callback);
    
        function callback() {
            //alert("work")
        }
    }, 3000)
});