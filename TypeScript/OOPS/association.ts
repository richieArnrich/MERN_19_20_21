class Earphone {
  brand: string;
  color: string;
  price: number;

  constructor(brand: string, color: string, price: number) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }
}

class Mobile {
  mBrand: string;
  mColor: string;
  mPrice: number;
  earphone: any;
  constructor(mBrand: string, mColor: string, mPrice: number) {
    this.mBrand = mBrand;
    this.mColor = mColor;
    this.mPrice = mPrice;
  }

  connectEarphones(earphone: Earphone) {
    this.earphone = earphone;
  }
  disconnectEarphones() {
    this.earphone = null;
  }
  displayDetails() {
    console.log("Mobile brand: " + this.mBrand);
    console.log("Mobile color: " + this.mColor);
    console.log("Mobile price: " + this.mPrice);
    console.log("Earphone brand: " + this.earphone.brand);
    console.log("Earphone color: " + this.earphone.color);
    console.log("Earphone price: " + this.earphone.price);
  }
}

let m1 = new Mobile("Samsung", "White", 20000);
m1.connectEarphones(new Earphone("Samsung earpods", "White", 5000));
m1.displayDetails();
