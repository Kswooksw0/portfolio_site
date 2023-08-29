import React from "react";
import Sketch from "react-p5";

function P5Sketch() {

    let p5Object;
	let ma;

	let zSpan = 1000;
	let xSpan = 1000;
	let size = 50;

	let boundary = 900;

	let gap = 10;

	let blocktrains = [];
	let xDirections = ["xPositive", "xNegative"];
	let zDirections = ["zPositive", "zNegative"];
	let axes = ["x", "z"];
	// let palette1 = ["#293462", "#1CD6CE", "#FEDB39", "#D61C4E"];
	// let palette = ["#0C0032", "#190061", "#240090","#3500D3","#282828"]
	// let palette = ["#2C5D37", "#E3C515", "#EE51B1", "#A59CD3", "#4B2D9F"]
	let palette = ["#3330E4", "#F637EC", "#FBB454", "#FAEA48", "#900C3F","#C70039"];

	let bgColour = "#141011";

	const setup = (p5, canvasParentRef) => {
        p5Object = p5
		let parentWidth = document.getElementById("sketch-holder").offsetWidth;
		let parentHeight = document.getElementById("sketch-holder").offsetHeight;

		p5.createCanvas(parentWidth, parentHeight, p5.WEBGL).parent("sketch-holder");

		ma = p5.atan(1 / p5.sqrt(2));
		p5.ortho(
			-p5.width / 2,
			p5.width / 2,
			p5.height / 2,
			-p5.height / 2,
			-2000,
			2000
		);

		let changeAxis = false;
		for (let y = -450; y <= 450; y += size) {
			let axis = changeAxis ? "x" : "z";
			if (axis == "x") {
				for (let z = -boundary; z <= boundary; z += size) {
					if (p5.random() < 0.12 && p5.abs(z) > 300) {
						let x = p5.random(-boundary, boundary);
						let direction = p5.random(xDirections);
						let blocktrain = new Blocktrain(
							x,
							y,
							z,
							p5.floor(p5.random(4, 15)),
							axis,
							direction,
							p5.random(5, 12)
                            // p5
						);
						blocktrains.push(blocktrain);
					}
				}
			} else {
				for (let x = -boundary; x <= boundary; x += size) {
					if (p5.random() < 0.12 && p5.abs(x) > 300) {
						let z = p5.random(-boundary, boundary);
						let direction = p5.random(zDirections);
						let blocktrain = new Blocktrain(
							x,
							y,
							z,
							p5.floor(p5.random(4, 15)),
							axis,
							direction,
							p5.random(5, 12)
                            // p5
						);
						blocktrains.push(blocktrain);
					}
				}
			}
			changeAxis = !changeAxis;
		}
	};

	const draw = (p5) => {
		p5.background(bgColour);

		p5.rotateX(ma);
		p5.rotateY(-p5.QUARTER_PI);

		for (let blocktrain of blocktrains) {
			blocktrain.display();
			blocktrain.move();
		}
	};

	const keyTyped = (p5) => {
		if (p5.key == "r") p5.noLoop();
		else if (p5.key == "t") p5.loop();
	};

	class Blocktrain {
		constructor(x, y, z, cabinNum, axis, direction, vel) {
			if (axis == "x") {
				this.head = x;
				this.origin = x;
				this.y = y;
				this.z = z;
			} else if (axis == "z") {
				this.head = z;
				this.origin = z;
				this.y = y;
				this.x = x;
			}
			this.cabinNum = cabinNum;
			this.axis = axis;
			this.direction = direction;
			this.vel = vel;
			this.colours = [];
			for (let i = 0; i < this.cabinNum; i++) {
				this.colours.push(p5Object.random(palette));
			}
		}
		display() {
			p5Object.push();
			if (this.axis == "x") {
			p5Object.translate(this.head, this.y, this.z);
				for (let i = 0; i < this.cabinNum; i++) {
				p5Object.push();
					if (this.direction == "xPositive") {
						p5Object.translate(-i * size - i * gap, 0, 0);
					} else {
						p5Object.translate(i * size + i * gap, 0, 0);
					}
					p5Object.fill(this.colours[i]);
					p5Object.box(size);
					p5Object.pop();
				}
			} else if (this.axis == "z") {
			p5Object.translate(this.x, this.y, this.head);
				for (let i = 0; i < this.cabinNum; i++) {
				p5Object.push();
					if (this.direction == "zPositive") {
						p5Object.translate(0, 0, -i * size - i * gap);
					} else {
						p5Object.translate(0, 0, i * size + i * gap);
					}
					p5Object.fill(this.colours[i]);
					p5Object.box(size);
					p5Object.pop();
				}
			}
			p5Object.pop();
		}

		move() {
			let distanceFromHead = (this.cabinNum - 1) * size + size / 2;
			if (this.direction == "xPositive") {
				this.head += this.vel;
				if (this.head - distanceFromHead >= xSpan)
					this.head = this.origin + p5Object.random(-50, 50);
			} else if (this.direction == "xNegative") {
				this.head -= this.vel;
				if (this.head + distanceFromHead <= -xSpan)
					this.head = this.origin + p5Object.random(-50, 50);
			} else if (this.direction == "zPositive") {
				this.head += this.vel;
				if (this.head - distanceFromHead >= zSpan)
					this.head = this.origin + p5Object.random(-50, 50);
			} else if (this.direction == "zNegative") {
				this.head -= this.vel;
				if (this.head + distanceFromHead <= -zSpan)
					this.head = this.origin + p5Object.random(-50, 50);
			}
		}
	}
    return <Sketch keyTyped={keyTyped} setup={setup} draw={draw} />;
};

export default P5Sketch;