"use client";

import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/68027d32797783191030f436/1ip4ri48f';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      // Optional: cleanup to avoid duplicates if navigating between layouts
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToWidget;
