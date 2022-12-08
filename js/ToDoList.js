

let liveToastBtn = document.querySelector("#liveToastBtn")
let list = document.querySelector("#list")
let task = document.querySelector("#task")
// let exit = document.querySelector("#exit")

let yenieleman = document.querySelector("#list").children[0];
// let yenieleman = document.createElement("li");
yenieleman.id ="liTagi";

// let lininYeniEleman = document.createElement("svg");
// lininYeniEleman.id="exit"
// lininYeniEleman.xmlns="http://www.w3.org/2000/svg";
// lininYeniEleman.width="16";
// lininYeniEleman.height="16";
// lininYeniEleman.fill="currentColor";
// lininYeniEleman.class="bi bi-x";
// lininYeniEleman.viewBox="0 0 16 16";
// console.log(lininYeniEleman);

// let path =document.createElement("path");
// path.d='d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"'

// document.getElementById("exit").appendChild(path);
// document.getElementById("liTagi").appendChild(exit);
// document.getElementById("list").appendChild(yenieleman);


// <i > <i svg id="exit" style="float: right;"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
//             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//             </svg></i></i>

//burada ekle tıklanmasında yeni öğe eklemesi için formül oluşturuldu
liveToastBtn.addEventListener('click', function () {      // burada önce ekle yi tıklanırken yakalamasını söyledik
    
    let yenieleman = document.createElement('li');     // oluşturulan yeni öğenin ulnin alt elamnı olan li olarak atanmasını söyledik
    
    yenieleman.classList.add('yeniögeStil');     // yeni öğeye ye gerektiğinin clas listine css stil verildi
    
    list.appendChild(yenieleman);      // listenin çocuğuna yeni öğeyi olmasını söyledik

    
    yenieleman.innerHTML = task.value;       // bu yeni öğeyede task değişkeninde yazılanı yazmasını dedik
    task.value = "";                        // ekleme işlemi bitincede task ın valuesini boşaltmasını söyledik
    
    // öğelerin üstüne tıklanınca üzerlerine çizgi çekkmesi için fonksiyon
    yenieleman.addEventListener('click', function(){
        yenieleman.style.textDecoration = 'line-through';
    });

    exit.addEventListener('click' , function(){
        yenieleman.remove();
    })




})

console.log(yenieleman);