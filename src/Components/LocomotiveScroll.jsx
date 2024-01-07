/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/LocomotiveScroll.js
import React, { useEffect, useRef } from 'react';
import locomotiveScroll from 'locomotive-scroll';

const LocomotiveScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default LocomotiveScroll;
