function Card({name,imgSrc})
{
    return <div style={{width:"400px",border:"1px solid grey"}}>
        
        <img style={{width:"200px"}} src={imgSrc} />
        <p>{name}</p>
    </div>
}

export default Card;
