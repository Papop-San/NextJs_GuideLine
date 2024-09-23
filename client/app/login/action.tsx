'use server';

import { SignJWT, importJWK } from 'jose'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


interface UserLogin {
  email: string;
  password: string;
}

export async function Login(prevState: UserLogin, formData: FormData) {
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  if (email === 'mike@test.com' && password === '1234') {
    
    // Login pass
    const secretJWK = {
      kty: 'oct',
      k: process.env.JOSE_SECRET // Replace with your actual base64 encoded secret key
    }

    // Encryption Token key
    const secretKey = await importJWK(secretJWK, 'HS256')
    const token = await new SignJWT({ email: 'mike@test.com' })
                  .setProtectedHeader({ alg: 'HS256' })
                  .setIssuedAt()
                  .setExpirationTime('1h') 
                  .sign(secretKey)
  //Login Pass
  cookies().set("token" , token)
  redirect("/manage/blog/")
  }else{
    return {
      message: "Login Fail"
    }
  }
}
