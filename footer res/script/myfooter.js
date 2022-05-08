let down = () =>{
    return `
    <div class="container">
        <div class="footer_div">
          <div class="footer_list">
            <p class="greycolor">
              Get email offers & the latest news from Bath & Body Works!
            </p>
            <ul>
              <p>Enter Email</p>
              <input type="text" id="footer_email" />
              <a class="itag" href="">
                <i class="fa-solid fa-circle-info fa-2xl"> </i
              ></a>
              <p class="show1">this field is required.</p>

              <p>Confirm Email</p>
              
              <input type="text" id="footer_confirm" />
              <button onclick="footer_click()" id="footer_submit">
                Submit
              </button>
             
              <p id="show2"></p>

              <h4 style="margin-top: 15px">GET CONNECTED</h4>

              <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </ul>
          </div>
          <div class="footer_list">
            <h4>CUSTOMER CARE</h4>
            <ul>
              <li><a href="#">Help & FAQs</a></li>
              <li><a href="#">Live chat 8a - 12a ET</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Corporate Sales & Gifts</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer_list">
            <h4>My Account</h4>
            <ul>
              <li><a href="#">My Dashboard</a></li>
              <li><a href="#">My Orders</a></li>
              <li><a href="#">My Auto Refresh</a></li>
              <li><a href="#">My Love-it List</a></li>
            </ul>
          </div>

          <div class="footer_list">
            <h4>Discover</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Gifts Cards</a></li>
              <li><a href="#">Shop By Fragrance</a></li>
              <li><a href="#">Products Ingredients</a></li>
              <li><a href="#">Get Inspired</a></li>
              <li><a href="#">Diversity, Equity & Inclusion</a></li>
            </ul>
          </div>

          <div class="footer_list">
            <h4>Find Us</h4>
            <ul>
              <li><a href="#">Store Locator</a></li>
              <li><a href="#">Global Location</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="quote_banner">
        <img
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_"
        />
      </div>
    </footer>
    <div id="down_footer">
      <div class="down1">
        <div><a href="#">Terms Of Use</a></div>
        <div><a href="#">Privacy Policy</a></div>
        <div><a href="#">Security Bug Report</a></div>
        <div><a href="#">California Privacy Rights</a></div>
        <div>
          <a href="#">do not sell my personal information (california)</a>
        </div>
        <div><a href="#">transparency in supply chains</a></div>
        <div><a href="#">ad preferences</a></div>
      </div>

      <div class="down2">
        <p><i class="fa-regular fa-copyright"></i> 2022 Bath & Body Works Direct, Inc. All Rights Reserved.</p>
      </div>
    `
}

export {down};