function isPrime(num) {
  // Primes are whole numbers greater than 1
  if (!Number.isInteger(num) || num < 2) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  // Only check odd divisors up to the square root
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = { isPrime };