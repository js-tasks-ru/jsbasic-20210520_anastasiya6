function getMinMax(str) {
  let result={
				min:Math.min.apply(null,mas=str.split(/[^0-9.-]+/)),
				max:Math.max.apply(null,mas=str.split(/[^0-9.-]+/)),
			}
			return result;
}
