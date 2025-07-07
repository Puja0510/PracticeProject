import { useEffect, useRef, useState } from "react";

const usePrevious = () => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value;
  },[value])

  return ref.current;
}

// usage

const Counter = () => {
    const [count, setCount] = useState()
    const prevCount = usePrevious(count)
}