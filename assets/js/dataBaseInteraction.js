let DB;
let addTologin;
let addNewuser;
let addNewseller;
let addNewItem;
let editProfile;
let fetch_img;
let loginUpdate;
let whoLoged;
let userUpdate;

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
        loginValidation_tabel.createIndex('logedin', 'logedin', { unique: false });

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
        items_tabel.createIndex('price', 'Price', { unique: false });
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


    //Adding to database functions
    addTologin = function (uName, email, password, balance, user_type) {
        
        let addtoLogin= {

            username: uName,
            email: email,
            balance:balance,
            password: password,
            user_type : user_type,
        }

        let transaction = DB.transaction(['login'], 'readwrite');

        let objectStoreTologin = transaction.objectStore('login');

        let request = objectStoreTologin.add(addtoLogin);

        request.onsuccess = () => {
                
            return true;
        }

        request.onerror = () =>{

            return false;
        }

    }

    addNewuser = function (uName, email, password) {
        
        let newUserinfo= {
            
            username: uName,
            email: email,
            balance: '1000',
            password: password,
        }

        let transaction = DB.transaction(['users'], 'readwrite');
        let objectStoreNewuser = transaction.objectStore('users');
        let request = objectStoreNewuser.add(newUserinfo);


        request.onsuccess = () => {
                
            return true;
        }

        request.onerror = () =>{

            return false;
        }

    }

    addNewseller = function (uName, email, password, pNo, socialNo, location, disc, cname,plan) {
        
        let newUserinfo= {
            
            username: uName,
            email: email,
            balance: '1000',
            password: password,
            phone_no: pNo,
            social_no: socialNo,
            location: location,
            description: disc,
            company_name: cname,
            plan: plan,
        }

        let transaction = DB.transaction(['vendors'], 'readwrite');
        let objectStoreNewuser = transaction.objectStore('vendors');
        let request = objectStoreNewuser.add(newUserinfo);


        request.onsuccess = () => {
                
            return true;
        }

        request.onerror = () =>{

            return false;
        }

    }

    addNewItem = function (desc, seller, ppts, price, name, img1, img2, img3, img4, quantity, avilable, dep, sold) {
        
        let newIteminfo= {

            description: desc,
            seller: seller,
            properties: ppts,
            price: price,
            name: name,
            image1: img1,
            image2: img2,
            image3: img3,
            image4: img4,
            quantity: quantity,
            aviliable: avilable,
            department: dep,
            sold: sold,
        }

        let transaction = DB.transaction(['items'], 'readwrite');

        let objectStoreTologin = transaction.objectStore('items');

        let request = objectStoreTologin.add(newIteminfo);

        request.onsuccess = () => {
                
            return true;
        }

        request.onerror = () =>{

            return false;
        }

    }

    editProfile = function (id,username, password, blance,email) {
        
        let editInfo= {

            username: username,
            email: email,
            balance:balance,
            password: password,
            user_type : user_type,
        }

        let transaction = DB.transaction(['login'], 'readwrite');

        let editDataLogin = transaction.objectStore('login');

        let request = editDataLogin.put(addtoLogin);

        request.onsuccess = () => {
                
            
        }

        request.onerror = () =>{

            
        }

    }

    userUpdate = function (Uname,Email,password,balance,id){

        let transaction = DB.transaction(['users'], 'readwrite');
        let objectStore = transaction.objectStore('users');
    
        let newValue = {
            id:id,
            username:Uname,
            email:Email,
            password:password,
            balance:balance,
        }
    
        objectStore.put(newValue); 
    }

    loginUpdate = function (Uname,Email,password,balance,logged,type,id){

        let transaction = DB.transaction(['login'], 'readwrite');
        let objectStore = transaction.objectStore('login');
    
        let newValue = {
            id:id,
            username:Uname,
            email:Email,
            password:password,
            user_type:type,
            balance:balance,
            logedin:logged,
        }
    
        objectStore.put(newValue); 
    }

    fetch_img = function(quantity){
     
        let imgs=[];
        let counter = 0;
    
        let transaction = DB.transaction(['items'], 'readwrite');

        let objectStore = transaction.objectStore('items');

        let request = objectStore.openCursor();
    
            request.onerror = function(event) {
                console.err("error fetching data");
            };
        
            request.onsuccess = function(event) {
            let cursor = event.target.result;
        
                if (cursor) {
                    imgs.push(cursor.value.image1);
                    cursor.continue();
                }
                            
            }

            return imgs;
    }

  });

  export{DB,addNewItem,addNewseller,addNewuser,addTologin,fetch_img,loginUpdate,whoLoged,userUpdate};



  