import React, { useState } from 'react';
import {useParams} from 'react-router-dom';

function UserDetails() {
    const id = useParams();
    console.log('USER-DETAILS-ID', id);
    const[website, setWebsite] = useState('');

    
    
  return (
    <div>Website:</div>
  )
}

export default UserDetails