interface Blog {
    name: string;
    age: string;
    createdAt: string;
  }
  
  interface PageProps {
    params: {
      slug: string;
    };
  }
  
  async function getBlog(slug: string): Promise<Blog> {
    const response = await fetch(`https://66e68f6d17055714e589e1d8.mockapi.io/blog/user/${slug}`);
    
    if (!response.ok) {
      throw new Error("Cannot fetch blog");
    }
  
    return response.json();
  }
  
  export default async function Page({ params }: PageProps) {
    const blog = await getBlog(params.slug); 
    
    return (
      <div>
        <h1>Blog Details</h1>
        <p>ID: {params.slug}</p>
        <p>Blog Name: {blog.name}</p>
        <p>Blog Age: {blog.age}</p>
        <p>Blog Created: {blog.createdAt}</p>
      </div>
    );
  }
  