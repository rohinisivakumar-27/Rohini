const con = document.getElementById('container')
const arr=["Assets/stuart little.jpg",
    "Assets/cute girl.png",
    "NUN.jpg",
    "NUN3.jpg"
]

let i=1;
let changeimg=()=>{
    if(i==5)
    {
        i=0;
    }
    con.style.backgroundImage= url('download.jpeg');
    i++;
}