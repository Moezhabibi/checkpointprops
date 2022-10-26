import PropTypes from 'prop-types';
const Profile =({FullName,bio,profession,children,handleNace})=>{
    return (
       <div>
        <h1 style={{color:'red'}}>{FullName}</h1>
        <h1 style={{color:'blue'}}>bio {bio}</h1>
        <h1 style={{color:'green'}}>profession {profession}</h1>
        {children}
        <button onClick={()=>handleNace(FullName)}>alert</button>
  
        
       </div>        
        
    )

}

Profile.defaultProps ={
    FullName :'habibi',
    bio :'hello brahim',
    profession :'devellopeur fullstack'
}

Profile.propTypes = {
   
    FullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}
export default Profile

