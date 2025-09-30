<script>
(function(){
  document.addEventListener("DOMContentLoaded", function(){

    const footer = document.querySelector("footer");
    if(footer){
      const container = document.createElement("div");
      container.className = "footer-credits-container";
      container.innerHTML = `
        <a href="https://niox.store" class="footer-credits-link" target="_blank" rel="noopener">
          <span class="heartt"></span>
          <p>Powered by Niox</p>
        </a>
      `;
      footer.appendChild(container);

      // Inject styles
      const style = document.createElement("style");
      style.textContent = `
        .footer-credits-container {
          display: flex;
          justify-content: center;
          width: fit-content;
          border: 1px solid #fff;
          border-right: 5px solid #fff;
          border-left: 5px solid #fff;
          padding: 5px 10px;
          margin: 40px auto 0 auto;
          letter-spacing: 2px;
          color: #fff;
        }
        .footer-credits-link {
          font-size: 12px;
          margin-left: 5px;
          text-decoration: none;
          color: #fff;
          display: flex;
          align-items: center;
        }
        .footer-credits-link p {
          margin: 0;
          font-size: 10px;
        }
        .heartt {
          display:inline-block;
          width:10px;
          height:10px;
          margin-right:5px;
          background:red;
          clip-path: polygon(50% 0%, 61% 8%, 70% 20%, 100% 38%, 85% 70%, 50% 100%, 15% 70%, 0 38%, 30% 20%, 39% 8%);
        }
      `;
      document.head.appendChild(style);
    }

  });
})();
</script>