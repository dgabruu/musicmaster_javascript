import React from 'react';

// export default class Music extends React.Component
//     {
       
//         Musics=({track})=>{
//             if(this)
//                 var {name}
//         }
        
// render()
// {
//     if(this.props.track)
//     var {name}=this.props.track;
const Music=(props)=>
{
    if(!props.track)
    return null;
    const {followers,name , genres,images}=props.track;

return(
    <div>
        <h2>{name}</h2>
        <h4>{followers.total} followers</h4>
        <h3>{genres.join(' , ')}</h3>
        <img src={images[0].url}  alt='picture' width='200px' height='200px' style={{borderRadius:'100px'}}/>
    </div>
)
    }

    export default Music;
