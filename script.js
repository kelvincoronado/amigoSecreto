document.getElementById('addButton').addEventListener('click', function () {
    const friendNameInput = document.getElementById('friendName');
    const friendName = friendNameInput.value.trim();
    const friendList = document.getElementById('friendList');

    if (friendName === "") {
        alert("Por favor, ingresa un nombre valido.");
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = friendName;
    friendList.appendChild(listItem);
    friendNameInput.value = ""; // Limpiar el campo de entrada
});

document.getElementById('drawButton').addEventListener('click', function () {
    const friendListItems = document.querySelectorAll('#friendList li');
    const friends = Array.from(friendListItems).map(item => item.textContent);

    if (friends.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends[randomIndex];
    document.getElementById('result').textContent = selectedFriend;
});