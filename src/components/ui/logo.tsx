import React from 'react'
import darkLogo from 'src/assets/images/logoText.png';

export default function Logo() {

  return (
    <a
      href={"#"}
      className="flex w-28 outline-none sm:w-32 4xl:w-36"
    >
      <span className="relative flex overflow-hidden">
        
          <img src={darkLogo} alt="Criptic"  />
        
      
      </span>
    </a>
  );
}
