import { Infinite } from "../../dist/esm/index";



document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.background = "#f6f6f6";

/** 
 * 
 * Settings example
 * 
 */
let settingsContainer = Infinite.createSettingsContainer();
let settingsGroup = Infinite.addSettingsGroup(settingsContainer, "Important Options");

// Single button setting
let label1 = Infinite.createLabel("Action Setting", "Some desscription that could help explain this functionality.");
let button1 = Infinite.createIconButton("Some action", "fas fa-cog");
Infinite.addSetting([label1.ref, button1.ref], settingsGroup);

// Switch input
let label2 = Infinite.createLabel("Toggle Setting", "Some desscription that could help explain this functionality.");
let switch1 = Infinite.createSwitch("Toggle something", true);
Infinite.addSetting([label2.ref, switch1.ref], settingsGroup);

// Two buttons
let label3 = Infinite.createLabel("Duo Action Setting", "Some desscription that could help explain this functionality.");
let button2 = Infinite.createIconButton("Some action 1", "fas fa-check");
let button3 = Infinite.createIconButton("Some action 2", "fas fa-times");
Infinite.addSetting([label3.ref, button2.ref, button3.ref], settingsGroup);

// Multiple buttons
let label4 = Infinite.createLabel("Multiple Action Setting", "Some desscription that could help explain this functionality.");
let testButtonUp = Infinite.createIconButton("Some action up", "fas fa-arrow-up");
let testButtonDown = Infinite.createIconButton("Some action down", "fas fa-arrow-down");
let testButtonLeft = Infinite.createIconButton("Some action left", "fas fa-arrow-left");
let testButtonRight = Infinite.createIconButton("Some action right", "fas fa-arrow-right");
Infinite.addSetting([label4.ref, testButtonUp.ref, testButtonDown.ref, testButtonLeft.ref, testButtonRight.ref], settingsGroup);

// textbox
let label5 = Infinite.createLabel("Text Input Setting", "Some desscription that could help explain this functionality.");
let testInput = Infinite.createInput("Enter a Name");
Infinite.addSetting([label5.ref, testInput.ref], settingsGroup);

// Textarea
let label6 = Infinite.createLabel("Textarea Setting", "Some desscription that could help explain this functionality.");
let testTextarea = Infinite.createTextArea("Enter a Description");
Infinite.addSetting([label6.ref, testTextarea.ref], settingsGroup);


/** 
 * 
 * Login example
 * 
 */
let settingsContainer2 = Infinite.createSettingsContainer({ style: "width:480px;margin:40px;" });
let settingsGroup2 = Infinite.addSettingsGroup(settingsContainer2, "Login example");
Infinite.addSetting(
    [
        Infinite.createLabel("Login to your persona.", "Recoving a persona is not possible at this time, so please always save your password somehwere.").ref,
    ], settingsGroup2, false);
Infinite.addSetting(
    [
        Infinite.createLabel("Username").ref,
        Infinite.createInput("Enter a username").ref
    ], settingsGroup2, false);
Infinite.addSetting(
    [
        Infinite.createLabel("Password").ref,
        Infinite.createHiddenInput("Enter a password").ref
    ], settingsGroup2, false);
Infinite.addSettingSpacer(20, settingsGroup2);
Infinite.addSetting(
    [
        Infinite.createTextButton("Cancel").ref,
        Infinite.createTextButton("Create").ref,
        Infinite.createTextButton("Login").ref
    ], settingsGroup2, false);

