"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
// function test()
// {
//     console.log("Hallo Martin!");
// }

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();
// console.log(firstName); // Fehler: Scope!

function ausgabeNamen() 
{
    let firstName = "Luca"; // what happens in Vegas, ....
    // console.log("Hallo Martin!");
    // console.log("Hallo Yunaisy!");
    console.log("Hallo " + firstName + "!");
} 

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamenParam("Martin"); // Call + Argumente(e) 
ausgabeNamenParam("Lawrence");
// Argumente sind Daten für parameter

function ausgabeNamenParam(firstName) 
{
    console.log("Hallo " + firstName + "!");
} 


