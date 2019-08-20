export const fontSize = (val) => {
  if (!isNaN(val)) {
    if (val >= 10000000001 && val <= 100000000000) return { fontSize: ((val / 100000000000) * 9) + 'em' }
    if (val >= 1000000001 && val <= 10000000000) return { fontSize: ((val / 10000000000) * 8) + 'em' }
    if (val >= 100000001 && val <= 1000000000) return { fontSize: ((val / 1000000000) * 7) + 'em' }
    if (val >= 10000001 && val <= 100000000) return { fontSize: ((val / 100000000) * 6) + 'em' }
    if (val >= 1000001 && val <= 10000000) return { fontSize: ((val / 10000000) * 5) + 'em' }
    if (val >= 100001 && val <= 1000000) return { fontSize: ((val / 1000000) * 4) + 'em' }
    if (val >= 10001 && val <= 100000) return { fontSize: ((val / 100000) * 3) + 'em' }
    if (val >= 1001 && val <= 10000) return { fontSize: ((val / 10000) * 2) + 'em' }
    if (val >= 0 && val <= 1000) return { fontSize: ((val / 1000) * 1) + 'em' }
  } else {
    return { fontSize: '0.8em', fontStyle: 'italic', backgroundColor: '#000000', color: '#ffffff' }
  }
}