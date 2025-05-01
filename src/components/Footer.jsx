const Footer = () => {
  return (
    <div className="footer">
      <div className="footerHeader">
        <div className="footerTitle">NUNO CORTEZ</div>
        {/* <div className="upArrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            id="up-arrow"
          >
            <path d="M24 2.5C12.14 2.5 2.5 12.14 2.5 24S12.14 45.5 24 45.5 45.5 35.86 45.5 24 35.86 2.5 24 2.5zm0 40C13.8 42.5 5.5 34.2 5.5 24S13.8 5.5 24 5.5 42.5 13.8 42.5 24 34.2 42.5 24 42.5z"></path>
            <path d="M25.12 13c-.05-.05-.1-.1-.16-.14-.02-.01-.03-.03-.05-.05-.11-.08-.22-.15-.35-.2-.01-.01-.02-.02-.04-.02-.02-.01-.03 0-.05-.01-.26-.09-.54-.11-.81-.05-.02 0-.04.01-.06.01-.13.03-.26.08-.38.16-.01 0-.01.01-.02.01-.07.05-.15.1-.21.15-.03.03-.05.06-.08.09-.01.01-.03.02-.04.03l-8 9c-.55.62-.49 1.57.13 2.12s1.57.5 2.12-.13l5.38-6.05V35c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17.94L30.88 24c.3.33.71.5 1.12.5a1.503 1.503 0 0 0 1.13-2.5l-8.01-9z"></path>
          </svg>
        </div> */}
      </div>
      <div className="footerRowOne">
        {/* <div className="footerEmail">
          <svg
            width="21"
            height="14"
            viewBox="0 0 21 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.41524 6.87287L0 11.1843V2.56146L6.41524 6.87287ZM14.5848 6.87287L21 11.1843V2.56146L14.5848 6.87287ZM13.6474 7.50464L10.7791 9.43169C10.6946 9.4872 10.5973 9.51628 10.5 9.51628C10.4027 9.51628 10.3054 9.4872 10.2209 9.43169L7.35256 7.50464L0.425122 12.1597L0.0230488 12.4293C0.148537 13.1748 0.778537 13.7457 1.53659 13.7457H19.4634C20.2215 13.7457 20.8515 13.1774 20.977 12.4293L20.5723 12.1597L13.6474 7.50464ZM10.5 8.35582L20.5723 1.58605L20.977 1.31642C20.8515 0.568333 20.2215 0 19.4634 0H1.53659C0.778537 0 0.148537 0.570977 0.0230488 1.31642L0.425122 1.58605L10.5 8.35582Z"
              fill="#EA3D3C"
            />
          </svg>
          nucortez1@gmail.com
        </div>

        <div className="footerMobile">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.1819 15.2598L18.6454 14.9698C18.0363 14.8998 17.4371 15.1098 17.0077 15.5398L15.1703 17.3798C12.3442 15.9398 10.0274 13.6298 8.58942 10.7898L10.4368 8.93977C10.8662 8.50977 11.076 7.90977 11.0061 7.29977L10.7165 4.77977C10.5966 3.76977 9.7478 3.00977 8.72922 3.00977H7.00162C5.87319 3.00977 4.9345 3.94977 5.0044 5.07977C5.53366 13.6198 12.3542 20.4398 20.8723 20.9698C22.0008 21.0398 22.9395 20.0998 22.9395 18.9698V17.2398C22.9494 16.2298 22.1905 15.3798 21.1819 15.2598Z"
              fill="#EA3D3C"
            />
          </svg>
          +351 915224967
        </div> */}
        {/*  <a href="#section1" className="footerHome">
          Home
        </a> */}
        <a href="#home" className="footerAbout">
          Home
        </a>
        <a href="#about" className="footerAbout">
          About
        </a>
        <a href="#skills" className="footerSkills">
          Skills
        </a>
        <a href="#projects" className="footerProjects">
          Projects
        </a>
        <a href="#contact" className="footerContacts">
          Contacts
        </a>
      </div>
      <div className="rowTwo">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/nuno-cortez-31072314/"
          className="linkedin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="linkedin"
            fill="#ea3d3c"
          >
            <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
          </svg>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/circuloponto"
          className="github"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="github"
            fill="#ea3d3c"
          >
            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
          </svg>
        </a>
      </div>
      <div className="rowThree">© 2025 Nuno Cortez.</div>
      {/* <div className="absolute2">
        <div className="wrapper2 grid2"></div>
      </div> */}
      <div className="linesV">
        <div className="lineV"></div>
        <div className="lineV"></div>
        <div className="lineV"></div>
        <div className="lineV"></div>
        <div className="lineV"></div>
        <div className="lineV"></div>
        <div className="lineV"></div>
        <div className="lineV"></div>
        <div className="lineV"></div>
        <div className="lineV"></div>
        <div className="lineV"></div>
        <div className="lineV"></div>
        <div className="lineV"></div>
      </div>
      <div className="linesH">
        <div className="lineH"></div>
        <div className="lineH"></div>
        <div className="lineH"></div>
        <div className="lineH"></div>
        <div className="lineH"></div>
        <div className="lineH"></div>
        <div className="lineH"></div>
        <div className="lineH"></div>
        <div className="lineH"></div>
        <div className="lineH"></div>
        <div className="lineH"></div>
        <div className="lineH"></div>
        <div className="lineH"></div>
      </div>
    </div>
  );
};

export default Footer;
