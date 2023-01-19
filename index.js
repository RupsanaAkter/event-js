

//create list------------

/*---------------
const li=document.createElement('li');
li.innerText='blog-5';
const ul=document.getElementById('blog-list');
ul.appendChild(li);
-----------------*/


//create article-------------

/*---------------
const article=document.createElement('article');
const h3=document.createElement('h3');
h3.innerText='My blog-5';
const p=document.createElement('p');
p.innerText='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quidem nemo repellat soluta aliquam dolor nostrum amet doloremque, at totam perspiciatis non quibusdam molestias beatae corrupti corporis numquam nulla ducimus!';
article.appendChild(h3);
article.appendChild(p);
const blogSection=document.getElementById('sec-1');
blogSection.appendChild(article);
----------------*/



document.getElementById('green-btn').addEventListener('click',function(){
    document.body.style.backgroundColor='green';
});