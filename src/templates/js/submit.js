$( "#submit_button" ).click(function() {       
    $.ajax({
        url: "http://localhost/ClearStar.MIS.Services/Plugin/CreateProfile",
        contentType: "application/json",
        type: "POST",
        data: ConvertFormToJSON(),
        success: function (result) {
            var options = {
                type: "basic",
                title: "Your profile has been created",
                message: "Profile number: " + result,
                iconUrl: "clearstar.png"
            };
            
            chrome.notifications.create(options, callback);
        
            function callback() {
                //alert("work")
            }
        }
    });    
});

function ConvertFormToJSON(){
    var serviceIds = ""

    if ($('#empVerif').is(":checked")) {
        serviceIds += "GWDE_00016"
    }

    if ($('#eduVerif').is(":checked")) {
        if (serviceIds != "") {
            serviceIds += ",GWDE_00017"
        } else {
            serviceIds += "GWDE_00017"
        }
    }

    var donorInformation = {
        ssn: $('#ssn').val(),
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        gender: $('#gender').val(),
        dateOfBirth: $('#dateOfBirth').val(),
        dayPhone: $('#dayPhone').val(),
        email: $('#email').val(),
        address: $('#address').val(),
        city: $('#city').val(),
        state: $('#state').val(),
        zipCode: $('#zipCode').val()
    }

    var model = {
        donorInformation: donorInformation,
        serviceIds: serviceIds
    }
    
    return JSON.stringify(model);
}