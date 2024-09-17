"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';

interface Blog {
  id: string;
  name: string;
  age: string;
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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result: Blog[] = await getBlogs();
        setBlogState(result);
      } catch (error) {
        console.log("Error fetching blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading feed...</p>;

  return (
    <div>
      <h1>API User React Hook</h1>
      {blogState.map((blog, index) => (
        <div key={blog.id}>
          {index + 1}. {blog.name} - Age: {blog.age}
          <Link href={`/blog/${blog.id}`} className="mx-4 bg-blue-400 text-white p-2 rounded">
            Go to read blog
          </Link>
        </div>
      ))}
    </div>
  );
}
