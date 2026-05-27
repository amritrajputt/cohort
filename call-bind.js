function cookDish(ingredient,style){
    console.log(`${this.name} prepares ${ingredient} in  ${style} style!`);
}
const guptaKitchen = {name:"gupta ji ka kitchen"}
console.log(cookDish.call(guptaKitchen, "paneer","muglai"));

const guptaOrder = ["chole bhature","punjabi dhaba"]
console.log(cookDish.apply(guptaKitchen,guptaOrder));
