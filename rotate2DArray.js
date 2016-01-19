var RotateMatrix = (function(){
	function RotateMatrix(matrix){
		this._matrix = matrix;
		this._width = matrix.length;
		this._height = matrix[0].length;
	}
	
	RotateMatrix.prototype.right = function(){
		var r = [];
		for(var i = 0; i < this._height; ++i){
			r[i] = [];
			for(var j = 0; j < this._width; ++j){
				r[i][j] = this._matrix[this._width - j - 1][i];
			}
		}
		return r;
	};
	
	RotateMatrix.prototype.left = function(){
		var r = [];
		for(var i = 0; i < this._height; ++i){
			r[i] = [];
			for(var j = 0; j < this._width; ++j){
				r[i][j] = this._matrix[j][this._height - i - 1];
			}
		}
		return r;
	};
	
	return RotateMatrix;
})();