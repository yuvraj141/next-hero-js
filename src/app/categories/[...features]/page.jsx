import React from 'react'

export default function categoryDetailsPage({params}) {
    //console.log({params});
    if(params.features.length==3){
        return <div>
           <p> {params.features}</p>
        </div>
    }
  return (
    <div>category Details page</div>
  )
}
