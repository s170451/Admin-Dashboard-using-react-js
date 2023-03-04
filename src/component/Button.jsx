import React from 'react';

import styles from '../styles/Global';

import { SiGmail } from 'react-icons/si';
import { signInWithGoogle, signOutWithGoogle } from '../servises/firebase';


const Button = ({ assetUrl, link }) => {
  return (
    <div 
      className={styles.btnBlack}
      onClick={ signInWithGoogle }
    >
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>Sign In With</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Google</p>
      </div>
    </div>
  )
}

export default Button