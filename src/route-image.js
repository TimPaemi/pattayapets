"use strict";

/* Route-level social/Article images. Keep this mapping in source so Open Graph,
   Twitter and JSON-LD always describe the same crawlable image. */
const ROUTE_IMAGES = Object.freeze([
  ["/bring-pet-to-thailand/", "/assets/img/og-import.png"],
  ["/take-pet-out-of-thailand/", "/assets/img/og-export.png"],
  ["/pet-emergency/", "/assets/img/og-emergency.png"],
  ["/pet-health-pattaya/", "/assets/img/og-health.png"],
  ["/owning-a-pet-in-pattaya/", "/assets/img/og-owning.png"],
  ["/dog-friendly-pattaya/", "/assets/img/og-dog-friendly.png"],
  ["/adopt-a-pet-pattaya/", "/assets/img/og-adoption.png"],
  ["/cats/", "/assets/img/og-cats.png"],
  ["/dogs/", "/assets/img/og-dogs.png"],
  ["/vets/", "/assets/img/og-vets.png"],
  ["/groomers/", "/assets/img/og-groomers.png"],
  ["/boarding/", "/assets/img/og-boarding.png"],
  ["/pet-shops/", "/assets/img/og-pet-shops.png"],
  ["/trainers/", "/assets/img/og-trainers.png"],
  ["/pet-relocation/", "/assets/img/og-relocation.png"],
  ["/mobile-vets/", "/assets/img/og-mobile-vets.png"],
  ["/guides.html", "/assets/img/og-guides.png"]
]);

function imageForRoute(routePath, explicitImage) {
  if (explicitImage) return explicitImage;
  var route = String(routePath || "/");
  for (var i = 0; i < ROUTE_IMAGES.length; i += 1) {
    if (route === ROUTE_IMAGES[i][0] || route.indexOf(ROUTE_IMAGES[i][0]) === 0) {
      return ROUTE_IMAGES[i][1];
    }
  }
  return "/assets/img/og-default.png";
}

module.exports = { imageForRoute, ROUTE_IMAGES };
