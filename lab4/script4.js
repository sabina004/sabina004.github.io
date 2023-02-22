const LOVELY_MUSIC={
    'favorite singers':[
        ['Dequine','Выше'],
        ['M`dee', '18'],
        ['The Weeknd', 'After Hours']

    ],
    'biography' : [
       ['Данеля Садыкова','23'],
       ['Мади Токтаров','23'],
       ['Abel Makkonen Tesfaye','33']
    ]
}
document.querySelector('.music').innerHTML=`<table class="lovely"></table>`
for(key in LOVELY_MUSIC){
    let row= document.createElement('tr')
    row.innerHTML=`<td colspan="2">${key}</td>`
    document.querySelector('.lovely').appendChild(row)
    for(let i=0; i<LOVELY_MUSIC[key].length; i++){
        let row =document.createElement('tr')
        row.innerHTML=`
        <td>${LOVELY_MUSIC[key][i][0]}</td>
        <td>${LOVELY_MUSIC[key][i][1]}</td>
        `
        document.querySelector('.lovely').appendChild(row)
    }
}
// avrg=((LOVELY_MUSIC[key][0][1])+(LOVELY_MUSIC[key][1][1])+(LOVELY_MUSIC[key][2][1]))/LOVELY_MUSIC[key].length;

// document.getElementById("demo").innerHTML = LOVELY_MUSIC[key][1][1]LOVELY_MUSIC[key][2][1]/LOVELY_MUSIC[key].length;


// avrg=(LOVELY_MUSIC[key][0][1]+LOVELY_MUSIC[key][1][1]+LOVELY_MUSIC[key][2][1])/3;
// document.getElementById("demo").innerHTML = LOVELY_MUSIC[key][2][1];


 
let sum = 0; 
 
for(let i = 0; i < LOVELY_MUSIC[key].length; i++){ 
    sum +=LOVELY_MUSIC[key][i][1];

} 
 
avrg = sum / LOVELY_MUSIC[key].length;

 
document.getElementById("demo").innerHTML = avrg;

// document.write('current_date_time_block2');
// function hello (userFirstName, userLastName) {
//     console.log( `Добро пожаловать, ${userLastName} ${userFirstName} `);
//   }

//   hello();
  
//   const someUser = {
//     firstname: 'Петр',
//     lastname: 'Петров'
//   }

//   function changeUserName(user) {

//     user.firstname = 'Александр';
//   }
 
//   changeUserName(someUser);

//   console.log(someUser.firstname);
//   document.getElementById("on").innerHTML = changeUserName;

let name = prompt("Inter your name...");
 
        alert(`Hello, ${name}!`);

    

        var x = avrg1(23, 23, 33);
        document.getElementById("on").innerHTML = x;
        
        function avrg1(a, b, c) {
          return (a+b+c)/3;
        }