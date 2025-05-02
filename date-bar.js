document.addEventListener("DOMContentLoaded", function () {
  // יצירת בר העליות
  const dateBar = document.createElement("div");
  dateBar.className = "date-bar";

  // קביעת התאריכים
  const today = new Date();
  const hebrewDate = new Intl.DateTimeFormat("he-u-ca-hebrew", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(today);

  const gregorianDate = new Intl.DateTimeFormat("he-IL", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(today);

  // הוספת התאריכים לבר
  dateBar.innerHTML = `
        <div class="date-container">
        <span class="b-s-d">בס״ד</span>
            <span class="separator">|</span>
            <span class="hebrew-date">${hebrewDate}</span>
            <span class="separator">|</span>
            <span class="gregorian-date">${gregorianDate}</span>
        </div>
    `;

  // הוספת הבר לתחילת ה-body
  document.body.insertBefore(dateBar, document.body.firstChild);
});
