let DB;
let addTologin;
let addNewuser;
let addNewseller;
let addNewItem;
let getMyItems;
let fetch_imgBydep;
let getAllItems;
let fetch_img;
let loginUpdate;
let userUpdate;
let getItemByDep;
let getSingleItem;

document.addEventListener('DOMContentLoaded', () => {

    //creating database
    let ynet_storage = indexedDB.open('Ynet_storage', 1);

    ynet_storage.onsuccess = function() {

        DB = ynet_storage.result;

        addNewuser("Buyer1","Buyer1@buyer","12345678")
        addTologin("Buyer1", "Buyer1@buyer", "12345678", "1000", "buyer")

        addNewuser("Buyer2","Buyer2@buyer","12345678")
        addTologin("Buyer2", "Buye2@buyer", "12345678", "1000", "buyer")

        addNewuser("Buyer3","Buyer3@buyer","12345678")
        addTologin("Buyer3", "Buyer3@buyer", "12345678", "1000", "buyer")

        addNewseller ("Seller1", "Seller1@seller", "12345678", "09876543", "1234567", "location", 
        "discription", "Company1","1")
        addTologin("Seller1", "Seller1@seller", "12345678", "1000", "seller")

        addNewseller ("Seller2", "Seller2@seller", "12345678", "09876543", "1234567", "location", 
        "discription", "Company2","2")
        addTologin("Seller2", "Seller2@seller", "12345678", "1000", "seller")

        addNewseller ("Seller3", "Seller3@seller", "12345678", "09876543", "1234567", "location", 
        "discription", "Company3","3")
        addTologin("Seller3", "Seller3@seller", "12345678", "1000", "seller")

        addNewItem("desc", "Seller3", "ppts", "200", "PC", "https://unsplash.com/photos/ykI7BeSWgMo/download?force=true", 
        "https://unsplash.com/photos/ykI7BeSWgMo/download?force=true", "https://unsplash.com/photos/ykI7BeSWgMo/download?force=true",
         "https://unsplash.com/photos/ykI7BeSWgMo/download?force=true", "4", "4", "Electronics", "0")

         
        addNewItem("desc", "Seller1", "ppts", "200", "PC", " https://unsplash.com/photos/NL_DF0Klepc/download?force=true", 
        " https://unsplash.com/photos/NL_DF0Klepc/download?force=true", " https://unsplash.com/photos/NL_DF0Klepc/download?force=true",
         " https://unsplash.com/photos/NL_DF0Klepc/download?force=true", "4", "4", "Home and tools", "0")

         
        addNewItem("desc", "Seller2", "ppts", "200", "PC", "https://unsplash.com/photos/yo01Z-9HQAw/download?force=true", 
        "https://unsplash.com/photos/yo01Z-9HQAw/download?force=true", "https://unsplash.com/photos/yo01Z-9HQAw/download?force=true",
         "https://unsplash.com/photos/yo01Z-9HQAw/download?force=true", "4", "4", "Health and sport", "0")

         
        addNewItem("desc", "Seller2", "ppts", "200", "PC", "https://unsplash.com/photos/mr4JG4SYOF8/download?force=true", 
        "https://unsplash.com/photos/mr4JG4SYOF8/download?force=true", "https://unsplash.com/photos/mr4JG4SYOF8/download?force=true",
         "https://unsplash.com/photos/mr4JG4SYOF8/download?force=true", "4", "4", "Software and services", "0")

         
        addNewItem("desc", "Seller1", "ppts", "200", "PC", "https://unsplash.com/photos/LMIvSn6HPYM/download?force=true", 
        "https://unsplash.com/photos/LMIvSn6HPYM/download?force=true", "https://unsplash.com/photos/LMIvSn6HPYM/download?force=true",
         "https://unsplash.com/photos/LMIvSn6HPYM/download?force=true", "4", "4", "Automative and industrial", "0")

         
        addNewItem("desc", "Seller3", "ppts", "200", "PC", "https://unsplash.com/photos/H5IXIH254AU/download?force=true", 
        "https://unsplash.com/photos/H5IXIH254AU/download?force=true", "https://unsplash.com/photos/H5IXIH254AU/download?force=true",
         "https://unsplash.com/photos/H5IXIH254AU/download?force=true", "4", "4", "Toys and drones", "0")

         
        addNewItem("desc", "Seller2", "ppts", "200", "PC", "https://unsplash.com/photos/-bh5joV8-GI/download?force=true", 
        "https://unsplash.com/photos/-bh5joV8-GI/download?force=true", "https://unsplash.com/photos/-bh5joV8-GI/download?force=true",
         "https://unsplash.com/photos/-bh5joV8-GI/download?force=true", "4", "4", "Gaming", "0")

         
        addNewItem("desc", "Seller1", "ppts", "200", "PC", "https://unsplash.com/photos/MldQeWmF2_g/download?force=true", 
        "https://unsplash.com/photos/MldQeWmF2_g/download?force=true", "https://unsplash.com/photos/MldQeWmF2_g/download?force=true",
         "https://unsplash.com/photos/MldQeWmF2_g/download?force=true", "4", "4", "Office solutions", "0")

         
        addNewItem("desc", "Seller1", "ppts", "200", "PC", "https://unsplash.com/photos/ceWgSMd8rvQ/download?force=true", 
        "https://unsplash.com/photos/ceWgSMd8rvQ/download?force=true", "https://unsplash.com/photos/ceWgSMd8rvQ/download?force=true",
         "https://unsplash.com/photos/ceWgSMd8rvQ/download?force=true", "4", "4", "Beauty and personal care", "0")

         
        addNewItem("desc", "Seller3", "ppts", "200", "PC", "https://unsplash.com/photos/MAYsdoYpGuk/download?force=true", 
        "https://unsplash.com/photos/MAYsdoYpGuk/download?force=true", "https://unsplash.com/photos/MAYsdoYpGuk/download?force=true",
         "https://unsplash.com/photos/MAYsdoYpGuk/download?force=true", "4", "4", "Movies and television", "0")

         
        addNewItem("desc", "Seller2", "ppts", "200", "PC", "https://unsplash.com/photos/kxEjm9s21bg/download?force=true", 
        "https://unsplash.com/photos/kxEjm9s21bg/download?force=true", "https://unsplash.com/photos/kxEjm9s21bg/download?force=true",
         "https://unsplash.com/photos/kxEjm9s21bg/download?force=true", "4", "4", "Sports and outdoors", "0")

         
        addNewItem("desc", "Seller2", "ppts", "200", "PC", "https://unsplash.com/photos/trv87p_LMUw/download?force=true", 
        "https://unsplash.com/photos/trv87p_LMUw/download?force=true", "https://unsplash.com/photos/trv87p_LMUw/download?force=true",
         "https://unsplash.com/photos/trv87p_LMUw/download?force=true", "4", "4", "Arts and crafts", "0")

         
        addNewItem("desc", "Seller3", "ppts", "200", "PC", "https://unsplash.com/photos/Fh3Dtg6QX4Q/download?force=true", 
        "https://unsplash.com/photos/Fh3Dtg6QX4Q/download?force=true", "https://unsplash.com/photos/Fh3Dtg6QX4Q/download?force=true",
         "https://unsplash.com/photos/Fh3Dtg6QX4Q/download?force=true", "4", "4", "Smart home", "0")
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

    userUpdate = function (Uname,Email,password,balance,id){

        let transaction = DB.transaction(['users'], 'readwrite');
        let objectStore = transaction.objectStore('users');

        objectStore.openCursor().onsuccess = function(event) {
            const cursor = event.target.result;
            if (cursor) {
        
            if (cursor.value.id == id) {
                const updateData = cursor.value;

                updateData.username = Uname;
                updateData.email = Email;
                updateData.password = password;
                updateData.balance = balance;

                const request = cursor.update(updateData);

                request.onsuccess = function() {
                console.log('Updated');
                };
            };
            cursor.continue();
            } 
        };
    

    }

    loginUpdate = function (Uname,Email,password,balance,type,id){

        let transaction = DB.transaction(['login'], 'readwrite');
        let objectStore = transaction.objectStore('login');

        objectStore.openCursor().onsuccess = function(event) {
            const cursor = event.target.result;
            if (cursor) {
        
            if (cursor.value.id == id) {
                const updateData = cursor.value;

                updateData.username = Uname;
                updateData.email = Email;
                updateData.password = password;
                updateData.user_type = type;
                updateData.balance = balance;

                const request = cursor.update(updateData);

                request.onsuccess = function() {
                console.log('Updated');
                };
            };
            cursor.continue();
            } 
        };
    
}

    fetch_img = function(quantity){
     
        let imgs=[];
        let info=[]
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
                    if(counter<quantity){
                        imgs.push(cursor.value.image1);
                        cursor.continue();
                        counter+=1
                    }

                }
                            
            }

            return imgs;
    }

    fetch_imgBydep = function(){
     
        let imgs = [];
        let info = []
        let all = []
        let departments = ["Electronics","Home and tools","Health and sport",
        "Software and services","Automative and industrial","Toys and drones",
        "Gaming","Office solutions","Beauty and personal care","Movies and television",
        "Sports and outdoors","Arts and crafts","Smart home"]
        let counter = 0;
    
        let transaction = DB.transaction(['items'], 'readwrite');
        let objectStore = transaction.objectStore('items');

        let request = objectStore.openCursor()
    
            request.onerror = function(event) {
                console.log("error fetching data");
            };
        
            request.onsuccess = function(event) {
            let cursor = event.target.result;
                if (cursor) {
                    
                    for(let i=0;i<departments.length;i++){

                        if(cursor.value.department == departments[i]){
                            if(i<departments.length){
                                imgs.push(cursor.value.image1)
                                info.push(cursor.value.name)
                                
                                        
                                }
                                 
                                }

                    }cursor.continue()
                
                }
                            
            }
            all.push(imgs)
            all.push(info)
            return all;
    }

    getAllItems = function(){
     
        let imgs=[];
        let name=[]
        let property=[]
        let seller=[]
        let price=[]
        let dep=[]
        let amount=[]
        let id = []
        let all = [];
    
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
                        name.push(cursor.value.name);
                        property.push(cursor.value.properties)
                        seller.push(cursor.value.seller)
                        price.push(cursor.value.price)
                        dep.push(cursor.value.department)
                        amount.push(cursor.value.quantity)
                        id.push(cursor.value.id)
                        cursor.continue();

                    }
                            
            }
            all.push(imgs)
            all.push(name)
            all.push(property)
            all.push(seller)
            all.push(price)
            all.push(dep)
            all.push(amount)
            all.push(name)
            all.push(id)
            return all;
    }

    getMyItems = function(username){
     
        let imgs=[];
        let name=[]
        let sold=[]
        let aviliable=[]
        let price=[]
        let all = [];
    
        let transaction = DB.transaction(['items'], 'readwrite');
        let objectStore = transaction.objectStore('items');

        let request = objectStore.openCursor();
    
            request.onerror = function(event) {
                console.err("error fetching data");
            };
        
            request.onsuccess = function(event) {
            let cursor = event.target.result;
        
                if (cursor) {

                    if(cursor.value.seller == username){
                        imgs.push(cursor.value.image1);
                        name.push(cursor.value.name);
                        sold.push(cursor.value.sold)
                        aviliable.push(cursor.value.aviliable)
                        price.push(cursor.value.price)
                    }
                    cursor.continue();
                    }
                            
            }
            all.push(imgs)
            all.push(name)
            all.push(sold)
            all.push(aviliable)
            all.push(price)
           
            }

            getItemByDep = function(department){
     
                let imgs=[];
                let name=[]
                let property=[]
                let seller=[]
                let price=[]
                let dep=[]
                let amount=[]
                let all = [];
                let id = []
            
                let transaction = DB.transaction(['items'], 'readwrite');
                let objectStore = transaction.objectStore('items');
        
                let request = objectStore.openCursor();
            
                    request.onerror = function(event) {
                        console.err("error fetching data");
                    };
                
                    request.onsuccess = function(event) {
                    let cursor = event.target.result;
                
                        if (cursor) {

                            if(cursor.value.department == department){
                                imgs.push(cursor.value.image1);
                                name.push(cursor.value.name);
                                property.push(cursor.value.properties)
                                seller.push(cursor.value.seller)
                                price.push(cursor.value.price)
                                dep.push(cursor.value.department)
                                amount.push(cursor.value.quantity)
                                id.push(cursor.value.id)
                            }

                                cursor.continue();
        
                            }
                                    
                    }
                    all.push(imgs)
                    all.push(name)
                    all.push(property)
                    all.push(seller)
                    all.push(price)
                    all.push(dep)
                    all.push(amount)
                    all.push(name)
                    all.push(id)
                    return all;
            }

            getSingleItem = function(id){
     
                let imgs=[];
                let img2 = []
                let img3 = []
                let img4 = []
                let name=[]
                let property=[]
                let disc=[]
                let seller=[]
                let price=[]
                let amount=[]
                let all = [];
            
                let transaction = DB.transaction(['items'], 'readwrite');
                let objectStore = transaction.objectStore('items');
        
                let request = objectStore.openCursor();
            
                    request.onerror = function(event) {
                        console.err("error fetching data");
                    };
                
                    request.onsuccess = function(event) {
                    let cursor = event.target.result;
                
                        if (cursor) {

                            if(cursor.value.name == id){
                                imgs.push(cursor.value.image1);
                                img2.push(cursor.value.image2);
                                img3.push(cursor.value.image3);
                                img4.push(cursor.value.image3);
                                name.push(cursor.value.name);
                                property.push(cursor.value.properties)
                                disc.push(cursor.value.description)
                                seller.push(cursor.value.seller)
                                price.push(cursor.value.price)
                                amount.push(cursor.value.quantity)
                            }

                                cursor.continue();
        
                            }
                                    
                    }
                    all.push(imgs)
                    all.push(img2)
                    all.push(img3)
                    all.push(img4)
                    all.push(name)
                    all.push(property)
                    all.push(seller)
                    all.push(price)
                    all.push(disc)
                    all.push(amount)
                    return all;
            }
        

  });

  export{DB,getSingleItem,getItemByDep,addNewItem,addNewseller,addNewuser,addTologin,fetch_img,loginUpdate,getMyItems,userUpdate,fetch_imgBydep,getAllItems};



  