
const UserDetail=({params})=>{

    console.log("params",params)
    const {userId}=params                       

    return(
        <div>
            {userId} Hakkında detaylı bilgi
        </div>

    )}

export default UserDetail


export async function generateStaticParams() {
   
    const  users=["Ali","Ahmet","Veli","Ayşe"]
   
    return users.map((user) => ({
      user: user.toString()
    }))
  }