function Instaprofile({tittle,url,followers,following}){
    // console.log(tittle,url,followers,following)
    return <div style={{display:'flex',alignItems:'center',border:'1px solid green',margin:'20px',padding:'20px'}}>
       <img style={{borderRadius:"50%",width:'200px',height:'200px',margin:'20px',padding:'20px'}} src={url}/>
        <h2>{tittle}</h2>
        <p style={{display:"inline-block"}}>{followers}</p>
        <p style={{display:"inline-block"}}>{following}</p>
    
    </div>
    
}
export default Instaprofile