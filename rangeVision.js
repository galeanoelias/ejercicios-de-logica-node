function range_vision(num) {
    const digits = String(num).split("");
    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i];
        const leftRange = digits.slice(Math.max(0, i - Number(digit)), i);
        const rightRange = digits.slice(i + 1, i + 1 + Number(digit));
        const visionValue = leftRange.concat(rightRange).reduce((sum, digit) => sum + Number(digit), 0);
        if (digit === "1" && visionValue < 8) {
            return true;
        }
    }
    return false;
}

range_vision(1234);