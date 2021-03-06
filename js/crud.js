/* Globals */
var g2ozt = 0.032151; // used to convert into troy ounces

/* Pseudo-Enums */
var ItemType  = Object.freeze({
    COIN        : 0,
    BAR         : 1
});

var MetalType = Object.freeze({
    GOLD        : 0,
    SILVER      : 1,
    PLATINUM    : 2
});

/* Temporary Functions (Until next project) */
var knownItems = [
    /* Gold Coins */
{
    item: ItemType.COIN,     
    metal: MetalType.GOLD,     
    name: "AUS Gold Nugget",
    fineness: 0.9999,
    denominations: [ 
        1/20,
        1/10,
        1/4,
        1/2,
        1,
        2,
        10
    ]
},
{
    item: ItemType.COIN,
    metal: MetalType.GOLD,
    name: "CHN Gold Panda",
    fineness: 0.999, 
    denominations: [
        1/20,
        1/10,
        1/4,
        1/2,
        1
    ]
},
{
    item: ItemType.COIN,
    metal: MetalType.GOLD,
    name: "US Gold Eagle",
    fineness: 0.916,
    denominations: [ 
        1/10,
        1/4,
        1/2,
        1
    ]
},

    /* Gold Bars */
{
    item: ItemType.BAR,
    metal: MetalType.GOLD,
    name: "PAMP Suisse Fortuna Veriscan Gold Bar",
    fineness: 0.999,
    denominations: [
        1
    ]
    // SRC: http://www.jmbullion.com/1-oz-pamp-suisse-veriscan-gold-bar/
},

{
    item: ItemType.BAR,
    metal: MetalType.GOLD,
    name: "Sunshine Gold Bar",
    fineness: 0.999,
    denominations: [
        1
    ]
    // SRC: http://www.jmbullion.com/1-gram-sunshine-gold-bar/
},

{
    item: ItemType.BAR,
    metal: MetalType.GOLD,
    name: "Valcambi Gold CombiBar",
    fineness: 0.999,
    denominations: [
        1
    ]
    //SRC: http://www.jmbullion.com/1-oz-valcambi-gold-combibar/
},

    /* Silver Coins */
{
    item: ItemType.COIN,
    metal: MetalType.SILVER,
    name: "AUS Silver Koala",
    fineness: 0.999,
    denominations: [
        1/2,
        1,
        10
    ]
},
{
    item: ItemType.COIN,
    metal: MetalType.SILVER,
    name: "CHN Lunar",
    fineness: 0.999,
    denominations: [ 1 ]
},
{
    item: ItemType.COIN,
    metal: MetalType.SILVER,
    name: "US Silver Eagle",
    fineness: 0.999,
    denominations: [ 1 ]
},

    /* Silver Bars */
{
    item: ItemType.BAR,
    metal: MetalType.SILVER,
    name: "Sunshine Silver Bar",
    fineness: 0.999,
    denominations: [
        1
    ]
    //SRC: http://www.jmbullion.com/1-oz-sunshine-silver-bar/
},

{
    item: ItemType.BAR,
    metal: MetalType.SILVER,
    name: "SilverTowne Prospector Silver Bar",
    fineness: 0.999,
    denominations: [
        1
    ]
    //SRC: http://www.jmbullion.com/1-oz-silvertowne-silver-bar/
},

    /* Platinum Coins */
{
    item: ItemType.COIN,
    metal: MetalType.PLATINUM,
    name: "AUS Platinum Koala",
    fineness: 0.9995,
    denominations: [
        1/20,
        1/10,
        1/4,
        1/2,
        1
    ]
},
{
    item: ItemType.COIN,
    metal: MetalType.PLATINUM,
    name: "US Platinum Eagle",
    fineness: 0.9995,
    denominations: [
        1/10,
        1/4,
        1/2,
        1
    ]
},

    /* Platinum Bars */
{
    item: ItemType.BAR,
    metal: MetalType.PLATINUM,
    name: "Valcambi Platinum Bar",
    fineness: 0.9995,
    denominations: [
        1
    ]
    //SRC: http://www.jmbullion.com/1-oz-valcambi-platinum-bar/
}

];

/* Filters list of known items */
function getKnownItems(iType, mType) {
    var result = [];
    var i;
    for (i = 0; i < knownItems.length; i++) {
        var validIType = !iType || iType == knownItems[i].item;
        var validMType = !mType || mType == knownItems[i].metal;
        if (validIType && validMType) {
            result.push(knownItems[i]);
        }
    }
    return result;
}

/* CRUD Implementation */

/* Create */
function createItem(
        iType, 
        mType, 
        name,
        purchaseDate, 
        qty, 
        unitPrice,
        fineness,
        wpu,
        picture,
        onsuccess,
        onerror) 
{
    /* We assume validity, allowing server to handle garbage */
    var item = new (Parse.Object.extend("Item"))();
    item.set("itype",  iType);
    item.set("mtype",  mType);
    item.set("name",   name);
    item.set("purchaseDate", purchaseDate);
    item.set("qty", qty);
    item.set("unitPrice", unitPrice);
    item.set("fineness", fineness);
    item.set("wpu", wpu);
    if (picture) { item.set("picture", picture); }
    item.set("createdBy", Parse.User.current());
    item.setACL(new Parse.ACL(Parse.User.current()));
    item.save(null, {
        success: onsuccess,
        error: onerror
    });
}

/* Read */
function readItem(
        objectId,
        onsuccess,
        onerror
        )
{
    var query = new Parse.Query(Parse.Object.extend("Item"));
    query.get(objectId, {
        success: onsuccess,
        error: onerror
    });
}

function readAllItems(
        page,
        filter,
        onsuccess,
        onerror)
{
    var query = new Parse.Query(Parse.Object.extend("Item"));
    query.equalTo("createdBy", Parse.User.current());
    if (filter) {
        filter(query);
    }
    query.limit(10);
    query.skip(page * 10);
    query.find({
        success: onsuccess,
        error: onerror
    })

}

/* TODO: Definite room for optimization */
function getTotalMetals(onsuccess, onerror) {
    //Find list in parse
    var query = new Parse.Query(Parse.Object.extend("Item"));
    //Search filter
    query.equalTo("createdBy", Parse.User.current());
    //Start the search, on success parse returns object called items
    query.find({
        success: function(items) {
            var totals = [0, 0, 0];
            var i;
            //the mType is 0, 1, or 2. We use this to increment totals for the metals appropriately as we iterate through the items list
            for (i = 0; i < items.length; i++) {
                totals[items[i].get("mtype")] += items[i].get("wpu") * items[i].get("qty") * items[i].get("fineness") * g2ozt;
            }
            onsuccess(totals);
        },
        error: onerror
    });

}

/* Update */
function updateItem(
        item,
        iType, 
        mType, 
        name,
        purchaseDate, 
        qty, 
        unitPrice,
        fineness,
        wpu,
        picture,
        onsuccess,
        onerror) 
{
    item.set("itype",  iType);
    item.set("mtype",  mType);
    item.set("name",   name);
    item.set("purchaseDate", purchaseDate);
    item.set("qty", qty);
    item.set("unitPrice", unitPrice);
    item.set("fineness", fineness);
    item.set("wpu", wpu);
    item.set("picture", picture);
    item.save(null, {
        success: onsuccess,
        error: onerror
    });
}

/* Delete */
function deleteItem(
        item,
        onsuccess,
        onerror)
{
    item.destroy({
        success: onsuccess,
        error: onerror
    });
}
