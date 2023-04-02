import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [hasContent, setHasContent] = useState(false);

  useEffect(() => {
    // check if there is any content on the page
    if (document.body.clientHeight > window.innerHeight) {
      setHasContent(true);
    } else {
      setHasContent(false);
    }
  }, []);


  return (
    
<footer className={`${
        hasContent ? 'static' : 'fixed bottom-0 w-full'
      } dark:bg-gray-800`}>
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Aloha
    </span>
    
    </div>
</footer>

  );
};

export default Footer;
