'use server'

interface UserLogin {
  email: string;
  password: string;
}

export async function Login(prevState: UserLogin, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');


  console.log(email, password);

}