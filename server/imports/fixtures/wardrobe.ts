import { Wardrobe } from '/both/collections/collections';
 
export function loadWardrobe() {
  if (Wardrobe.find().count() === 0) {
    const wardrobe = [
      {
        name: 'Dubstep-Free Zone',
        url: 'Can we please just for an evening not listen to dubstep.'
      },
      {
        name: 'Dubstep-Free Zone',
        url: 'Can we please just for an evening not listen to dubstep.'
      },
      {
        name: 'Dubstep-Free Zone',
        url: 'Can we please just for an evening not listen to dubstep.'
      }
    ];
 
    wardrobe.forEach((item) => Wardrobe.insert(item));
  }
}