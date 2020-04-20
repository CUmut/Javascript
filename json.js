document.querySelector('#getPerson').addEventListener('click',loadPerson);

function loadPerson() {
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET','person.json',true);

    xhr.onload = function() {

        // if(this.status === 200){
        //     console.log(this.responseText); // String döner
        //     console.log(JSON.parse(this.responseText)); // object'ye çevirdik
        // }

        let persons = JSON.parse(this.responseText)

        let html = "";

        persons.forEach(prs => {
            html += ` <tr>
                        <td>${prs.name}</td>
                        <td>${prs.username}</td>
                    </tr>`;  
            
        });    

        document.querySelector('#persons').innerHTML = html;
    }

    xhr.send();
}