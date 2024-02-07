/*const listaPosts = document.querySelector("#listaPosts");

const  httprequest = new XMLHttpRequest();
httprequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
httprequest.send();
console.log(httprequest);

let posts;

httprequest.onreadystatechange = function(){
    if(httprequest.readyState === 4 && httprequest.status === 200){
      posts =  JSON.parse(httprequest.response);
        console.log(httprequest.response);
        exibiPost();
    }
 
}

function exibiPost(){
    setTimeout(() => {
        let saida = "";
        posts.forEach((post) => {
            saida += `<li>${post.title}</li>
            <li>${post.body}</li> <hr> </hr>`
        });
        listaPosts.innerHTML = saida;
    })
}*/

/*  const listaPosts = document.querySelector("#listaPosts");
let posts;

fetch( "https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((json) => {
    posts = json;
})
.then(()=>{
exibiPost();
});

function exibiPost(){
    setTimeout(() => {
        let saida = "";
        posts.forEach((post) => {
            saida += `<li>${post.title}</li>
            <li>${post.body}</li> <hr> </hr>`
        });
        listaPosts.innerHTML = saida;
    })
}*/

/* 
const listaPosts = document.querySelector("#listaPosts");
let posts;

fetch( "https://jsonplaceholder.typicode.com/posts/",{
method:"POST",
body: JSON.stringify({
    title: "New post",
    body: "Corpo do novo post",
    userId: 5,
}),
headers: {
    'Content-type': 'application/json; charset=UTF-8',
}
})
.then((response) => response.json())
.then((json) => {
    posts = json;
})
.then(()=>{
    console.log(posts);
//exibiPost();
});*/


const listaPosts = document.querySelector("#listaPosts");
let posts;

fetch( "https://jsonplaceholder.typicode.com/posts/3",{
method:"PUT",
body: JSON.stringify({
    title: "New post",
    body: "Corpo do novo post - atualização",
    userId: 5,
}),
headers: {
    'Content-type': 'application/json; charset=UTF-8',
}
})
.then((response) => response.json())
.then((json) => {
    posts = json;
})
.then(()=>{
    console.log(posts);
//exibiPost();
})