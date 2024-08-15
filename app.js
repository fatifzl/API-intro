const getPosts= async()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    const option = {
        method : "GET",
    }
    try{
        posts = await fetch(url,option);
        const response = await posts.json();
        printPosts(response);
    }catch(err){
        console.log(err);
    }
};
const printPosts=(postsList)=>{
    postsList.forEach((post) => {
        const postsTag= createPosts(post);
        document.getElementById("posts").appendChild(postsTag);
    });
};
const createPosts=(post)=>{
    const pTag = document.createElement("p");
    pTag.innerText=`title : ${post.title}`;
    return pTag;
};
const handleForm=(e)=>{
    e.preventDefault();
    const form = document.getElementById("create-post");
    const formData= new FormData (form);
    const data= {};
    formData.entries().forEach((element)=>{
        data[element[0]]=element[1];
    });
    createPost(data);
}
const createPost=async(data)=>{
    const url = "https://jsonplaceholder.typicode.com/posts"
    const option ={
        method : "POST",
        body : JSON.stringify(data),
    };
    try{
    const req = await fetch (url,option);
    console.log(req);
    }catch(err){
        console.log(err);
    }
}