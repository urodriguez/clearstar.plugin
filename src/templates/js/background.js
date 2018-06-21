//const storage = chrome.storage.sync;
//alert("background");

//var port = chrome.runtime.connect();


//chrome.runtime.onMessageExternal.addListener(
//chrome.tabs.onMessage.addListener(
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    debugger;
    //var firstName = $("#topcard-firstname");
    var firstName = "zaraza 3";
    //var aa = document.querySelector('#topcard-firstname');
    //alert(aa.textContent);
    debugger;
    // var firstHref = $("a[href^='http']").eq(0).attr("href");
    // alert(firstHref);

    //alert($("#topcard-firstname"));
    sendResponse("pepepepe background - " + firstName != undefined ? firstName : "vacio");
    // const key = request.data.key;

    // switch (request.command) 
    // {
    //   // case 'setItem':
    //   //   const value = request.data.value;
    //   //   storage.set({ [key]: value }, () => {
    //   //     const error = chrome.runtime.lastError;
    //   //     sendResponse(error);
    //   //   });
    //   //   break;
    //   case 'getItem':
    //     var firstName = $("#topcard-firstname").val();
    //     alert(firstName);
    //     if (firstName)
    //     {
    //       sendResponse(firstName);
    //     }

    //     // storage.get(key, items => {
    //     //   const resp = items ? items[key] : undefined;
    //     //   sendResponse(resp);
    //     // });
    //     break;
    //   case 'removeItem':
    //     // storage.remove(key, () => {
    //     //   const error = chrome.runtime.lastError;        
    //     //   sendResponse(error);
    //     // });
    //     break;
    //   default:
    //     //sendResponse('* background.js received bad request: ' + JSON.stringify(request));
    // }

  return true;

});