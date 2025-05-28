const endpoints = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
    "https://jsonplaceholder.typicode.com/posts/4",
    "https://jsonplaceholder.typicode.com/posts/5",
    "https://jsonplaceholder.typicode.com/posts/6",
    "https://jsonplaceholder.typicode.com/posts/7",
    "https://jsonplaceholder.typicode.com/posts/8",
    "https://jsonplaceholder.typicode.com/posts/9",
    "https://jsonplaceholder.typicode.com/posts/10"
];
const FetchPostsData = async (urls) => {
    const response = await Promise.all(
        urls.map(async (item) => {
            let data = await fetch(item)
            data = await data.json();
            return data;
        })
    );
    console.log("Fetched API Data >", response)
}

//FetchPostsData(endpoints)



 const formatted = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'EUR',
}).format(123456.78);
console.log(formatted)

const obj = {}
console.log(typeof obj, typeof null);

console.log(typeof null === "object")
console.log(typeof 2 === "number")

const 5book = "Williams"
