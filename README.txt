# The Ascend Cafe — Home and Shop starter

## Files
- `index.html` — homepage
- `shop.html` — product menu
- `assets/css/style.css` — shared styling for both pages
- `assets/js/main.js` — mobile navigation, current year, and shop search

## How to use
1. Extract this ZIP into your existing website project folder.
2. Keep the `assets/css` and `assets/js` folder paths exactly as they are.
3. Open `index.html` in your browser (or use VS Code Live Server).
4. Open `shop.html` to test the product categories and search box.

## Temporary images
The photos currently use remote Unsplash image URLs as visual placeholders. When your real photos are ready, place them in `assets/images/` and replace the corresponding `src` values in the HTML. The image links require an internet connection.

## Important notes
- Product names and prices were transcribed from the supplied Shop page source. Variable-price items show the price range present in that source.
- The `View details` links point to `product.html`, which we will build later.
- About, account/settings, and cart links are placeholders for pages we will create in later steps.
- This is currently a front-end prototype. Search and category navigation work in the browser, but orders, accounts, and cart persistence are not connected to PHP/MySQL yet.
- Do not upload passwords, database credentials, customer details, or private admin data to a public GitHub repository.


PRODUCT DETAILS PAGE UPDATE:
- product.html now renders product-specific selections based on the item query string from the shop.
- Drinks use Grande/Venti pricing and Hot/Cold choices. Coffee category includes syrup, espresso-shot, sugar, and ice-level choices based on the Americano reference page.
- Food products use serving sizes (Solo/Partner/Group) where applicable, and special instructions.
- Add-to-cart selection is stored in browser localStorage under ascendCart. Cart display/order processing is not yet wired to this storage; this is frontend-only.
