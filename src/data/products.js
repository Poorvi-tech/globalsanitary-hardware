/**
 * GLOBAL SANITARY & HARDWARE — PRODUCT DATA
 * All product definitions with categories and arrival dates.
 */

export const productCategories = [
    { id: 'all', name: 'All Products' },
    { id: 'sanitary', name: 'Sanitaryware & Sinks' },
    { id: 'fittings', name: 'CP Fittings & Taps' },
    { id: 'pipes', name: 'Pipes & Fittings' },
    { id: 'tanks', name: 'Tanks & Chambers' },
    { id: 'hardware', name: 'Hardware & Accessories' },
    { id: 'solvents', name: 'Solvents & Adhesives' }
];

export const products = [
    // === SANITARYWARE & SINKS ===
    { 
        id: 'feat-1', 
        name: '12 x 18 Saga Washbasin', 
        category: 'sanitary', 
        brand: 'Johnson',
        image: 'featurepro1.jpeg',
        price: '2,499',
        marketPrice: '3,200'
    },
    { 
        id: 'feat-2', 
        name: 'Atlas Sink 24x18', 
        category: 'sanitary', 
        brand: 'Benson',
        image: 'featurepro2.jpeg',
        price: '4,850',
        marketPrice: '5,900'
    },
    { id: 'san-3', name: 'Cura Sheat Camod', category: 'sanitary', brand: 'Hindware', image: 'featurepro3.jpeg', price: '7,200', marketPrice: '9,500' },
    { id: 'san-4', name: 'Venus (Shrineet) Sink 24x18', category: 'sanitary', brand: 'Johnson', image: 'featurepro4.jpeg', price: '5,100', marketPrice: '6,400' },
    { id: 'san-5', name: 'Lovex Omega Washbasin 12x18', category: 'sanitary', brand: 'Lovex', image: 'featurepro5.jpeg', price: '1,850', marketPrice: '2,400' },
    { id: 'san-6', name: 'Pedestal with washbasen', category: 'sanitary', brand: 'Hindware', image: 'featurepro6.jpeg', price: '3,600', marketPrice: '4,800' },

    // === CP FITTINGS & TAPS ===
    { id: 'fit-1', name: 'Benson Bib Cock Blue', category: 'fittings', brand: 'Benson', image: 'featurepro7.jpeg', price: '850', marketPrice: '1,100' },
    { id: 'fit-2', name: 'Benson Angle Cock Blue', category: 'fittings', brand: 'Benson', image: 'featurepro8.jpeg', price: '740', marketPrice: '950' },
    { id: 'fit-3', name: 'Benson Pillar Cock Blue', category: 'fittings', brand: 'Benson', image: 'featurepro9.jpeg', price: '980', marketPrice: '1,300' },
    { id: 'fit-4', name: 'Bl Opal 3 in 1 Mixer', category: 'fittings', brand: 'Bluwave', image: 'featurepro10.jpeg', price: '4,200', marketPrice: '5,800' },
    { id: 'fit-5', name: 'Hindware Studio 2 in 1 Bibcock', category: 'fittings', brand: 'Hindware', image: 'featurepro11.jpeg', price: '1,650', marketPrice: '2,100' },
    { id: 'fit-6', name: 'VECTUS Eco SWAN NECK COCK', category: 'fittings', brand: 'Vectus', image: 'featurepro12.jpeg', price: '1,250', marketPrice: '1,600' },
    { id: 'fit-7', name: 'J p Avian 2 in 1 Mixer', category: 'fittings', brand: 'JP', image: 'featurepro13.jpeg', price: '3,800', marketPrice: '5,200' },
    { id: 'fit-8', name: 'Libka Swan Neck', category: 'fittings', brand: 'Lipka', image: 'featurepro14.jpeg', price: '1,450', marketPrice: '1,950' },

    // === PIPES & FITTINGS ===
    { id: 'pipe-1', name: 'Pl CPVC 1 Pipe', category: 'pipes', brand: 'Plasto', image: 'featurepro15.jpeg', price: '420', marketPrice: '550' },
    { id: 'pipe-2', name: 'Pl ISI 110 mm Pipe', category: 'pipes', brand: 'Plasto', image: 'featurepro16.jpeg', price: '850', marketPrice: '1,100' },
    { id: 'pipe-3', name: 'Texmo PVC 6 x 4 Reducor', category: 'pipes', brand: 'Texmo', image: 'featurepro17.jpeg', price: '320', marketPrice: '450' },
    { id: 'pipe-4', name: 'Supremo 90 mm Pipe', category: 'pipes', brand: 'Supremo', image: 'featurepro18.jpeg', price: '760', marketPrice: '980' },
    { id: 'pipe-5', name: '1.1/4 Pipe PVC (Saba)', category: 'pipes', brand: 'Generic', image: 'featurepro19.jpeg', price: '180', marketPrice: '240' },

    // === TANKS & CHAMBERS ===
    { id: 'tank-1', name: 'Plasto 1000L Tank (10 Layer)', category: 'tanks', brand: 'Plasto', image: 'featurepro20.jpeg', price: '8,500', marketPrice: '10,500' },
    { id: 'tank-2', name: 'Vectus 500L Tank (4 Layer)', category: 'tanks', brand: 'Vectus', image: 'featurepro21.jpeg', price: '4,600', marketPrice: '5,800' },
    { id: 'tank-3', name: 'FRP 1 fut CHAMBER 12x12', category: 'tanks', brand: 'Vectus', image: 'featurepro22.jpeg', price: '2,200', marketPrice: '3,000' },
    { id: 'tank-4', name: 'PLASTO 1000L Tank Stand', category: 'tanks', brand: 'Plasto', image: 'featurepro23.jpeg', price: '1,800', marketPrice: '2,500' },

    // === HARDWARE & ACCESSORIES ===
    { id: 'hw-1', name: 'Li Towel Rack 24', category: 'hardware', brand: 'Lipka', image: 'featurepro24.jpeg', price: '1,250', marketPrice: '1,800' },
    { id: 'hw-2', name: 'Stainless Steel Sink (24x18)', category: 'hardware', brand: 'Generic', image: 'featurepro25.jpeg', price: '3,800', marketPrice: '5,200' },
    { id: 'hw-3', name: 'Metal Clamp GI Clip', category: 'hardware', brand: 'Generic', image: 'featurepro26.jpeg', price: '45', marketPrice: '60' },
    { id: 'hw-4', name: 'Steel Hole Jali (5 inch)', category: 'hardware', brand: 'Generic', image: 'featurepro27.jpeg', price: '85', marketPrice: '120' },
    { id: 'hw-5', name: 'Aari Blade', category: 'hardware', brand: 'Generic', image: 'featurepro28.jpeg', price: '35', marketPrice: '50' },

    // === SOLVENTS ===
    { id: 'sol-1', name: 'H p 234ml Solvent CPVC', category: 'solvents', brand: 'HP', image: 'featurepro29.jpeg', price: '185', marketPrice: '240' },
    { id: 'sol-2', name: 'Bond Tile 1.8kg', category: 'solvents', brand: 'Generic', image: 'featurepro30.jpeg', price: '850', marketPrice: '1,100' },
    { id: 'sol-3', name: 'White Cement 1kg', category: 'solvents', brand: 'Generic', image: 'featurepro31.jpeg', price: '65', marketPrice: '85' }
];

// Re-generating Arrival Dates for the logic
// We set some to be "new" (within 1 week) and some to be "featured"
const today = new Date();
export const arrivalProducts = [
    { 
        id: 'new-1', 
        name: 'Hindware Hi Flow Divertor', 
        category: 'fittings', 
        brand: 'Hindware', 
        arrivalDate: today.toISOString(), // Today (NEW)
        image: 'arrivalpro1.jpg',
        price: '4,850',
        marketPrice: '6,200'
    },
    { 
        id: 'new-2', 
        name: 'Vectus Juno Square Shower', 
        category: 'fittings', 
        brand: 'Vectus', 
        arrivalDate: today.toISOString(),
        image: 'arrivalpro2.jpg',
        price: '2,400',
        marketPrice: '3,100'
    }
];
