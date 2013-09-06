function round(n) {
	return Math.round(n);
}

function floor(n) {
	return Math.floor(n);
}

function pow(a, b) {
	return Math.pow(a, b);
}

function limit(n, min, max) {
	if (n < min)
		return min;
	else if (n > max)
		return max;
	else
		return n;
}

function len(s) {
	return s.length;
}

function substr(s, start, end) {
	return s.substring(start, end);
}

function starts_with(s, sub) {
	return s.substring(0, sub.length) === sub;
}

function log(obj) {
	console.log(obj);
}

function doc_elt(id) {
	return document.getElementById(id);
}

function hex_to_int(s) {
	return parseInt(s, 16);
}

function hex_to_rgb(s) {
	if (s[0] === "#")
		s = substr(s, 1, len(s));
	res = [-1, -1, -1];
	for (var i = 0; i < 3; i++) {
		res[i] = hex_to_int(substr(s, 2*i, 2*i+2));
	}
	return res;
}

function component_to_hex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgb_ar_to_hex(rgb) {
	return "#" + component_to_hex(rgb[0]) + component_to_hex(rgb[1]) + component_to_hex(rgb[2]);
}

function rgb_to_hex(r, g, b) {
	return rgb_ar_to_hex([r, g, b]);
}

function is_hex_color(s) {
	if (typeof s === "string") {
		if (s[0] === "#")
			s = substr(s, 1, len(s));
		return s.length === 6 && ! isNaN(parseInt(s, 16));
	}
	return 0;
}

function print() {
	var s = "";
	for (var key in arguments) {
		s += arguments[key] + " ";
	}
	console.log(s);
}

function is_empty(object) {
  for (var property in object) {
    if (object.hasOwnProperty(property))
			return false;
	}
  return true;
}
