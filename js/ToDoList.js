
/*
let liveToastBtn = document.querySelector("#liveToastBtn")
let list = document.querySelector("#list")
let task = document.querySelector("#task")
// let exit = document.querySelector("#exit")

let yenieleman = document.querySelector("#list").children[0];
// let yenieleman = document.createElement("li");
yenieleman.id ="liTagi";
*/

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

/*
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
*/

// TÜM ELEMENTLERİ SEÇMEK

const input = document.querySelector("#task");
const ekle = document.querySelector("#liveToastBtn");
const ul = document.querySelector("#list");
// const ilkDiv = document.querySelector(".close");
// const ikinciDiv = document.querySelector(".container");
const ilkDiv = document.querySelectorAll(".mr-1")[0];
const pztfUyari = document.querySelectorAll(".toast-body")[0];
const ngtfUyari = document.querySelectorAll(".toast-body")[1];

//* storage için global bir dizi değişkenini hazırlıyoz
let todos = [];


runEvents();

//todo EKLE tıklanılmasını yakalamak için fonksiyon
function runEvents(){
    //todo EKLE tıklanılmasını yakadıktan sonra gideceği fonksiyonu belirledik
    ekle.addEventListener("click",addTodo);
    //todo listelere eklemeler yapıldıktan sonra sayfa da sabit kalması için talimat girdik
    document.addEventListener("DOMContentLoaded",pageLoaded);
    //todo lide ki çarpı ikonu tıklandığında arayüzden silmesi için fonksiyon 
    ul.addEventListener("click",removeTodoToUI);
}

//todo listelere eklemeler yapıldıktan sonra sayfa da sabit kalması için 
function pageLoaded(){
    //* önceden hazırladığımız todos a değerlerin atandığı fonksiyonu çağırdık.
    chekTodoFromStorage();
    todos.forEach(function(todo){
        // console.log(todo);  // deneme yaptık consola yansıtarak
        addTodoUI(todo);    //todo addTodoUI bu fonksiyonla ara yüze ekleme yaptırıyorduk şimdide kalıcı olmasını sağlamış olduk.
    });

}

//todo ara yüzden li elementlerini silmesi için olan fonksiyon
function removeTodoToUI(e){
    // console.log(e.target);

    if(e.target.className==="fa fa-remove"){
        // console.log("çarpıya basıldı");
        //? çarpıya basılınca i etiketini yakaladık şimdi onun üstü a onunda üstü li yi yakalayıp todo değişkenine atadık
        // Ekrandan silmek
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        //Storage den silmek  bu removeTodoStorage fonksiyonu kullanmasını söyledik. 
        removeTodoStorage (todo.textContent);
        // silince uyarı ver dedik
        showAlert("success","Listeden başarıyla silindi.");
    }

}

//todo Storage den silmesi için fonksiyon
function removeTodoStorage(removTodo){
    chekTodoFromStorage();
    todos.forEach(function(todo,index){
        if(removTodo===todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}




//todo EKLE tıklanılmasında uygulıyacağı fonksiyon
function addTodo(e){
    const inputText = input.value.trim();
    if(inputText==null || inputText==""){
        document.querySelector(".toast-body")
        //Boş giriş yapılması durumunda
        showAlert("warning","Lütfen bir değer giriniz");
    }else{
        //Ara yüze ekleme
        addTodoUI(inputText);
        //Storage ekleme
        addTodoToStorage(inputText);
        //Bilgilendirme uyarısı
        showAlert("success","Listeye eklendi.");
    }
    
    
    console.log("Submit eventi calisti");
    
}

//todo Arayüz eklemesi için fonksiyon
function addTodoUI(newTodo){
    const li = document.createElement("li");
    li.className="list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove"

    a.appendChild(i);
    li.appendChild(a);
    ul.appendChild(li);

    input.value = "";

}

//todo LocalStorage eklemesi için fonksiyon
function addTodoToStorage(newTodo){
    chekTodoFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

//todo LocalStorage fonksiyonu için bir key değerinin olup olmadığını kontro eden bi fonksiyon
//* Bu fonksiyon Array in dolu ve boş olmasının kontrolünü sağlamaktadır
function chekTodoFromStorage(){
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

//todo Bilgilendirme uyarısı için bir fonksiyon yazcaz
function showAlert(type,message){
    /* Bunu bootstrap tan aldık ve kopya çekebiliriz ama ben aşağıda başka bi taneden kopyalamaya çalışacam
    <div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
  </div>
 </div> 
  </div>
  */
    const div = document.createElement("div");
    // div.className = "alert alert-"+ type;
    div.className = `alert alert-${type}`;
    div.textContent = message;

    ilkDiv.appendChild(div);

    //* Bu uyarının bir kaç saniye sonra silinmesini istiyecez
    
    setTimeout(function(){
        div.remove();
    },3500);



}