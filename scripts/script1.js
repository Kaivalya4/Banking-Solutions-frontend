let ctr = 0;
let button1 = document.getElementById("button1");
let buttons;
let loading = false;
button1.addEventListener("click", () => {
  loading = true;
  let loadingBlock = document.querySelector(".loading");
  let loadingStatus = document.createElement("p");
  loadingStatus.className = "loadingStatus";
  loadingStatus.innerHTML = "Loading...";
  loadingBlock.appendChild(loadingStatus);
  fetch("https://bank-solutions.herokuapp.com/all")
    .then((result) => result.json())
    .then((data) => {
      loading = false;
      const loadingStatus = document.querySelector(".loadingStatus");
      loadingBlock.removeChild(loadingStatus);

      button1.style.display = "none";
      for (let i = 0; i < data.length; i++) {
        button1.style.display = "none";
        let tbody = document.getElementById("to-put");

        let newtr = document.createElement("tr");
        newtr.className = "tr-class";

        let newtd1 = document.createElement("td");
        newtd1.className = "td-class";

        let newtd2 = document.createElement("td");
        newtd2.className = "td-class";

        let newtd3 = document.createElement("td");
        newtd3.className = "td-class";

        let newtd4 = document.createElement("td");
        newtd4.className = "td-class";
        newtd4.style.border = "none";

        newtd1.innerHTML = data[i].account_number;
        newtd2.innerHTML = data[i].name;
        newtd3.innerHTML = data[i].balance;

        let buttoni = document.createElement("button");
        buttoni.id = `but${++ctr}`;
        buttoni.className = "tablebut";
        buttoni.style.width = "100%";
        buttoni.style.borderRadius = "10px";
        buttoni.style.backgroundColor = "rgba(255, 255, 255,0.9)";
        buttoni.style.border = "none";
        buttoni.textContent = "Click";
        newtd4.appendChild(buttoni);
        /*newtd4.innerHTML = `<button id="but${++ctr}"
            class = "tablebut"
            style ="width : 100%; border-radius : 10px;
            background-color : rgba(255, 255, 255,0.6); 
            border : none;">Click</button>`;
*/
        newtr.appendChild(newtd1);
        newtr.appendChild(newtd2);
        newtr.appendChild(newtd3);
        newtr.appendChild(newtd4);

        tbody.appendChild(newtr);
      }

      /* document.getElementById('cust-table').style.display = "block";
       */ buttons = document.querySelectorAll(".tablebut");
      for (const but of buttons) {
        but.addEventListener("click", (e) => {
          let content =
            e.target.parentNode.parentNode.firstElementChild.innerHTML;
          sessionStorage.setItem("single_cust", content);
          location.href = "./Single.html";
        });
      }
    });
});
