"use client";
import { useState, useEffect, Suspense } from "react";


interface Blog {
  id: string;
  name: string;
  age: string;
  formData: FormData;
  [key: string]: any; 
}

async function getBlogs(): Promise<Blog[]> {
  const response = await fetch("https://66e68f6d17055714e589e1d8.mockapi.io/blog/user");

  if (!response.ok) {
    throw new Error("Cannot fetch blog");
  }

  return response.json();
}

export default function Page() {
 
  const [blogState, setBlogState] = useState<Blog[]>([]);

  async function submitForm (formData : FormData) {
    "use Server"
    console.log(formData.get("email"))
  }

  const initBlog = async () => {
    try {
      // Fetch the blogs
      const result: Blog[] = await getBlogs();
      setBlogState(result);
    } catch (error) {
      console.log("Error fetching blogs", error);
    }
  };

  useEffect(() => {
    initBlog();
  }, []); 

  return (
    <div>
      <h1>API User React Hook</h1>

      //Suspense for management Loading Stage
      <Suspense fallback ={<p>Loading feed...</p>}>
      {blogState.map((blog, index) => (
        <div key={blog.id}>
          {index + 1}. {blog.name} - Age: {blog.age}
        </div>
      ))}
      </Suspense>

      <form action={submitForm}>
        Email<input name="email"></input>
        <button>Submit</button>
      </form>
    </div>

  
  );
}
