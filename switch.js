function arrowKeys(direction) {
	var moveWhere;
	switch (direction) {
		case "forward":
			moveWhere = "live";
			break;
		
		case "back":
			moveWhere = "die";
			break;
		
		case "left":
			moveWhere = "heaven";
			break;
		
		case "right":
			moveWhere = "hell";
			break;
		
		default: 
			moveWhere = "error";
		
	}
	return moveWhere;
}