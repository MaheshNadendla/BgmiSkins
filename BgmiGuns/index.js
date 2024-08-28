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
  [
    {
      id: 1,
      name: "M416",
      MaxBullets: "50",
      image: "images/Guns/m416/m416.png",
      Range: "800",
      GunType: "AR",
    },
    {
      id: 2,
      name: "M416",
      MaxBullets: "50",
      image: "images/Guns/m416/m416.png",
      Range: "800",
      GunType: "AR",
    },
    {
      id: 3,
      name: "Ump",
      MaxBullets: "35",
      image: "images/Guns/ump/ump45.png",
      Range: "500",
      GunType: "SMG",
    },
    {
      id: 4,
      name: "M762",
      MaxBullets: "50",
      image: "images/Guns/m762/m762.png",
      Range: "800",
      GunType: "AR",
    },
    {
      id: 5,
      name: "Mkm",
      MaxBullets: "50",
      image: "images/Guns/akm/akm.png",
      Range: "800",
      GunType: "AR",
    },
    {
      id: 6,
      name: "MWM",
      MaxBullets: "7",
      image: "images/Guns/awm/awm.png",
      Range: "1000",
      GunType: "SR",
    },
    {
      id: 7,
      name: "M16a4",
      MaxBullets: "7",
      image: "images/Guns/M16a4/M16a4.png",
      Range: "800",
      GunType: "AR",
    },
    {
      id: 8,
      name: "Scar-L",
      MaxBullets: "7",
      image: "images/Guns/scar/scar-l.png",
      Range: "800",
      GunType: "AR",
    },
  ],
];

const upgrades = [
  [
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
      name: "Mk14",
      MaxBullets: "50",
      image: "images/m416.png",
      Range: "800",
      GunType: "AR",
    },
  ],
  [
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
      name: "Mk14",
      MaxBullets: "50",
      image: "images/m416.png",
      Range: "800",
      GunType: "AR",
    },
  ],
  [
    {
      id: 2,
      name: "Akm",
      MaxBullets: "53",
      image: "images/Akg.jpg",
      Range: "600",
      GunType: "SMG",
    },
  ],
  [
    {
      id: 2,
      name: "Akm",
      MaxBullets: "53",
      image: "images/Akg.jpg",
      Range: "600",
      GunType: "SMG",
    },
  ],
];

const Attachments = [
  [
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
      name: "Mk14",
      MaxBullets: "50",
      image: "images/m416.png",
      Range: "800",
      GunType: "AR",
    },
  ],
  [
    {
      id: 1,
      name: "M416",
      MaxBullets: "50",
      image: "images/Akg.jpg",
      Range: "800",
      GunType: "AR",
    },
    {
      id: 2,
      name: "Mk14",
      MaxBullets: "50",
      image: "images/m416.png",
      Range: "800",
      GunType: "AR",
    },
  ],
  [
    {
      id: 2,
      name: "Bounce Ball Game",
      MaxBullets: "53",
      image: "images/Akg.jpg",
      Range: "600",
      GunType: "SMG",
    },
  ],
];

const Skines = [
  [
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
      name: "Mk14",
      MaxBullets: "50",
      image: "images/Akg.png",
      Range: "800",
      GunType: "AR",
    },
  ],
  [
    {
      id: 1,
      name: "M416",
      MaxBullets: "50",
      image: "images/Akg.jpg",
      Range: "800",
      GunType: "AR",
    },
    {
      id: 2,
      name: "Mk14",
      MaxBullets: "50",
      image: "images/Akg.jpg",
      Range: "800",
      GunType: "AR",
    },
  ],
  [
    {
      id: 2,
      name: "Bounce Ball Game",
      MaxBullets: "53",
      image: "images/Akg.jpg",
      Range: "600",
      GunType: "SMG",
    },
  ],
];

console.log(products[0].length);

let cartItems = [];

// Function to render cart items
// Function to render cart items

function renderHome(id) {
  const cartItemsDiv = document.getElementById("cart-items");

  cartItems = products[id];

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

    downloadButton.addEventListener("click", function () {
      upgradesSlide(item.id);
    });

    const Skins = document.createElement("button");
    Skins.textContent = "Skin's";

    Skins.addEventListener("click", function () {
      SkinssSlide(item.id);
    });

    const vistButton = document.createElement("button");
    vistButton.textContent = "Attachment's";
    vistButton.addEventListener("click", function () {
      AttachmentsSlide(item.id);
    });

    cartItemActionsDiv.appendChild(downloadButton);

    cartItemActionsDiv.appendChild(vistButton);

    cartItemActionsDiv.appendChild(Skins);

    cartItemDiv.appendChild(cartItemInfoDiv);
    cartItemDiv.appendChild(cartItemActionsDiv);

    cartItemsDiv.appendChild(cartItemDiv);
  }

  // document.getElementById("total-MaxBullets").textContent = `$${totalMaxBullets.toFixed(2)}`;
}

// Function to render cart items
// Function to render cart items

function renderUpgrades(id) {
  const cartItemsDiv = document.getElementById("UpgradesBox");
  cartItemsDiv.innerHTML = ""; // Clear previous content

  cartItems = upgrades[id];

  console.log(cartItems);

  for (let i = 0; i < cartItems.length; i++) {
    console.log(cartItems[i]);
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
    Skins.textContent = "Skin's";

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

    cartItemDiv.appendChild(cartItemInfoDiv);
    cartItemDiv.appendChild(cartItemActionsDiv);

    cartItemsDiv.appendChild(cartItemDiv);
  }

  // document.getElementById("total-MaxBullets").textContent = `$${totalMaxBullets.toFixed(2)}`;
}

function renderAttachments(id) {
  const cartItemsDiv = document.getElementById("AttachmentBox");
  cartItemsDiv.innerHTML = ""; // Clear previous content

  cartItems = Attachments[id];

  console.log(cartItems);

  for (let i = 0; i < cartItems.length; i++) {
    console.log(cartItems[i]);
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
    itemName.textContent = `AttachMent Name : ${item.name}`;

    // const itemMaxBullets = document.createElement("p");
    // itemMaxBullets.textContent = `Max Bullets : ${item.MaxBullets}`;
    const itemRange = document.createElement("p");
    itemRange.textContent = `Use : ${item.Range}`;

    // const GunTypes = document.createElement("p");
    // GunTypes.textContent = `Max Bullets : ${item.GunType}`;

    cartItemInfoDiv.appendChild(itemName);
    cartItemInfoDiv.appendChild(itemRange);
    // cartItemInfoDiv.appendChild(itemMaxBullets);
    // cartItemInfoDiv.appendChild(GunTypes);

    const cartItemActionsDiv = document.createElement("div");
    cartItemActionsDiv.classList.add("cart-item-actions");

    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Upgrade's";

    const Skins = document.createElement("button");
    Skins.textContent = "Skin's";

    downloadButton.addEventListener("click", function () {
      upgradesSlide(item.id);
    });

    const vistButton = document.createElement("button");
    vistButton.textContent = "Attachment's";

    cartItemDiv.appendChild(cartItemInfoDiv);
    cartItemDiv.appendChild(cartItemActionsDiv);

    cartItemsDiv.appendChild(cartItemDiv);
  }
}

function renderSkins(id) {
  const cartItemsDiv = document.getElementById("SkinsBox");
  cartItemsDiv.innerHTML = ""; // Clear previous content

  cartItems = Skines[id];

  console.log(cartItems);

  for (let i = 0; i < cartItems.length; i++) {
    console.log(cartItems[i]);
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
    Skins.textContent = "Skin's";

    downloadButton.addEventListener("click", function () {
      upgradesSlide(item.id);
    });

    const vistButton = document.createElement("button");
    vistButton.textContent = "Attachment's";

    cartItemDiv.appendChild(cartItemInfoDiv);
    cartItemDiv.appendChild(cartItemActionsDiv);

    cartItemsDiv.appendChild(cartItemDiv);
  }
}

let UpgradesMessage = document.querySelector(".UpgradesMessage");

let AttachmentMessage = document.querySelector(".AttachmentMessage");

let SkinsMessage = document.querySelector(".SkinsMessage");

function RendersSlide(Id) {
  console.log(Id);
  renderHome(Id);
}

function SkinssSlide(Id) {
  SkinsMessage.classList.add("Unhide");
  renderSkins(Id);
  console.log(Id);
}

function AttachmentsSlide(Id) {
  AttachmentMessage.classList.add("Unhide");
  renderAttachments(Id);
  console.log(Id);
}

function upgradesSlide(Id) {
  UpgradesMessage.classList.add("Unhide");
  renderUpgrades(Id);

  console.log(Id);
}

function CloseupgradesSlide() {
  UpgradesMessage.classList.remove("Unhide");
}

function CloseAttachmentsSlide() {
  AttachmentMessage.classList.remove("Unhide");
}

function CloseSkinsSlide() {
  SkinsMessage.classList.remove("Unhide");
}

// Function to proceed to checkout (dummy function)
function checkout() {
  alert("Order Placed");
}

// Initial rendering of cart

function ShopingCart() {
  document.querySelector(".container").innerHTML = `

    `;
}

for (let i = 0; i < products.length; i++) {
  RendersSlide(i);
}
