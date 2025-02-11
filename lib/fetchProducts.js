export async function fetchProducts(page = 1, sortBy = "", category = "") {
    try {
      let url = `https://fakestoreapi.com/products?limit=12&page=${page}`;
  
      if (sortBy) {
        url += `&sort=${sortBy}`;
      }
      if (category) {
        url += `&category=${category}`;
      }
  
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
  