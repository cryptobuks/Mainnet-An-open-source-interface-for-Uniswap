import React from 'react'
import { useIsMounted } from 'src/hooks/use-is-mounted';
import { useIsDarkMode } from 'src/hooks/use-is-dark-mode';
import darkLogo from 'src/assets/images/menu-dark.svg';

const Logo: React.FC<React.SVGAttributes<{}>> = (props) => {
  const isMounted = useIsMounted();
  const { isDarkMode } = useIsDarkMode();

  return (
    <div className="flex cursor-pointer outline-none" {...props}>
      <span className="relative flex overflow-hidden">
        {isMounted && isDarkMode && (
          <img src={darkLogo} alt="Criptic" />
        )}
        
      </span>
    </div>
  );
};

export default Logo;
