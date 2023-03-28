/* 1. Create a Set object with the following elements:
   "apple", "banana", "orange", "pear". */
const mySet = new Set(['apple', 'banana', 'orange', 'pear'])
// 2. Add the element "grape" to the Set.
mySet.add('grape')
// 3. Remove the element "banana" from the Set.
mySet.delete('banana')
// 4. Check if the Set contains the element "orange". Return true or false.
const containsOrange = mySet.has('orange')
console.log(containsOrange) // true
// 5. Create another Set object
const myOtherSet = new Set(['kiwi', 'orange', 'peach'])
// 6. Create a new Set object that is the union of the two sets.
const unionSet = new Set([...set1, ...set2])
// 7. Create a new Set object that is the intersection of the two sets.
const intersectionSet = new Set([...set1].filter((x) => set2.has(x)))
// 8. Create a new Set object that is the difference of the two sets created.
const differenceSet = new Set([...set1].filter((x) => !set2.has(x)))
// 9. Create a new Set object that is a copy of the set
const copySet = new Set(set1)
/* 10. Write a function that takes two Sets as arguments and returns a new
Set object that contains only the elements that are present in both Sets.*/
function intersection(setA, setB) {
  return new Set([...setA].filter((x) => setB.has(x)))
}
const myIntersection = intersection(mySet, myOtherSet)
console.log(myIntersection) // Set { 'orange' }

//Suppose you are building an e-commerce website that sells clothing items.
//As a part of your website, you want to allow users to filter products by size,
//color, and category.
const products = [
  { name: 'T-Shirt', category: "Men's Clothing", size: 'Small', color: 'Red' },
  {
    name: 'Jeans',
    category: "Women's Clothing",
    size: 'Medium',
    color: 'Blue',
  },
  {
    name: 'Sweater',
    category: "Men's Clothing",
    size: 'Large',
    color: 'Green',
  },
  { name: 'Dress', category: "Women's Clothing", size: 'Small', color: 'Red' },
  {
    name: 'Blouse',
    category: "Women's Clothing",
    size: 'Medium',
    color: 'White',
  },
]
const categories = new Set(products.map((p) => p.category))
console.log(categories) // Set { "Men's Clothing", "Women's Clothing" }
const sizes = new Set(products.map((p) => p.size))
console.log(sizes) // Set { "Small", "Medium", "Large" }
const colors = new Set(products.map((p) => p.color))
console.log(colors) // Set { "Red", "Blue", "Green", "White" }
//to filter products by category
const selectedCategory = "Men's Clothing"
const filteredProducts = products.filter((p) => p.category === selectedCategory)
console.log(filteredProducts)

//Suppose you are building a social media platform that allows users to follow other users and see their posts in their feed.
class User {
  constructor(name) {
    this.name = name
    this.followers = new Set()
  }
  follow(user) {
    user.followers.add(this)
  }
  unfollow(user) {
    user.followers.delete(this)
  }
  getFollowers() {
    return Array.from(this.followers)
  }
}
const maham = new User('maham')
const fatima = new User('fatima')
const zainab = new User('zainab')
maham.follow(fatima)
fatima.follow(zainab)
zainab.follow(maham)
console.log(maham.getFollowers())
console.log(fatima.getFollowers())
console.log(zainab.getFollowers())
//Suppose you are building a web application that manages the inventory of a warehouse. You want to keep track of the items in the warehouse and their current quantity.
class Item {
  constructor(name, quantity) {
    this.name = name
    this.quantity = quantity
  }
}
class Warehouse {
  constructor() {
    this.items = new Set()
  }
  addItem(item) {
    this.items.add(item)
  }
  removeItem(item) {
    this.items.delete(item)
  }
  updateQuantity(item, newQuantity) {
    this.items.forEach((i) => {
      if (i.name === item.name) {
        i.quantity = newQuantity
      }
    })
  }
  getItemQuantity(item) {
    let quantity = 0
    this.items.forEach((i) => {
      if (i.name === item.name) {
        quantity = i.quantity
      }
    })
    return quantity
  }
  getLowQuantityItems(threshold) {
    const lowQuantityItems = new Set()
    this.items.forEach((i) => {
      if (i.quantity < threshold) {
        lowQuantityItems.add(i)
      }
    })
    return lowQuantityItems
  }
}
const warehouse = new Warehouse()
const item1 = new Item('Shirt', 50)
const item2 = new Item('Pants', 75)
const item3 = new Item('Shoes', 25)
warehouse.addItem(item1)
warehouse.addItem(item2)
warehouse.addItem(item3)
console.log(warehouse.getItemQuantity(item1)) // 50
warehouse.updateQuantity(item1, 25)
console.log(warehouse.getItemQuantity(item1)) // 25
const lowQuantityItems = warehouse.getLowQuantityItems(30)
console.log(lowQuantityItems)
warehouse.removeItem(item3)
console.log(warehouse.items) // Set { Item { name: "Shirt", quantity: 25 }, Item { name: "Pants", quantity: 75 } }
//Suppose you are building a music streaming application that allows users to create and share playlists.
class Song {
  constructor(title, artist) {
    this.title = title
    this.artist = artist
  }
}
class Playlist {
  constructor(name) {
    this.name = name
    this.songs = new Set()
  }
  addSong(song) {
    this.songs.add(song)
  }
  removeSong(song) {
    this.songs.delete(song)
  }
  getSongCount() {
    return this.songs.size
  }
  hasSong(song) {
    return this.songs.has(song)
  }
  getSongList() {
    return Array.from(this.songs)
  }
}

const song1 = new Song('Shape of You', 'Ed Sheeran')
const song2 = new Song('Dance Monkey', 'Tones and I')
const song3 = new Song('Blinding Lights', 'The Weeknd')

const playlist1 = new Playlist('My Playlist')
playlist1.addSong(song1)
playlist1.addSong(song2)

const playlist2 = new Playlist('Party Playlist')
playlist2.addSong(song2)
playlist2.addSong(song3)

console.log(playlist1.getSongList())

console.log(playlist2.hasSong(song1))

console.log(playlist2.getSongCount())
