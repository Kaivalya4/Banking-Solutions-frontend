let content = JSON.parse(sessionStorage.getItem("single_cust"));

fetch(`https://bank-solutions.herokuapp.com/${content}` , {
    method : 'PUT',
    headers : {
        'Content-type' : 'application/json'
    }
})
.then((response) => response.json())
.then((singleData) => {
    let h4 = document.getElementById('name');
    h4.innerHTML = singleData[0].name;  
    let h5 = document.getElementById('accNo');
    h5.innerHTML = singleData[0].account_number;
    let h3 = document.getElementById('balance');
    h3.innerHTML = `Rs. ${singleData[0].balance}`;

    let from = document.getElementById('from');
    from.value = singleData[0].account_number;
    from.style.pointerEvents = 'none';

    console.log(from);
}) 

fetch(`https://bank-solutions.herokuapp.com/details/${content}`)
.then( (response) => response.json())
.then( (datas) => {
    for(let data of datas){
        let tbody = document.getElementById('trans-detail');

        let newtd1 = document.createElement('td');
        let newtd2 = document.createElement('td');
        let newtd3 = document.createElement('td');
        let newtd4 = document.createElement('td');

        newtd1.innerHTML = data.from_account;
        newtd2.innerHTML = data.to_account;
        newtd3.innerHTML = data.transac_date;
        newtd4.innerHTML = data.amount;

        if(data.to_account == content){
            newtd4.style.backgroundColor = 'green';
        }
        else{
            newtd4.style.backgroundColor = 'red';
        }

        newtd4.style.borderRadius = '10px';
        newtd4.style.color = 'white';
        newtd4.style.opacity = 0.6;
        newtd4.style.paddingLeft = '10px';

        let newtr = document.createElement('tr');
        newtr.appendChild(newtd1);
        newtr.appendChild(newtd2);
        newtr.appendChild(newtd3);
        newtr.appendChild(newtd4);

        tbody.appendChild(newtr);
    }
})


