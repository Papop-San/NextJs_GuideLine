// Define the Blog type interface
interface Blog {
    id: string;
    name: string;
    age: string;
    // Create Type of Api Key 
    [key: string]: any;
}


async function getBlogs(): Promise<Blog[]> {
    const response = await fetch("https://66e68f6d17055714e589e1d8.mockapi.io/blog/user");

    if (!response.ok) {
        throw new Error("Cannot fetch blog");
    }

    return response.json();
}


export default async function Page() {
    
    // Crate Variable for fetch fucntion 
    const blogs: Blog[] = await getBlogs();
    console.log('blogs', blogs);

    return (
        <div>
            <h1>This will Show User Data</h1>
            {
                blogs.map((blog: Blog, index: number) => (
                    <div key={blog.id}>
                        {index + 1}. {blog.name}   Age: {blog.age}
                    </div>
                ))
            }
        </div>
    );
}
