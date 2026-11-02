const WHATSAPP_NUMBER = "94767730474";

const serviceGrid = document.getElementById("serviceGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");

const serviceModal = document.getElementById("serviceModal");
const closeModal = document.getElementById("closeModal");

const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const packageGrid = document.getElementById("packageGrid");

const contactWhatsApp = document.getElementById("contactWhatsApp");
const yearElement = document.getElementById("year");

let activeCategory = "All";

// Format prices in LKR
function formatPrice(price) {
  return `LKR ${Number(price).toLocaleString("en-LK")}`;
}

// Create WhatsApp enquiry URL
function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Render service cards
function renderServices() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      activeCategory === "All" || service.category === activeCategory;

    const searchableText = `
      ${service.name}
      ${service.description}
      ${service.category}
    `.toLowerCase();

    return matchesCategory && searchableText.includes(searchTerm);
  });

  serviceGrid.innerHTML = "";

  if (filteredServices.length === 0) {
    serviceGrid.innerHTML = `
      <div class="empty-state">
        <h3>No services found</h3>
        <p>Try another keyword or category.</p>
      </div>
    `;
    return;
  }

  filteredServices.forEach((service) => {
    const startingPrice = Math.min(...service.packages.map((pkg) => pkg.price));

    const card = document.createElement("article");
    card.className = "service-card";

    const icon = document.createElement("div");
    icon.className = "service-icon";
    icon.textContent = service.icon;

    const category = document.createElement("span");
    category.className = "service-category";
    category.textContent = service.category;

    const title = document.createElement("h3");
    title.textContent = service.name;

    const description = document.createElement("p");
    description.textContent = service.description;

    const footer = document.createElement("div");
    footer.className = "card-bottom";

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = `From ${formatPrice(startingPrice)}`;

    const viewButton = document.createElement("button");
    viewButton.className = "btn btn-outline view-more";
    viewButton.type = "button";
    viewButton.textContent = "View Packages";

    viewButton.addEventListener("click", () => {
      openModal(service);
    });

    footer.append(price, viewButton);

    card.append(icon, category, title, description, footer);

    serviceGrid.appendChild(card);
  });
}

// Open service package modal
function openModal(service) {
  modalCategory.textContent = service.category;
  modalTitle.textContent = service.name;
  modalDescription.textContent = service.description;

  packageGrid.innerHTML = "";

  service.packages.forEach((pkg) => {
    const packageCard = document.createElement("div");
    packageCard.className = "package";

    if (pkg.name === "Standard") {
      packageCard.classList.add("featured");
    }

    const packageTitle = document.createElement("h3");
    packageTitle.textContent = pkg.name;

    const packagePrice = document.createElement("div");
    packagePrice.className = "package-price";
    packagePrice.textContent = formatPrice(pkg.price);

    const delivery = document.createElement("p");
    delivery.className = "package-time";
    delivery.textContent = `Delivery: ${pkg.time}`;

    const featureTitle = document.createElement("h4");
    featureTitle.textContent = "What's Included";

    const featureList = document.createElement("ul");

    pkg.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      featureList.appendChild(listItem);
    });

    const enquiryButton = document.createElement("a");
    enquiryButton.className = "btn btn-primary";

    enquiryButton.href = createWhatsAppLink(
      `Hi! I'm interested in the ${service.name} - ${pkg.name} package (${formatPrice(pkg.price)}). Please share more details.`,
    );

    enquiryButton.target = "_blank";
    enquiryButton.rel = "noopener noreferrer";
    enquiryButton.textContent = "Enquire via WhatsApp";

    packageCard.append(
      packageTitle,
      packagePrice,
      delivery,
      featureTitle,
      featureList,
      enquiryButton,
    );

    packageGrid.appendChild(packageCard);
  });

  serviceModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

// Close modal
function closeServiceModal() {
  serviceModal.classList.remove("show");
  document.body.style.removeProperty("overflow");
}

// Category filter buttons
filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;

  filters.querySelectorAll("[data-category]").forEach((filter) => {
    filter.classList.remove("active");
  });

  button.classList.add("active");

  renderServices();
});

// Search services
searchInput.addEventListener("input", renderServices);

// Close modal button
closeModal.addEventListener("click", closeServiceModal);

// Close modal when clicking outside
serviceModal.addEventListener("click", (event) => {
  if (event.target === serviceModal) {
    closeServiceModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && serviceModal.classList.contains("show")) {
    closeServiceModal();
  }
});

// Main contact WhatsApp button
if (contactWhatsApp) {
  contactWhatsApp.href = createWhatsAppLink(
    "Hi! I would like to discuss your digital services. Please share more details.",
  );

  contactWhatsApp.target = "_blank";
  contactWhatsApp.rel = "noopener noreferrer";
}

// Dynamic footer year
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Initial service rendering
renderServices();
