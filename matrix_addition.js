//Matrix addition
var matrixAdd = function matrixAdd(matrix1, matrix2) {
    var r = [];
    for (var row = 0; row < matrix1.length; row++) {
        var wip = [];
        for (var col = 0; col < matrix2.length; col++) {
            wip.push(0)
        }    
        r.push(wip)
    }

    width = matrix1[0].length;
    height = r.length;
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            var sum = matrix1[i][j] + matrix2[i][j]
            r[i][j] = sum 
        }
    }      
    return r;
};

console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));