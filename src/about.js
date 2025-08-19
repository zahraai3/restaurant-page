export function loadAbout(){
    const aboutcontent = document.getElementById("about");
    aboutcontent.innerHTML = `
    <div class="aboutcontainer">
    <div class="about">
        <h2>About Us</h2>
        <p>Italian dishes with a modern twist, focusing on high-quality ingredients and elegant presentation.</p>
        <div class="links">Book a meal:
            <a href="#" class="email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>email-multiple</title>
                <path d="M22,6V4L14,9L6,4V6L14,11L22,6M22,2A2,2 0 0,1 24,4V16A2,2 0 0,1 22,18H6C4.89,18 4,17.1 4,16V4C4,2.89 4.89,2 6,2H22M2,6V20H20V22H2A2,2 0 0,1 0,20V6H2Z" />
            </svg></a>
            <a href="#" class="number">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>phone</title>
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg></a>
        </div>
    </div>
    </div>
    `;
}