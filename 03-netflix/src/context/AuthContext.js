"use client";
import { auth } from '@/auth/firebase';
import { toastErrorNotify, toastSuccessNotify } from '@/helpers/ToastNotify';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { createContext } from 'react'




// auth (firebase) işlemlerini yapacağımız context alanı açtık
export const YetkiContext=createContext()


const AuthContextProvider = ({children}) => {

    const router=useRouter()

    //? yeni bir kullanıcı olusturmak icin kullanılan firebase metodu

    const createUser = async (email, password, displayName) => {
        try {
          //? sitede ilk defa kullanıcı adı oluşturmak için kullanılan firebase metodu
          await createUserWithEmailAndPassword(auth, email, password);

          toastSuccessNotify("register basarılı")

          router.push("/profile")
        
      
         
        } catch (error) {
            toastErrorNotify(error.message)
        }
    };

    const signUpGooglE = () => {
        //?google hesaplarına ulaşmak için firebase metodu
        const provider = new GoogleAuthProvider();
    
        //?açılır pencere ile giriş yapılması için firebase metodu
    
        signInWithPopup(auth, provider)
          .then((result) => {

            toastSuccessNotify("google ile giris basarılı")
            router.push("/profile")

          })
          .catch((error) => {
            console.log(error);
          });
    };

    //? login islemin yapan firebase metodu

    const login = async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);

          toastSuccessNotify("login basarılı")

          router.push("/profile")
        
        } catch (error) {
            toastErrorNotify(error.message)
        }
      };


  return (
    <YetkiContext.Provider value={{createUser,signUpGooglE,login}}>
        {children}
    </YetkiContext.Provider>
  )
}

export default AuthContextProvider