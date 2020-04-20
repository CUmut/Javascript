document.querySelector('#getPerson').addEventListener('click',getPerson);

document.querySelector('#getOne').addEventListener('click',getOne);

document.querySelector('#postData').addEventListener('click',postData);


function getOne() {

    var id = document.getElementById('getId').value;
    
    var url = "https://jsonplaceholder.typicode.com/users/" + id;

    var xhr = new XMLHttpRequest();

    xhr.open('GET',url , true);
    xhr.onload = function() {

        var get = JSON.parse(this.responseText);
        var html = "";

            html += ` <tr>
                    <td>${get.name}</td>
                    <td>${get.username}</td>
                    <td>${get.email}</td>
            </tr>`;  

        document.querySelector('#persons').innerHTML = html;
    }

    xhr.send();

}


function getPerson() {

    var url = "https://jsonplaceholder.typicode.com/users";

    var xhr = new XMLHttpRequest();

    xhr.open('GET',url , true);
    xhr.onload = function() {

        var gets = JSON.parse(this.responseText)
        var html = "";

        gets.forEach(item => {
            
                html += ` <tr>
                    <td>${item.name}</td>
                    <td>${item.username}</td>
                    <td>${item.email}</td>
                </tr>`;  

        });

        document.querySelector('#persons').innerHTML = html;
    }

    xhr.send();

}

function postData(){
    const data = {
        userId : 1,
        title : "new title",
        body : "body"
    }

    var json = JSON.stringify(data);

    var url = "https://jsonplaceholder.typicode.com/posts";

    var xhr = new XMLHttpRequest();

    xhr.open('POST',url , true);

    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

    xhr.onload = function() {

        if(xhr.status === 201 && xhr.readyState === 4){
            var post = xhr.responseText;
            console.log(post);
        }
    }

    xhr.send(json);
}