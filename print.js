document.addEventListener("DOMContentLoaded", function () {
  // פונקציה להכנת דף הדפסה
  function preparePrintPage(mode = "single") {
    // יצירת חלון חדש להדפסה
    const printWindow = window.open("", "_blank");

    // יצירת תוכן HTML חדש
    let printContent = `
            <!DOCTYPE html>
            <html lang="he" dir="rtl">
            <head>
                <meta charset="UTF-8">
                <title>תפילות ליום העצמאות - הדפסה</title>
                <style>
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: 'Frank Ruhl Libre', serif;
                        direction: rtl;
                    }
                    .prayer-page {
                        width: 210mm;
                        height: 297mm;
                        page-break-after: always;
                        position: relative;
                        overflow: hidden;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                        color: #ffd700;
                        padding: 20mm;
                        box-sizing: border-box;
                    }
                    .prayer-page::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(135deg, rgb(235 235 235 / 70%), rgba(0, 92, 191, 0.7));

                        z-index: 1;
                    }
                    .prayer-page:last-child {
                        page-break-after: avoid;
                    }
                    .prayer-content {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        position: relative;
                        z-index: 2;
                    }
                    .prayer-title {
                        font-size: 2.5rem;
                        margin-bottom: 1rem;
                        font-weight: 900;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                    }
                    .prayer-subtitle {
                        font-size: 2rem;
                        margin-bottom: 2rem;
                        font-weight: 700;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                    }
                    .prayer-text {
                        font-size: 1.4rem;
                        line-height: 1.8;
                        margin-bottom: 2rem;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
                    }
                    .prayer-blessing {
                        font-size: 1.6rem;
                        font-weight: 700;
                        margin-top: 2rem;
                        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
                    }

                    /* סגנונות להדפסת כל התפילות בדף אחד */
                    .all-prayers-page {
                        width: 210mm;
                        height: 297mm;
                        padding: 3mm;
                        box-sizing: border-box;
                        background: white;
                        color: #002e7a;
                    }
                    .all-prayers-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-template-rows: repeat(3, 1fr);
                        gap: 1mm;
                        height: 100%;
                    }
                    .all-prayers-item {
                        position: relative;
                        background-size: cover;
                        background-position: center;
                        padding: 1.5mm;
                        border-radius: 1.5mm;
                        box-shadow: 0 0.3mm 0.5mm rgba(0, 0, 0, 0.1);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                    }
                    .all-prayers-item::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7));
                        z-index: 1;
                    }
                    .all-prayers-content {
                        position: relative;
                        z-index: 2;
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        text-align: center;
                        padding: 1mm;
                    }
                    .all-prayers-title {
                        font-size: 0.7rem;
                        font-weight: 700;
                        margin: 0.5mm 0;
                        color: #002e7a;
                        text-align: center;
                        width: 100%;
                    }
                    .all-prayers-subtitle {
                        font-size: 0.6rem;
                        margin: 0.5mm 0;
                        color: #005cbf;
                        text-align: center;
                        width: 100%;
                    }
                    .all-prayers-text {
                        font-size: 0.5rem;
                        line-height: 1.1;
                        margin: 0.5mm 0;
                        flex-grow: 1;
                        overflow: hidden;
                        text-align: center;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    .all-prayers-blessing {
                        font-size: 0.6rem;
                        font-weight: 700;
                        margin: 0.5mm 0;
                        color: #002e7a;
                        text-align: center;
                        width: 100%;
                    }

                    @media print {
                        .prayer-page, .all-prayers-page {
                            -webkit-print-color-adjust: exact;
                            print-color-adjust: exact;
                        }
                    }
                </style>
            </head>
            <body>
        `;

    if (mode === "single") {
      // הוספת כל התפילות לתוכן ההדפסה - עמוד לכל תפילה
      const prayers = document.querySelectorAll(".prayer-container");
      prayers.forEach((prayer, index) => {
        const title = prayer.querySelector("h3").textContent;
        const subtitle = prayer.querySelector("h4").textContent;
        const text = prayer.querySelector(".prayer-text").innerHTML;
        const blessing = prayer.querySelector(".prayer-blessing").innerHTML;
        const backgroundImage =
          prayer.style.backgroundImage || `url('./${index}.png')`;

        printContent += `
                    <div class="prayer-page" style="background-image: ${backgroundImage}">
                        <div class="prayer-content">
                            <h3 class="prayer-title">${title}</h3>
                            <h4 class="prayer-subtitle">${subtitle}</h4>
                            <div class="prayer-text">${text}</div>
                            <div class="prayer-blessing">${blessing}</div>
                        </div>
                    </div>
                `;
      });
    } else {
      // הדפסת כל התפילות בדף אחד
      printContent +=
        '<div class="all-prayers-page"><div class="all-prayers-grid">';

      const prayers = document.querySelectorAll(".prayer-container");
      prayers.forEach((prayer, index) => {
        const title = prayer.querySelector("h3").textContent;
        const subtitle = prayer.querySelector("h4").textContent;
        const text = prayer.querySelector(".prayer-text").innerHTML;
        const blessing = prayer.querySelector(".prayer-blessing").innerHTML;
        const backgroundImage =
          prayer.style.backgroundImage || `url('./${index}.png')`;

        printContent += `
            <div class="all-prayers-item" style="background-image: ${backgroundImage}">
                <div class="all-prayers-content">
                    <div>
                        <h3 class="all-prayers-title">${title}</h3>
                        <h4 class="all-prayers-subtitle">${subtitle}</h4>
                        <div class="all-prayers-text">${text}</div>
                    </div>
                    <div class="all-prayers-blessing">${blessing}</div>
                </div>
            </div>
        `;
      });

      printContent += "</div></div>";
    }

    printContent += `
            </body>
            </html>
        `;

    // כתיבת התוכן לחלון החדש
    printWindow.document.write(printContent);
    printWindow.document.close();

    // המתנה לטעינת הגופנים והתמונות
    setTimeout(() => {
      printWindow.print();
    }, 1000);
  }

  // הוספת מאזיני אירועים לכפתורי ההדפסה
  const printButtons = document.querySelectorAll(".print-button");
  printButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const mode = this.getAttribute("data-print-mode") || "single";
      preparePrintPage(mode);
    });
  });
});
