var xhr  = new XMLHttpRequest();

// var readyState = false;

// onreadystatechange : olay tetiklendiğin de durumu kontrol ediyoruz.
xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState === 4){
        console.log (xhr.responseText); // responseTextt ile ekrana yazdırdık
    }else{
        console.log('Kaynak sunucuya erişilemiyor !!!')
    }
}

// true ile asenkron bir istek üretiyoruz.
// false ile senkron bir istek üretiyoruz.
// GET metodu ile bilgileri getir.
xhr.open('GET','document.txt',true);
xhr.send();


// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// status	200: "OK"
// 403: "Forbidden"
// 404: "Page not found"
// For a complete list go to the Http Messages Reference
// statusText	Returns the status-text (e.g. "OK" or "Not Found")