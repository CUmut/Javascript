function birinci() {
    setTimeout(() => {
        alert(1);
    }, 500);
}

function ikinci() {
    alert(2);
}

birinci();
ikinci();

// çıktı
// 2
// 1


//Example 2
function birinci(callback) {
    setTimeout(() => {
        function call() {
            alert(1);
            callback();
        }
    }, 500);
}

function ikinci() {
    alert(2);
}

birinci(ikinci); 

// çıktı 
// 1 
// 2
