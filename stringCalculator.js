class StringCalculator {
  add(numbers) {
    if (!numbers) {
      return 0;
    }

    let delimiter = ",";
    let numbersString = numbers;

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const firstNewLine = numbers.indexOf("\n");
      delimiter = numbers.substring(2, firstNewLine);
      numbersString = numbers.substring(firstNewLine + 1);
    }

    // Replace new lines with delimiter
    numbersString = numbersString.replace(/\n/g, delimiter);

    // Split and convert to numbers
    const nums = numbersString.split(delimiter).map((num) => parseInt(num));

    // Check for negative numbers
    const negativeNumbers = nums.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `negative numbers not allowed ${negativeNumbers.join(",")}`
      );
    }

    // Sum the numbers
    return nums.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
}

module.exports = StringCalculator;
