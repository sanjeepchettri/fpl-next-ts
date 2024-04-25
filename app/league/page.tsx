import React from 'react'




const page =   ({params} : {params: {leagueCode: string}})  => {
    console.log(params.leagueCode)
  return(

  
    <div>
        League Code page
      {params.leagueCode}
    </div>
  )
}

export default page
