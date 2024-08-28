// those three line menu

function rotate1() {
  var element = document.querySelector(".r1");
  element.classList.toggle("r11");
}
function rotate2() {
  var element = document.querySelector(".r2");
  element.classList.toggle("r22");
}
function rotate3() {
  var element = document.querySelector(".r3");
  element.classList.toggle("r33");
}
let MenuBar = 0;
function display() {
  var element = document.querySelector(".MenuBar");
  element.classList.toggle("HideMenuBar");

  var element = document.querySelector(".ThreeLinesThese");
  element.classList.toggle("ChangeMenuButton");

  let dl = document.querySelectorAll(".DetalisLists");

  MenuBar = MenuBar + 1;

  if (MenuBar % 2 == 0) {
    dl.classList.remove("MoveRights");
    dl.classList.add("MoveLefts");

    setTimeout(() => {
      document.querySelector(".MenuBar").style = `
        display:none;
        `;
    }, 1200);
  } else {
    dl.classList.remove("MoveLefts");
    dl.classList.add("MoveRights");

    document.querySelector(".MenuBar").style = `
        display:block;
        `;
  }
}

// those three line menu end

// nav mover

let home = document.querySelector(".Home");
let insta = document.querySelector(".Insta");
let youtube = document.querySelector(".Youtube");
let telegram = document.querySelector(".Telegram");
let contact = document.querySelector(".Contact");

let homescreen = document.querySelector(".HomeScreen");
let instascreen = document.querySelector(".InstaScreen");
let youtubescreen = document.querySelector(".YoutubeScreen");
let telegramscreen = document.querySelector(".TelegramScreen");
let contactscreen = document.querySelector(".ContactScreen");

home.classList.add("IncreaseFont");
// homescreen.classList.add("Unhide");
instascreen.classList.add("Unhide");

function DecreaseFont() {
  home.classList.remove("IncreaseFont");
  insta.classList.remove("IncreaseFont");
  youtube.classList.remove("IncreaseFont");
  telegram.classList.remove("IncreaseFont");
  contact.classList.remove("IncreaseFont");
}

function HideScreens() {
  homescreen.classList.remove("Unhide");
  instascreen.classList.remove("Unhide");
  youtubescreen.classList.remove("Unhide");
  telegramscreen.classList.remove("Unhide");
  contactscreen.classList.remove("Unhide");
}

function Home() {
  DecreaseFont();
  HideScreens();
  home.classList.add("IncreaseFont");
  homescreen.classList.add("Unhide");
}

function Insta() {
  DecreaseFont();
  HideScreens();
  insta.classList.add("IncreaseFont");
  instascreen.classList.add("Unhide");
}

function Youtube() {
  DecreaseFont();
  HideScreens();
  youtube.classList.add("IncreaseFont");
  youtubescreen.classList.add("Unhide");
}

function Telegram() {
  DecreaseFont();
  HideScreens();
  telegram.classList.add("IncreaseFont");
  telegramscreen.classList.add("Unhide");
}
function Contact() {
  DecreaseFont();
  HideScreens();
  contact.classList.add("IncreaseFont");
  contactscreen.classList.add("Unhide");
}

// nav mover end

// Sample data for demonstration
const products = [
  {
    id: 1,
    name: "M416",
    MaxBullets: "50",
    image: "images/m416.png",
    Range: "800",
    GunType: "AR",
  },
  {
    id: 2,
    name: "Bounce Ball Game",
    MaxBullets: "53",
    image: "images/Akg.jpg",
    Range: "600",
    GunType: "SMG",
  },
];

let cartItems = [];

// Function to render cart items
// Function to render cart items

function renderCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = ""; // Clear previous content
  let totalMaxBullets = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    const cartItemDiv = document.createElement("div");
    // Create a div element
    const imageDiv = document.createElement("div");

    // Create an img element
    const imgTag = document.createElement("img");

    imgTag.classList.add("GunImg");

    imageDiv.classList.add("GunImgDiv");

    // Set the src attribute for the img element
    imgTag.src = `${item.image}`; // Replace with your image path

    // Append the img element to the div
    imageDiv.appendChild(imgTag);

    // Optionally, add the div to the document body or a specific element
    cartItemDiv.appendChild(imageDiv);

    cartItemDiv.classList.add("cart-item");

    const cartItemInfoDiv = document.createElement("div");
    cartItemInfoDiv.classList.add("cart-item-info");
    const itemName = document.createElement("h3");
    itemName.textContent = `Gun Name : ${item.name}`;

    const itemMaxBullets = document.createElement("p");
    itemMaxBullets.textContent = `Max Bullets : ${item.MaxBullets}`;
    const itemRange = document.createElement("p");
    itemRange.textContent = `Range : ${item.Range}`;

    const GunTypes = document.createElement("p");
    GunTypes.textContent = `Max Bullets : ${item.GunType}`;

    cartItemInfoDiv.appendChild(itemName);
    cartItemInfoDiv.appendChild(itemRange);
    cartItemInfoDiv.appendChild(itemMaxBullets);
    cartItemInfoDiv.appendChild(GunTypes);

    const cartItemActionsDiv = document.createElement("div");
    cartItemActionsDiv.classList.add("cart-item-actions");

    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Upgrade's";

    const Skins = document.createElement("button");
    Skins.textContent = "Upgrade's";

    downloadButton.addEventListener("click", function () {
      upgradesSlide(item.id);
      
    });

    // const removeButton = document.createElement("button");
    // removeButton.textContent = "See Code";
    // removeButton.addEventListener("click", function () {
    //   // removeFromCart(item.id);
    // });
    // cartItemActionsDiv.appendChild(removeButton);

    const vistButton = document.createElement("button");
    vistButton.textContent = "Attachment's";
    vistButton.addEventListener("click", function () {
      DownloadMethod(item.GunType);
    });

    cartItemActionsDiv.appendChild(downloadButton);

    cartItemActionsDiv.appendChild(vistButton);

    cartItemActionsDiv.appendChild(Skins);

    cartItemDiv.appendChild(cartItemInfoDiv);
    cartItemDiv.appendChild(cartItemActionsDiv);

    cartItemsDiv.appendChild(cartItemDiv);

    totalMaxBullets += item.MaxBullets * item.quantity;
  }

  // document.getElementById("total-MaxBullets").textContent = `$${totalMaxBullets.toFixed(2)}`;
}

// Function to add item to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cartItems.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({
      id: productId,
      name: product.name,
      MaxBullets: product.MaxBullets,
      quantity: "5, Css : 3 ,Javascript : ES6",
      image: product.image,
      Range: product.Range,
      GunType: product.GunType,
    });
  }

  renderCart();
}

// Function to remove item from cart
// function removeFromCart(productId) {
//   cartItems = cartItems.filter((item) => item.id !== productId);
//   renderCart();
// }

function upgradesSlide(Id) {
  console.log(Id);
}

function DownloadMethod(GunType) {
  window.location.href = GunType;
  console.log(GunType);
}

// Function to proceed to checkout (dummy function)
function checkout() {
  alert("Order Placed");
}

// Initial rendering of cart
renderCart();

function ShopingCart() {
  document.querySelector(".container").innerHTML = `

    `;
}

// Example: Adding initial items to the cart
addToCart(1);
addToCart(2);
// addToCart(3);
// addToCart(4);
// addToCart(5);
// addToCart(6);
// addToCart(7);
