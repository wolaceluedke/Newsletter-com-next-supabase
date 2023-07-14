'use client'
import Image from "next/image";
import { FormEvent, useCallback, useState } from "react";
import supabase from "./supabase";



export default function Home() {

  const [email, setEmail] = useState ("");
  const [ isSaving, setisSaving] = useState(false)

  const signNewsLetter = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setisSaving(true)

  
    const { data, error, status } = await supabase.from("users").insert([{ email }])

    if(error) {
      if(status == 409) {
        alert("User already signed up");
      } else {
      alert("Error signing up for newsleter");
      }

      console.log("error", error);
      setisSaving(false);
      return;
    }

    alert("Successfully signed up for newsletter");
    console.log(data);
    setisSaving(false);
    setEmail("");
  }, [email])


  return (
    <div className="rounded-md min-h-screen py-0 px-0.5 flex justify-center align items-center flex-col h-screen bg-black">
      <div className="py-8 px-4 w-[500px] bg-gray-700 flex flex-col justify-center items-center rounded-md">
      <Image
  alt="logo"
  src="https://dogcode.dev/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Flogo.b5018cad1fc5187e555b1aba361836f3.png&w=64&q=75"
  width={64}
  height={22}
/>
        <p className="center text-white font-medium ">
      Assine a newsletter da Dogcode e receba os melhores sobre Programação!
        </p>
        <form onSubmit={signNewsLetter}>
          <input 
          type="email"
          placeholder="Seu melhor e-mail"
          className="w-full h-[40px] rounded-md border-none mt-4 text-base outline-none"
          value={email}
          onChange={e => setEmail(e.target.value)} />
          <button 
          className="w-full h-[40px] rounded-md border-none px-0 py-2 outline-none mt-4 bg-violet-600 text-white font-bold hover:cursor-pointer"
          type="submit"
          style={{ pointerEvents: isSaving ? 'none' : 'auto'}}
          >Increver-se</button>
        </form>
      </div>
    </div>
  )
}
