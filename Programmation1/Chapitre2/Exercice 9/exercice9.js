//Faire un programme qui lit un nom d’utilisateur et un mot de passe.
// Si le nom d’utilisateur est “admin” et le mot de passe “12345”, affichez le message suivant :
// « Bonjour [nom de l’utilisateur] ». Si les informations ne sont pas correctes,
// affichez le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide ».

var user;
var mdp;

user = (prompt ("Veuillez entrer votre nom d'utilisateur"));
mdp = Number (prompt ("Veuillez entrer votre mot de passe"));

if (user === "admin" && mdp === "12345"){
    console.log ("Bonjour [nom de l’utilisateur]")
}

else console.log ("Votre nom d’utilisateur ou votre mot de passe est invalide");
