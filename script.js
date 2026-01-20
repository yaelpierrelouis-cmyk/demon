// Scroll to section
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Hamburger toggle
function toggleMenu(){
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none":"flex";
}

// Dark/light mode
function toggleDarkMode(){
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        document.body.style.background="#f2f2f2";
        document.body.style.color="#111";
    } else {
        document.body.style.background="#0d0d0d";
        document.body.style.color="white";
    }
}

// Modal
const modalText = document.getElementById("modal-text");
const modal = document.getElementById("modal");

const characterInfo = {
    // Main Characters
    tanjiro: "Tanjiro Kamado: A kind-hearted boy whose family was slaughtered by demons. He joins the Demon Slayer Corps, mastering Water and Sun Breathing to protect humanity and cure his sister.",
    nezuko: "Nezuko Kamado: Tanjiro's sister turned demon but retained humanity. Uses Blood Demon Art to protect humans.",
    zenitsu: "Zenitsu Agatsuma: Cowardly but talented swordsman. In unconscious moments, he becomes unstoppable using Thunder Breathing.",
    inosuke: "Inosuke Hashibira: Raised by boars, aggressive and wild. Uses dual serrated swords and Beast Breathing.",
    // Hashira
    rengoku: "Kyojuro Rengoku: Flame Hashira, passionate and honorable. Exemplifies courage and self-sacrifice.",
    giyu: "Giyu Tomioka: Water Hashira, quiet and serious. Introduced Tanjiro to the Corps.",
    shinobu: "Shinobu Kocho: Insect Hashira. Uses wisteria poison effectively. Intelligent and deadly.",
    tengen: "Tengen Uzui: Sound Hashira, flashy and confident. Former shinobi, deeply cares for allies.",
    muichiro: "Muichiro Tokito: Mist Hashira, calm and distant prodigy. Master of Mist Breathing.",
    // Upper Moons
    kokushibo: "Kokushibo: Upper Moon One, strongest demon under Muzan. Master of Moon Breathing.",
    doma: "Doma: Upper Moon Two, cheerful but deadly. Controls ice and has cult followers.",
    akaza: "Akaza: Upper Moon Three, martial arts demon seeking strong opponents.",
    hantengu: "Hantengu: Upper Moon Four, multiple clones with unique abilities. Deceptive and dangerous.",
    gyokko: "Gyokko: Upper Moon Five, obsessed with art. Uses grotesque demons to fight.",
    kaigaku: "Kaigaku: Upper Moon Six, Zenitsu’s former senior. Uses Thunder Breathing to hunt humans."
};

function openModal(character){
    modalText.innerText = characterInfo[character] || "Information not available.";
    modal.style.display="block";
}

function closeModal(){
    modal.style.display="none";
}

window.onclick=function(event){
    if(event.target==modal){modal.style.display="none";}
}

// Gallery modal dynamic
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        const character = img.dataset.character;
        openModal(character);
    });
});
