import { Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
  description: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor() {
  console.log('ProductService created');
 }
 
  private products: Product[] = [
    { id: 1, name: 'Galaxy S26 Ultra', price: 1200, imageUrl: 'https://mobile2000.com/cdn/shop/files/886b499224fc5a83d4cca532841ca4aa.png?v=1774445414&width=1780', inStock: true, description: 'Flagship Samsung phone with a 200MP camera, S Pen support and an all-day battery.', category: 'Samsung' },
    { id: 2, name: 'Galaxy S26', price: 799, imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/us/s2602/gallery/us-galaxy-s26-s947-sm-s947uzsexaa-550994863?$product-details-jpg$', inStock: true, description: 'Compact everyday Samsung phone with a bright AMOLED screen and fast charging.', category: 'Samsung' },
    { id: 3, name: 'Galaxy S26 Plus', price: 999, imageUrl: 'https://get4lessghana.com/wp-content/uploads/2026/02/s26.png', inStock: false, description: 'Bigger screen, bigger battery, same clean Samsung camera system as the S26.', category: 'Samsung' },
    { id: 4, name: 'Galaxy S25 Ultra', price: 1000, imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/us/2501/gallery/us-galaxy-s25-s938-sm-s938uzsaxaa-544888025?$product-details-jpg$', inStock: true, description: 'Last year flagship, still fast, now at a friendlier price with the S Pen included.', category: 'Samsung' },
    { id: 5, name: 'iPhone 17 Pro Max', price: 1200, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Ng3mmLavN5sA45canHOkOnxl-kjfhAfhh099PGnTPT62N94ctRCf_wc&s=10', inStock: true, description: 'Apple largest Pro phone with a titanium body, A19 Pro chip and studio-grade video.', category: 'Apple' },
    { id: 6, name: 'iPhone 16 Pro Max', price: 1099, imageUrl: 'https://appleasia.lk/cdn/shop/files/iPhone-16-Pro-Max-Black-Titanium-1.png?v=1780579031', inStock: true, description: 'Titanium build, excellent battery life and the camera control button.', category: 'Apple' },
    { id: 7, name: 'iPhone 15 Pro Max', price: 899, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_S51kKdw_d94kf3sfTa4pCw2YFTA6z3zZlEynb3C7xA&s=10', inStock: false, description: 'Great value Pro iPhone with a 5x telephoto lens and USB-C charging.', category: 'Apple' },
    { id: 8, name: 'iPhone 14 Pro Max', price: 1000, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhsEQ-BT4SLiHAZ1ijCSMjhi6V9wfIirNAwEO6tOwdA&s=10', inStock: true, description: 'Reliable older Pro model with the Dynamic Island and a dependable camera.', category: 'Apple' },
    
  ];

  getProducts(): Product[] {
    return this.products;
  }


  getProductById(id: number): Product | undefined {
  return this.products.find((product) => product.id === id);
  }

  private searchTerm = signal('');

setSearchTerm(term: string) {
  this.searchTerm.set(term);
}

filterProducts(category: string): Product[] {
  const query = this.searchTerm().toLowerCase().trim();

  return this.products.filter((product) => {
    const matchesSearch =
      !query || product.name.toLowerCase().includes(query);

    const matchesCategory =
      !category || product.category === category;

    return matchesSearch && matchesCategory;
  });
}

private cart = signal<string[]>([]);

addToCart(productName: string, qty: number = 1) {
  const added = Array(qty).fill(productName);
  this.cart.update((items) => [...items, ...added]);
}

getCart(): string[] {
  return this.cart();
}
getCartItems() {
  const counts = new Map<string, number>();

  this.cart().forEach((item) => {
    counts.set(item, (counts.get(item) || 0) + 1);
  });

  return Array.from(counts.entries()).map(([name, quantity]) => ({
    name,
    quantity
  }));
}

removeFromCart(productName: string) {
  this.cart.update((items) => {
    const index = items.indexOf(productName);

    if (index === -1) {
      return items;
    }

    const updatedItems = [...items];
    updatedItems.splice(index, 1);

    return updatedItems;
  });
}

clearCart() {
  this.cart.set([]);
}

}