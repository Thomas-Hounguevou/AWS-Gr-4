const salles = {};//ça nous servira à stocker les instances du jeu et d'y accèder
const CreationSalle = document.getElementById("creationsalle");
const Rejoindre = document.getElementById("rejoindre");

const socket = io();

CreationSalle.addEventListener("click", () => {
    socket.emit("createRoom");
});

Rejoindre.addEventListener("submit", (event) => {
    event.preventDefault();
    const idsalle = document.getElementById("roomID").value; 
    socket.emit("joinRoom", roomId);
});

io.on("connection", async (socket) => {
    const userId = await fetchUserId(socket);
    console.log("Connection réussie");
    socket.on("createRoom", () => {
        const idsalle = uuidv4(); 
        socket.join(idsalle);
        socket.emit("Salle crée", idsalle);   
    });
  
    socket.on("joinRoom", (userId,idsalle) => {
        socket.join(idsalle);
        socket.to(idsalle).emit('Un joueur a rejoint', userId);
    });
});