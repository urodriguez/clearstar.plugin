$( "#fill_button" ).click(function() {       
    var donorInformation = { 
        ssn: "123456789",
        firstName: "Uciel",
        lastName: "Rodriguez",
        gender: "M",
        dateOfBirth: "Jun 20, 1968",
        dayPhone: "111111111",
        email: "Uciel.Rodriguez@endava.com",
        address: "Villa Devoto, adentro",
        city: "Miami",
        state: "FL",
        zipCode: "90210"
    }
    $('#ssn').val(donorInformation.ssn);
    $('#firstName').val(donorInformation.firstName);
    $('#lastName').val(donorInformation.lastName);
    $('#gender').val(donorInformation.gender);
    $('#dateOfBirth').val(donorInformation.dateOfBirth);
    $('#dayPhone').val(donorInformation.dayPhone);
    $('#email').val(donorInformation.email);
    $('#address').val(donorInformation.address);
    $('#city').val(donorInformation.city);
    $('#state').val(donorInformation.state);
    $('#zipCode').val(donorInformation.zipCode);
    
    M.updateTextFields();

});

$( "#submit_button" ).click(function() {
    $("#progress").show();      
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
                $("#pbar").toggleClass("determinate");
                $("#pbar").width('100%');
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