//instanitiate the http 
const http = new HTTP();

//call the create methods...
http.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(err => console.log(err))

http.post('https://jsonplaceholder.typicode.com/posts', {name:'tony', age:'young', gender:'male'})
    .then(data => console.log(data))
    .catch(err => console.log(err))    

http.put('https://jsonplaceholder.typicode.com/posts/1', {name:'tony', age:'young', gender:'male'})
    .then(data => console.log(data))
    .catch(err => console.log(err))  

http.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(err => console.log(err))      