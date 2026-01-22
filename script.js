// ================== CHARACTER INFO ==================
const characterInfo = {
    // Main Characters
    tanjiro: {
        name: "Tanjiro Kamado",
        image: "images/tanjiro.jpg",
        description: "A kind-hearted boy whose family was slaughtered by demons. He joins the Demon Slayer Corps, mastering Water and Sun Breathing to protect humanity and cure his sister."
    },
    nezuko: {
        name: "Nezuko Kamado",
        image: "images/nezuko.jpg",
        description: "Tanjiro's younger sister who became a demon but retained her humanity. She protects humans using her Blood Demon Art."
    },
    zenitsu: {
        name: "Zenitsu Agatsuma",
        image: "images/zenitsu.jpg",
        description: "Cowardly but skilled swordsman. In unconscious moments, he becomes unstoppable using Thunder Breathing."
    },
    inosuke: {
        name: "Inosuke Hashibira",
        image: "images/inosuke.jpg",
        description: "Raised by boars, aggressive and wild. Uses dual serrated swords and Beast Breathing. Thrives in battle but grows stronger through teamwork."
    },

    // Hashira
    rengoku: {
        name: "Kyojuro Rengoku",
        image: "images/rengoku.jpg",
        description: "Flame Hashira, passionate and honorable. Exemplifies courage and self-sacrifice in battle against demons."
    },
    giyu: {
        name: "Giyu Tomioka",
        image: "images/giyu.jpg",
        description: "Water Hashira, quiet and serious. Introduced Tanjiro to the Corps and masters Water Breathing."
    },
    shinobu: {
        name: "Shinobu Kocho",
        image: "images/shinobu.jpg",
        description: "Insect Hashira, hides her pain behind a gentle smile. Uses wisteria poison to defeat demons effectively."
    },
    tengen: {
        name: "Tengen Uzui",
        image: "images/tengen.jpg",
        description: "Sound Hashira, flamboyant and skilled. Combines agility and explosive combat style to defeat demons."
    },
    muichiro: {
        name: "Muichiro Tokito",
        image: "images/muichiro.jpg",
        description: "Mist Hashira, young prodigy. Calm and detached but incredibly powerful with Mist Breathing techniques."
    },

    // Upper Moons
    kokushibo: {
        name: "Kokushibo",
        image: "images/kokushibo.jpg",
        description: "Upper Moon One, strongest demon under Muzan. Master of Moon Breathing and centuries of combat experience."
    },
    doma: {
        name: "Doma",
        image: "images/doma.jpg",
        description: "Upper Moon Two, charismatic and terrifying. Uses Cryokinetic powers and manipulates emotions of his victims."
    },
    akaza: {
        name: "Akaza",
        image: "images/akaza.png",
        description: "Upper Moon Three, martial arts expert demon who values strength above all. Immense regenerative and combat skills make him deadly."
    },
    hantengu: {
        name: "Hantengu",
        image: "images/hantengu.jpg",
        description: "Upper Moon Four, splits into multiple clones to overwhelm opponents. Uses agility and deception."
    },
    gyokko: {
        name: "Gyokko",
        image: "images/gyokko.jpg",
        description: "Upper Moon Five, artistic demon who treats combat as art. Uses pottery-themed Blood Demon Arts."
    },
    kaigaku: {
        name: "Kaigaku",
        image: "images/kaigaku.jpg",
        description: "Upper Moon Six, former Thunder Breathing student turned demon. Skilled in lightning-fast combat and deadly strikes."
    }
};

// ================== MODAL ELEMENTS ==================
const modal = document.getElementById('characterModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const spanClose = document.querySelector('.close');

// ================== OPEN MODAL FUNCTION ==================
function openModal(characterKey) {
    if(characterInfo[characterKey]){
        modal.style.display = "block";
        modalImage.src = characterInfo[characterKey].image;
        modalName.innerText = characterInfo[characterKey].name;
        modalDescription.innerText = characterInfo[characterKey].description;
    }
}

// ================== CLOSE MODAL ==================
spanClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}