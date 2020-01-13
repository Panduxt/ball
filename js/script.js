"use strict";

function escapeBall(event) {

	event.target.style.left = Math.floor (Math.random () * document.body.offsetWidth) + "px";
	event.target.style.top = Math.floor (Math.random () * document.body.offsetHeight) + "px";

}

ball.onmouseenter = function (event) {

	if (indicator.classList.contains ('pause')) {

		escapeBall (event);

	}

};

ball.onmousemove = function (event) {

	if (indicator.classList.contains ('pause')) {

		escapeBall (event);

	}


};

indicator.onclick = function (event) {

	event.target.classList.toggle ("pause");

};

function moveBall(e) {
	ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
	ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
}

ball.onmousedown = function () {

	if (!indicator.classList.contains ('pause')) {

		document.onmousemove = function (event) {
			moveBall (event);
		};

		ball.onmouseup = function () {
			document.onmousemove = null;
			ball.onmouseup = null;
		}

	}

};

ball.ondragstart = function () {
	return false;
};