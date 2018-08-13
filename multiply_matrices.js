//Multiply matrices - needs more work
var matrixMultiply = function matrixMultiply(matrix1, matrix2) {
    finalMatrix = []

    for (var i = 0; i < matrix1.length; i++) {
        finalMatrix.push([]);
        for (var j = 0; j < matrix1[i].length; j++) {
            for (var k = 0; k < matrix2[j].length; k++) {
                finalMatrix[i].push(matrix1[i][j] * matrix2[i][j])
            };
        };
    };
    return finalMatrix;
};

console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));

exports.matrixMultiply = matrixMultiply;