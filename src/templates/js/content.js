chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
    //alert("Got message from background page: " + msg);
    debugger;
    var name = $("#pv-contact-info").text().trim();
    var email = $("a.pv-contact-info__contact-link", "section.pv-contact-info__contact-type.ci-email").text().trim();
    var names = name.split(" ");
    var firstName = names[0];
    var lastName = names[1];
    
    var donorInformation = { 
        ssn: "999999999",
        firstName: firstName,
        lastName: lastName,
        gender: "f",
        dateOfBirth: "Jun 20, 1986",
        dayPhone: "",
        email: email,
        address: "",
        city: "Miami",
        state: "FL",
        zipCode: "90210"
    }

    // var donorInformation = { 
    //     ssn: "123456789",
    //     firstName: firstName,
    //     lastName: lastName,
    //     gender: "",
    //     dateOfBirth: "Jun 20, 1968",
    //     dayPhone: "111111111",
    //     email: email,
    //     address: "Villa Devoto, adentro",
    //     city: "Miami",
    //     state: "FL",
    //     zipCode: "90210"
    // }
    sendResponse(donorInformation);
    return true;
  });


