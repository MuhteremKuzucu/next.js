"use client"
import Image from "next/image";
import Cards from "./components/Cards"  
import {useRouter} from "next/navigation"

export default function Home() {

  const router=useRouter()

  // UseRouter methodlarından push ve back kullanımı

  const goto=()=>{
    router.push("/about")

  }

  return (
    <div className="bg-gray-800 h-screen items-center">
        <div className="bg-gray-700 text-gary-300 text-center py-10 px-5 shadow-lg">
        <img src="https://kodwise.org/images/features.svg" alt="Banner Görseli" className="mx-auto mb-6 w-200 " />
        <h1 className="text-4xl  text-white-600 mb-4">Coding Platform</h1>          
      </div>

      <Cards/>

    <button className="text-white text-bold text-lg bg-gray-400" onClick={goto}> Hakkımda Detaylı Bilgi </button>
    
    </div>
  );
}
 