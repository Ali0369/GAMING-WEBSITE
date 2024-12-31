const defaultImage = "https://t4.ftcdn.net/jpg/04/42/21/53/360_F_442215355_AjiR6ogucq3vPzjFAAEfwbPXYGqYVAap.jpg";
const games = [
    { name: 'Volunteer to the Darkness', genre: 'action', image: "https://img.itch.zone/aW1hZ2UvMjk2NTA5Ni8xNzk4MzYxMS5qcGc=/original/e5m7wc.jpg", iframeSrc: "https://www.y8.com/embed/volunteer_to_the_darkness" },
    { name: 'Madness: Interlopers', genre: 'action', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTheVN2h1MIVpTSH8ZgzrcZ1GnmmyRTFUtzjg&s", iframeSrc:"https://www.y8.com/embed/madness_interlopers", },
    { name: 'Call of Zombies', genre: 'action', image: "https://assetsio.gnwcdn.com/black-ops-3-zombies.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp", iframeSrc:"https://www.y8.com/embed/call_of_zombies" ,},
    { name: 'Lost City 3D', genre: 'action', image: "https://play-lh.googleusercontent.com/r3kP9aen8Tv48xxGUsa8RaKAjcGfdGX6LtQtdyMLb8PZKG1r1Sn1imArlmOonSKF3P0=w526-h296-rw", iframeSrc:"https://www.y8.com/embed/lost_city_3d" },
    { name: 'Nightmare Creatures', genre: 'action', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmSrOCpy1AzVomCnjr6wUscsYjPEgu2PHQvoxYJKfdQ0PIeMVBYyRzZ63-jwk6mEJ8qs&usqp=CAU", iframeSrc: "https://www.y8.com/embed/nightmare_creatures" },
    { name: 'Alone Again', genre: 'action', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bi1GoK6Lh9_GZnnXz2GEYth1ScyHxo4bCA&s", iframeSrc:"https://www.y8.com/embed/alone_again" },
    { name: 'Not-A-Vania', genre: 'action', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhw1yPjL2jrFdW6z25kUyeqva2sUpyHYz3QQ&s", iframeSrc:"https://www.y8.com/embed/not_a_vania" },
    { name: 'Sector 01', genre: 'action', image: "https://img.y8.com/cloud/v2-y8-thumbs-big-thumbnails-001/136073/big.gif" , iframeSrc:"https://www.y8.com/embed/sector_01"},
    { name: 'Bean Parkour', genre: 'action', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVmpVuVKaLrTHnNp3QC3oG60PNZqYKURt51cSgzr2QwZtAO2u9-QV0IqGBxiVUzHFxZI&usqp=CAU" , iframeSrc:"https://www.y8.com/embed/bean_parkour"},
    { name: 'Recital', genre: 'adventure', image: "https://play-lh.googleusercontent.com/8MffWSh6-Onwm--Hb5r7UUi21c7MxurIFIrNbBfIPHbb6KIcthHB2PUKcch6L0dO7HA", iframeSrc:"https://www.y8.com/embed/evowars_io" },
    { name: 'Pixel Survivors', genre: 'adventure', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1i4oQN_IN8ypyzNEAv4Tb0kYY6NLzdxtb9Q&s", iframeSrc:"https://www.y8.com/embed/pixel_survivors" },
    { name: 'Imposter', genre: 'adventure', image: "https://media1.giphy.com/media/thGRsuBVXvJaxb3fKz/giphy.gif?cid=6c09b952vbdlrtiwit6wdrm3q88tyxat88gzmpplremanxmb&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" , iframeSrc:"https://www.y8.com/embed/impostor"},
    // { name: 'Ancient Ruins', genre: 'adventure', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XElj5FHu1la6ey6ZyznxdSKNWqiua_RX1g&s" },
    // { name: 'Magic Kingdom', genre: 'adventure', image: "https://www.gamespot.com/a/uploads/original/1552/15524586/3774263-613605-assassins-creed-valhalla-patch.jpg" },
    // { name: 'Time Traveler', genre: 'adventure', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfowfhem98g788M4H_YWj35DyKI53j579fAg&s" },
    { name: 'Christmas Sorting', genre: 'puzzle', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLNxfjYdt0GMauOxJM_VKtP0krD5XdPPuW9g&s" , iframeSrc:"https://www.y8.com/embed/christmas_sorting" },
    { name: 'Block Puzzle', genre: 'puzzle', image: "https://img.y8.com/cloud/v2-y8-thumbs-big-thumbnails-001/139639/big.gif" , iframeSrc:"https://www.y8.com/embed/block_puzzle_webgl"},
    { name: 'Hexon Rush', genre: 'puzzle', image: "https://img.y8.com/cloud/v2-y8-thumbs-big-thumbnails-001/157195/big.gif", iframeSrc:"https://www.y8.com/embed/hexon_rush" },
    // { name: 'Word Search', genre: 'puzzle', image: "https://i0.wp.com/gameranx.com/wp-content/uploads/2022/03/tlmn8xicoz0j7j2ahxvy-scaled.jpg?fit=800%2C501&quality=89&ssl=1" },
    // { name: 'Jigsaw Puzzle', genre: 'puzzle', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfowfhem98g788M4H_YWj35DyKI53j579fAg&s" },
    { name: 'Valkyrie RPG', genre: 'rpg', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZH3cU8Ju_n5t1DjC2I1baEIsNREHEvgeVC7OoWkYb83vAgy0P5SVWYvqu4iC2qyXtGLw&usqp=CAU" , iframeSrc:"https://www.y8.com/embed/valkyrie_rpg"},
    // { name: 'Dragon Slayer', genre: 'rpg', image: "https://lh4.googleusercontent.com/NrCdjxo-t75CpWhj8DLFe1zkS-_y1pPoF5g1s3g0dqho0tv9x_amopU1g2167pfhNeAKghP6qt5yfLkCZLV8jLXRJCvYY9g9fVy7dJnOBuQSLysdpf7MheSQTi8-CCK-s_dDAvNU" },
    // { name: 'Magic Realm', genre: 'rpg', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgIbqS73SUpdjex1CKntxcGH6d3-7WHymgbQ&s" },
    // { name: 'Hero’s Journey', genre: 'rpg', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhw1yPjL2jrFdW6z25kUyeqva2sUpyHYz3QQ&s" },
    // { name: 'Dungeon Explorer', genre: 'rpg', image: "https://www.gamespot.com/a/uploads/original/1552/15524586/3774263-613605-assassins-creed-valhalla-patch.jpg" },
    { name: 'Mini Steps!', genre: 'strategy', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwACn5TU0U7YX1StMeT9dzAJ1SC0SqW7FEA&s" , iframeSrc:"https://www.y8.com/embed/mini_steps"},
    { name: 'Time Warriors', genre: 'strategy', image: "https://img.y8.com/cloud/v2-y8-thumbs-big-thumbnails-001/157221/big.gif" , iframeSrc:"https://www.y8.com/embed/time_warriors"},
    // { name: 'Kingdom Conquest', genre: 'strategy', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfowfhem98g788M4H_YWj35DyKI53j579fAg&s" },
    // { name: 'Resource Management', genre: 'strategy', image: defaultImage },
    // { name: 'Battlefield Commander', genre: 'strategy', image: "https://www.gamespot.com/a/uploads/original/1552/15524586/3774263-613605-assassins-creed-valhalla-patch.jpg" },
    { name: 'Horse Racing', genre: 'sports', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQC8hzcrkqzXHnMOi-hHDaCJH34PAu6ktBQ&s" , iframeSrc:"https://www.y8.com/embed/horse_racing" },
    { name: 'El Clásico', genre: 'sports', image: "https://img.y8.com/cloud/y8-thumbs/707/thumbnail464x348.jpg", iframeSrc:"https://y8.com/games/el_clasico_2023" },
    // { name: 'Racing Rivals', genre: 'sports', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfowfhem98g788M4H_YWj35DyKI53j579fAg&s" },
    // { name: 'Ultimate Sports Challenge', genre: 'sports', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhw1yPjL2jrFdW6z25kUyeqva2sUpyHYz3QQ&s" },
    // { name: 'Golfing Pro', genre: 'sports', image: defaultImage },
    { name: 'Grand Vegas Simulator', genre: 'simulation', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAIYZ9tAHwghEwJUXIiRIQl1HhGC3rEuukg&s", iframeSrc: "https://www.y8.com/embed/grand_vegas_simulator" },
    { name: 'Bicycle Simulator', genre: 'simulation', image: "https://onecrazemedia.com/wp-content/uploads/2024/09/Bicycle-rider-trainer-with-mapping-software-2.webp", iframeSrc: "https://www.y8.com/embed/bicycle_simulator" },
    { name: 'City Construction', genre: 'simulation', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmN7idxSw_-GCUWaiwQ5x4H8dCtVY1nQI8tQ&s", iframeSrc: "https://www.y8.com/embed/city_construction", },
    { name: 'Crazy Laundry', genre: 'simulation', image: "https://img.y8.com/cloud/y8-thumbs/1484/thumbnail464x348.jpg", iframeSrc:"https://www.y8.com/embed/crazy_laundry" },
    { name: 'Wolf Simulator', genre: 'simulation', image: "https://images.crazygames.com/wolf-simulator-wild-animals-3d/20210210181832/wolf-simulator-wild-animals-3d-cover?auto=format,compress&q=75&cs=strip",iframeSrc:"https://www.y8.com/embed/wolf_simulator" },
    { name: 'Bike racing', genre: 'racing', image: "https://i.ytimg.com/vi/4yO2BrJsGfA/maxresdefault.jpg", iframeSrc: "https://www.y8.com/embed/motor_tour" },
    { name: 'Nitro Burnout', genre: 'racing', image: "https://play-lh.googleusercontent.com/8zwPWzzf60Q-Uc5ctGtG47UkxXMIWNbJ8_TC-l2qPeUAqfwwp_ncTbBIBi5C67nScQ=w526-h296-rw",iframeSrc:"https://www.y8.com/embed/nitro_burnout" },
    { name: 'Epic Bike Rally', genre: 'racing', image: "https://i.ytimg.com/vi/wZuE_bHD15I/sddefault.jpg",iframeSrc:"https://www.y8.com/embed/epic_bike_rally" },
    // { name: 'Multiplayer Mayhem', genre: 'multiplayer', image: "https://i0.wp.com/gameranx.com/wp-content/uploads/2022/03/tlmn8xicoz0j7j2ahxvy-scaled.jpg?fit=800%2C501&quality=89&ssl=1" },
    // { name: 'Team Battle', genre: 'multiplayer', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhw1yPjL2jrFdW6z25kUyeqva2sUpyHYz3QQ&s" },
    { name: 'Bloxd io', genre: 'multiplayer', image: "https://images.crazygames.com/games/bloxdhop-io/cover_16x9-1709115453824.png?auto=format,compress&q=75&cs=strip" , iframeSrc:"https://www.y8.com/embed/bloxd_io"},
    // { name: 'Battle Royale Multiplayer', genre: 'multiplayer', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonYnXwGbOm6eRj7NTsTBqB5aPS1pelNxLXg&s" },
    { name: 'Fortnite Jigsaw', genre: 'casual', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZx0JGaEIVtvDXPItBEkGbR9FuEKPSuistHA&s", iframeSrc:"https://www.y8.com/embed/fortnite_jigsaw" },
    // { name: 'Relaxing Journey', genre: 'casual', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhw1yPjL2jrFdW6z25kUyeqva2sUpyHYz3QQ&s" },
    // { name: 'Coloring Book', genre: 'casual', image: defaultImage },
    // { name: 'Daily Trivia', genre: 'casual', image: "https://www.gamespot.com/a/uploads/original/1552/15524586/3774263-613605-assassins-creed-valhalla-patch.jpg" },
    // { name: 'Mindful Meditation', genre: 'casual', image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/best-steam-multiplayer-pvp-games.jpg" },
    // { name: 'Simple Farm Life', genre: 'casual', image: "https://thumbor.bigedition.com/super-smash-bros-ultimate/oDMaqvcThtD1I7Qxl0SieS71PDg=/800x0/filters:quality(80)/granite-web-prod/06/b7/06b7d8be299e4d7ab097d20dd898763e.jpeg" },
    // { name: 'Card Battle', genre: 'card', image: "https://images.unsplash.com/photo-1646809014371-9cd795d465d6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcmQlMjBnYW1lfGVufDB8fDB8fHww" },
    { name: 'Spider Solitaire', genre: 'card', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQF9hL81nRCmUDEAgEuYRWlrE24huc-TJeQ&s", iframeSrc:"https://www.y8.com/embed/spider_solitaire" },
    { name: 'Four Colors', genre: 'card', image: "https://www.cbc.ca/kids/images/fourcolours_thumb.jpg", iframeSrc:"https://www.y8.com/embed/four_colors" },
    // { name: 'Poker Showdown', genre: 'card', image: "https://images.unsplash.com/photo-1646809014371-9cd795d465d6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcmQlMjBnYW1lfGVufDB8fDB8fHww" },
    // { name: 'Uno Challenge', genre: 'card', image: "https://images.unsplash.com/photo-1646809014371-9cd795d465d6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcmQlMjBnYW1lfGVufDB8fDB8fHww" },
    { name: 'Checkers Deluxe Edition', genre: 'board', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuzPOClZgGWE3EeSZj2BB9fSMRU5Z63arZQ&s", iframeSrc:"https://www.y8.com/embed/checkers_deluxe_edition" },
    { name: 'Real Chess', genre: 'board', image: "https://i.gifer.com/4Fp3.gif",iframeSrc:"https://www.y8.com/embed/real_chess" },
    { name: 'Dominoes', genre: 'board', image: "https://media2.giphy.com/media/l0MYGbakmudk5GIY8/giphy.gif?cid=6c09b9528rkpd18xjwxmb1ac0zpore66ooqn0rmcvj01nywc&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",iframeSrc:"https://www.y8.com/embed/dominoes" },
    { name: 'Bingo Solo', genre: 'board', image: "https://cdn.dribbble.com/users/204359/screenshots/5483357/star_dribble_1.gif", iframeSrc:"https://www.y8.com/embed/bingo_solo" },
    { name: 'Backgammon', genre: 'board', image: "https://www.gammonvillage.com/images/photos/pos05.gif",iframeSrc:"https://www.y8.com/embed/backgammon_marketjs" },
]
function displayGames(gamesToDisplay, customMessage = null) {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = ''; // Clear previous results

    // Check if there are any games to display
    if (gamesToDisplay.length === 0) {
        const message = customMessage || 'No games found';
        const noGamesMessage = document.createElement('div');
        noGamesMessage.className = 'no-games-message';
        noGamesMessage.innerText = message;
        gameContainer.appendChild(noGamesMessage);
    } else {
        gamesToDisplay.forEach(game => {
            const gamePanel = document.createElement('div');
            gamePanel.className = 'game-panel';
            gamePanel.innerHTML = `
                <a href="allgames.html?src=${encodeURIComponent(game.iframeSrc)}&name=${encodeURIComponent(game.name)}" style="text-decoration: none; color: inherit;">
                    <img src="${game.image}" alt="${game.name}">
                    <h3>${game.name}</h3>
                </a>
            `;
            gameContainer.appendChild(gamePanel);
        });
    }
}

function filterGames(genre) {
    if (genre === 'all') {
        displayGames(games);
    } else {
        const filteredGames = games.filter(game => game.genre === genre);
        displayGames(filteredGames);
    }
}

document.getElementById('genreFilter').addEventListener('change', function() {
    const selectedGenre = this.value;
    filterGames(selectedGenre);
});

function searchGame() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    
    // Filter games based on the search term
    const filteredGames = games.filter(game => 
        game.name.toLowerCase().includes(searchTerm) 
    );

    // If no games are found, show an error message
    if (filteredGames.length === 0) {
        displayGames([], 'Game not found. Please try another name.'); 
    } else {
        displayGames(filteredGames);
    }
}

// Initial display of all games
displayGames(games);
