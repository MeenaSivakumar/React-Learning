type FilterButtonType={
label:string;
onClick:()=>void;
}

export const FilterButton =({label,onClick}:FilterButtonType)=>{

    return(
        <button style={{borderColor:'red',backgroundColor:'blue',padding:2.5,color:'white',borderRadius:12,height:24,width:68,fontSize:12,textAlign:'center'}} onClick={onClick}>{label}</button>
    )
}