'use strict';

const menu = {
  // Category (shown in Category selector)
  drinks: [
    // Category members (go into member display)
    'Water',
    'Tea',
    'Sweet Tea',
    'Coke',
    'Dr. Pepper',
    'Sprite',
  ],

  // Category (shown in Category selector)
  entrees: [
    // Category members (go into member display)
    'Hamburger w/ Fries',
    'Grilled Cheese w/ Tater Tots',
    'Grilled Chicken w/ Veggies',
    'Chicken Fried Steak w/ Mashed Potatoes',
    'Fried Shrimp w/ Coleslaw',
    'Veggie Plate',
  ],

  // Category (shown in Category selector)
  desserts: [
    // Category members (go into member display)
    'Cheesecake',
    'Chocolate Cake',
    'Snickerdoodle Cookie',
  ],

  appetizers: ['Mozzerella Sticks', 'Potato Skins'],
};

const categorySelectorEl = document.getElementById('categorySelector');
categorySelectorEl.onchange = onCategorySelectorChange;

const memberDisplayEl = document.getElementById('memberDisplay');

function onCategorySelectorChange() {
  const selectedCategory = categorySelectorEl.value;
  const categoryMembers = menu[selectedCategory];
  insertMemberOptionElements(categoryMembers);
}

function insertMemberOptionElements(itemsList) {
  memberDisplayEl.options.length = 0;
  if (itemsList) {
    memberDisplayEl.size = itemsList.length;
    for (let i = 0; i < itemsList.length; i++) {
      const memberListBoxEl = new Option(itemsList[i]);
      memberDisplayEl.appendChild(memberListBoxEl);
    }
  }
}
