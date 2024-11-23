import { useLayoutEffect, useRef, useState } from 'react';


export const Phone = ({ author, phone, quote }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    
    const { height, width } =  pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
    
  }, [phone])
  


  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
          <p ref={ pRef } className="mb-1">{ phone }</p>
          <p ref={ pRef } className="mb-1">{ quote }</p>
          <footer className="blockquote-footer"> { author } </footer>
      </blockquote>

      <code role="code">{ JSON.stringify(boxSize) }</code>
    </>
  )
}
