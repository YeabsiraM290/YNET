let DB;
let addTologin;
let addNewuser;
let addNewseller;
let addNewItem;
let editProfile;

document.addEventListener('DOMContentLoaded', () => {

     //creating database
     let ynet_storage = indexedDB.open('Ynet_storage', 1);

     ynet_storage.onsuccess = function() {

        DB = ynet_storage.result;
    }

    // Creating tabels
    ynet_storage.onupgradeneeded = function(e) {

        let db = e.target.result;

        //users tabel
        let user_tabel = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true});
        user_tabel.createIndex('username', 'username', { unique: true });
        user_tabel.createIndex('email', 'email', { unique: true });
        user_tabel.createIndex('balance', 'balance', { unique: false });
        user_tabel.createIndex('password', 'password', { unique: false });

        
        //Vendors tabel
        let vendors_tabel = db.createObjectStore('vendors', { keyPath: 'id', autoIncrement: true});
        vendors_tabel.createIndex('username', 'username', { unique: true });
        vendors_tabel.createIndex('email', 'email', { unique: true });
        vendors_tabel.createIndex('password', 'password', { unique: false });
        vendors_tabel.createIndex('social_no', 'social_no', { unique: true });
        vendors_tabel.createIndex('location', 'location', { unique: false });
        vendors_tabel.createIndex('company_name', 'company_name', { unique: true });
        vendors_tabel.createIndex('phone_no', 'phone_no', { unique: true });
        vendors_tabel.createIndex('description', 'description', { unique: false });
        vendors_tabel.createIndex('balance', 'balance', { unique: false });
        vendors_tabel.createIndex('plan', 'plan', { unique: false });

        //login tabel
        let loginValidation_tabel = db.createObjectStore('login', { keyPath: 'id', autoIncrement: true});
        loginValidation_tabel.createIndex('username', 'username', { unique: true });
        loginValidation_tabel.createIndex('email', 'email', { unique: true });
        loginValidation_tabel.createIndex('password', 'password', { unique: false });
        loginValidation_tabel.createIndex('balance', 'balance', { unique: false });
        loginValidation_tabel.createIndex('user_type', 'user_type', { unique: false });

        //items tabel
        let items_tabel = db.createObjectStore('items', { keyPath: 'id', autoIncrement: true});
        items_tabel.createIndex('name', 'name', { unique: false });
        items_tabel.createIndex('seller', 'seller', { unique: false });
        items_tabel.createIndex('image1', 'image1', { unique: false });
        items_tabel.createIndex('image2', 'image2', { unique: false });
        items_tabel.createIndex('image3', 'image3', { unique: false });
        items_tabel.createIndex('image4', 'image4', { unique: false });
        items_tabel.createIndex('quantity', 'quantity', { unique: false });
        items_tabel.createIndex('aviliable', 'aviliable', { unique: false });
        items_tabel.createIndex('sold', 'sold', { unique: false });
        items_tabel.createIndex('price', 'prce', { unique: false });
        items_tabel.createIndex('department', 'department', { unique: false });
        items_tabel.createIndex('properties', 'properties', { unique: false });
        items_tabel.createIndex('description', 'description', { unique: false });

        //orders tabel
        let orderhistory_tabel = db.createObjectStore('orderhistory', { keyPath: 'id', autoIncrement: true});
        orderhistory_tabel.createIndex('name', 'name', { unique: false });
        orderhistory_tabel.createIndex('date', 'date', { unique: false });
        orderhistory_tabel.createIndex('seller', 'seller', { unique: false });
        orderhistory_tabel.createIndex('quantity', 'quantity', { unique: false });
        orderhistory_tabel.createIndex('image', 'image', { unique: false });
        orderhistory_tabel.createIndex('price', 'price', { unique: false });

        
        //cart tabel
        let cart_tabel = db.createObjectStore('cart', { keyPath: 'id', autoIncrement: true});
        cart_tabel.createIndex('buyer_username', 'buyer_username', { unique: false });
        cart_tabel.createIndex('item_name', 'item_name', { unique: false });
        cart_tabel.createIndex('seller_name', 'seller_name', { unique: false });

    }
});