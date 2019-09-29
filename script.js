"use strict"

const h1 = document.querySelector("h1");
const reset = document.querySelectorAll("button")[0];
const FirstButton =  document.querySelectorAll("button")[1]
const Second2Button = document.querySelectorAll("button")[2];
const input = document.querySelector("input");
const endScore = document.querySelectorAll("span")[0];
const scoreFirst= document.querySelectorAll("span")[1]
const scoreSecond = document.querySelectorAll("span")[2];
let scoreOne = 0;
let scoreTwo = 0;
let scoreToWin = 5;
// creation des constantes et variables

function addScoreForScoreOne() {
	
	if ( scoreOne< scoreMax && scoreFirst != scoreToWin) {
		
        scoreOne ++;
    }

function addScoreForScoreTwo() {
    
    if  ( scoreTwo< scoreMax && scoreFirst != scoreToWin) {
		
        scoreTwo ++;
}