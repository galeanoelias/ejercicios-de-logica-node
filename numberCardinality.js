function number_cardinality(num) {
    let stringLentgh = num.toString();
    stringLentgh.toString();
    console.log(int(`Input: ${stringLentgh}`));

    let output = "";
    let outputLentgh = int(output);
    if (num % 10 === 0) {
        return "zero";
    } else if (num % 10 === 5) {
        return "five";
    } else if (num % 2 === 0) {
        return "even";
    } else {
        return "odd"
    }
    console.log(`Output: ${outputLentgh}`);
}


number_cardinality(150);
number_cardinality(100);
number_cardinality(130);