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

// ausgabeNamenParam("Martin"); // Call + Argumente(e) 
// ausgabeNamenParam("Lawrence");
// Argumente sind Daten für parameter

function ausgabeNamenParam(firstName) 
{
    console.log("Hallo " + firstName + "!");
} 

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Yunaisy", "Jug")
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));

function ausgabeNamenParams(firstName, familyName) {
    console.log("Hallo " + firstName + " " + familyName +"!");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams2("Yannick","Schwerdtner");
function ausgabeNamenParams2(firstName, familyName) {
    
    // 1. Funktionalität: string composing
    const gap = " ";
    let outputStr = "Hallo " + gap + firstName + gap + familyName +"!";

    // 2. Funktionalität: string output
    
    console.log(outputStr);
}

/***** Funktionen 03b *****/
// Trennen der Funktionalitäten | return



// 1. Funktionalität: string composing

output(getString("Martino","Jug")); // call

function getString(firstName, familyName) {
    const GAP = " ";
    let outputStr = "Hallo " + GAP + firstName + GAP + familyName +"!";
    return outputStr; // return sendet Daten a den call zurück
    // console.log("Funktion beendet"); // nicht erreichbar, da return die Funktion beendet. 
}

// 2. Funktionalität: string output
// output ("Hi"); // call ... 
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}