class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: "",
            securityNumber: 111
        };
        //write the function!!!
        this.idNumber = this.generateIDNumber();

        if (creditCard !== undefined) {
            this.addCreditCardInfo(creditCard);
        }
        this.wishList = [];
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(input) {
        if (input.length !== 3) {
            throw new Error("Name must include first name, middle name and last name");
        }
        let pattern = /\b[A-Z][a-z]+\b/gm;
        input.forEach(element => {

                if (!pattern.test(element)) {
                    throw new Error("Invalid full name");
                }
            }
        );
        let fullName = {};
        fullName.firstName = input[0];
        fullName.middleName = input[1];
        fullName.lastName = input[2];

        this._fullName = fullName;
    };

    generateIDNumber() {
        let vowel = ['a', 'e', 'i', 'o', 'u'];
        //formula
        let idNumber = (231 * this.fullName.firstName.charCodeAt(0) + 139 *
            this.fullName.middleName.length).toString();
        if (vowel.includes(this.fullName.lastName
            .charAt(this.fullName.lastName.length - 1))) {
            idNumber += 8;
        } else {
            idNumber += 7;
        }
        // may be it needs setter
        return idNumber;
    }

    addCreditCardInfo(input) {
        if (input.length !== 3) {
            throw new Error('Missing credit card information');
        }
        if (typeof input[0] !== "number" || typeof input[2] !== "number") {
            throw new Error("Invalid credit card details");
        }
        this.creditCard.cardNumber = input[0];
        this.creditCard.expirationDate = input[1];
        this.creditCard.securityNumber = input[2];
    }

    addDestinationToWishList(destination) {
        if (this.wishList.includes(destination)) {
            throw new Error("Destination already exists in wishlist");
        }
        this.wishList.push(destination);
        this.wishList.sort(function (a, b) {
            return a.length - b.length;
        });
    }

    getVacationerInfo() {
        return "Name: " + this.fullName.firstName + " " + this.fullName.middleName + " " + this.fullName.lastName + "\n" +
            "ID Number: " + this.idNumber + "\n" +
            "WishList: \n" + (this.wishList.length === 0 ? "empty" : this.wishList.join(", ")) + "\n" +
            "Credit Card: \n" +
            "Card Number: " + this.creditCard.cardNumber + "\n" +
            "Expiration Date: " + this.creditCard.expirationDate + "\n" +
            "Security Number: " + this.creditCard.securityNumber;
    }
}

let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);

vacationer1.addDestinationToWishList('Spain');