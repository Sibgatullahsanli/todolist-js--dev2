

let liveToastBtn = document.querySelector("#liveToastBtn")
let list = document.querySelector("#list")
let task = document.querySelector("#task")
let exit = document.querySelector("#exit")


//burada ekle tıklanmasında yeni öğe eklemesi için formül oluşturuldu
liveToastBtn.addEventListener('click', function c(params) {   // burada önce ekle yi tıklanırken yakalamasını söyledik
    let yeniöge = document.createElement('li'); // oluşturulan yeni öğenin ulnin alt elamnı olan li olarak atanmasını söyledik
    yeniöge.classList.add('yeniögeStil'); // yeni öğeye ye gerektiğinin clas listine css stil verildi
    list.appendChild(yeniöge); // listenin çocuğuna yeni öğeyi olmasını söyledik
    yeniöge.innerHTML = task.value; // bu yeni öğeyede task değişkeninde yazılanı yazmasını dedik
    task.value = ""; // ekleme işlemi bitincede task ın valuesini boşaltmasını söyledik
    
    // öğelerin üstüne tıklanınca üzerlerine çizgi çekkmesi için fonksiyon
    yeniöge.addEventListener('click', function(){
        yeniöge.style.textDecoration = 'line-through';
    });

    exit.addEventListener('click' , function(){
        yeniöge.remove();
    })




})