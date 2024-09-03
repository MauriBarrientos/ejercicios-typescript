enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function colorMessage(color: Color): string {
    return `El color es: ${color}`;
}

console.log(colorMessage(Color.Red));