// Problem:
// Find all prime numbers up to a given number. Avoid recalculating the result unless the input changes.

import React from "react";

const PrimeNumbers = () => {
    const [maxNumber, setMaxNumber] = React.useState(10);

    const findPrimes = React.useMemo(() => {
        console.log("Calculating prime...");
        const primes = [];
        for(let i=2; i<=maxNumber; i++){
            let isPrime = true;
            for(let j=2; j<i; j++){
                if(i%j === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime) primes.push(i);
        }
        return primes;
    }, [maxNumber]);

    return (
        <div>
          <input
            type="number"
            value={maxNumber}
            onChange={(e) => setMaxNumber(Number(e.target.value))}
          />
          <p>Prime Numbers: {findPrimes.join(', ')}</p>
        </div>
      );
}

export default PrimeNumbers;