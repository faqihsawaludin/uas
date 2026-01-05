function updateTime() {
    const now = new Date();
    const tanggal = now.toLocaleDateString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const jam = now.toLocaleTimeString("id-ID");

    document.getElementById("time").innerHTML =
        `${tanggal} | ${jam}`;
}

setInterval(updateTime, 1000);
updateTime();
