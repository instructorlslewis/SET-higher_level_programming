"use strict";

const APP_NAME = "Simple Fruit Demonstration";

class Fruit {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    describe() {
        return `${this.name} is ${this.color}.`;
    }
}

class Apple extends Fruit {
    constructor(color) {
        super("Apple", color);
    }

    describe() {
        return `${super.describe()} Apples can be crisp.`;
    }
}

class Orange extends Fruit {
    constructor(color) {
        super("Orange", color);
    }

    describe() {
        return `${super.describe()} Oranges can be juicy.`;
    }
}

class Strawberry extends Fruit {
    constructor(color) {
        super("Strawberry", color);
    }

    describe() {
        return `${super.describe()} Strawberries can be sweet.`;
    }
}

function getInputValue(elementId) {
    return document.querySelector(elementId).value.trim();
}

function validateText(value, fieldName) {
    if (value === "") {
        throw new Error(`${fieldName} is required.`);
    }
}

function createFruit(name, color) {
    const lowerName = name.toLowerCase();

    if (lowerName === "apple") {
        return new Apple(color);
    }

    if (lowerName === "orange") {
        return new Orange(color);
    }

    if (lowerName === "strawberry") {
        return new Strawberry(color);
    }

    return new Fruit(name, color);
}

function getPrototypeMessage(fruit) {
    const ownName = Object.hasOwn(fruit, "name");
    const className = Object.getPrototypeOf(fruit).constructor.name;

    return `Own name property: ${ownName}. Prototype class: ${className}.`;
}

function displayMessage(message) {
    document.querySelector("#output").textContent = message;
}

function handleShowFruit() {
    try {
        const name = getInputValue("#fruit-name");
        const color = getInputValue("#fruit-color");

        validateText(name, "Fruit name");
        validateText(color, "Fruit color");

        const fruit = createFruit(name, color);
        const description = fruit.describe();
        const prototypeMessage = getPrototypeMessage(fruit);

        displayMessage(`${description} ${prototypeMessage}`);
    } catch (error) {
        displayMessage(error.message);
    }
}

function initializeApplication() {
    document.querySelector("h1").textContent = APP_NAME;
    document.querySelector("#show-button")
        .addEventListener("click", handleShowFruit);
}

document.addEventListener("DOMContentLoaded", initializeApplication);
