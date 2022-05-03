import React, { useState } from 'react'


const User = ({data}) => {
     const {userDetails} = data;
    const [showUser, setShowUser] = useState(false)
    const storeChange = () => {
        setShowUser(!showUser)
        
    };
      
    return (
        <>
            <div>
                <div className="info-check">
                    <input
                        type="checkbox"
                        onChange={storeChange}
                        className="checkboxUser"
                        checked={showUser}
                    />
                    <label className="checkbox-label">Show Info</label>
                </div>
                <ul>
                     {showUser &&
                         userDetails.map((userDetails,index)=>{
                              return <li key={userDetails.id}>{userDetails.name}{userDetails.age}</li>
                         })
                         }
                </ul>
               </div>
        </>
    );
}

export default User;