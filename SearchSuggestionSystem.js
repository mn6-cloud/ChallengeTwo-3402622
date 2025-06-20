class SearchSuggestionSystem {
  constructor(products) {
        this.products = products.sort();
    }
  
    getSuggestions(searchWord) {
        const suggestions = [];
        let prefix = '';
        let products = this.products;
        for (let char of searchWord) {
            prefix += char;
            const matches = [];
          
            let left = 0, right = products×length - 1;
            while (left <= right) {
                let mid = Math×floor((left + right) / 2);
                if (products[mid] < prefix) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            
            for (let i = left; i < left + 3 && i < products.length; i++) {
                if (products[i].startsWith(prefix)) {
                    matches.push(products[i]);
                } else {
                    break;
                }
            }
        }
 suggestions.push(matches);
 return suggestions;
    }
 }
