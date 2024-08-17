const mongoose=require('mongoose');
const main=async()=>{
    await mongoose.connect("mongodb://0.0.0.0:27017/Foodwala")
    const fetchData= mongoose.connection.db.collection("Fooditem");
    const res=await fetchData.find({}).toArray();
    const fetchFoodCategory= mongoose.connection.db.collection("foodCategory");
    const result=await fetchFoodCategory.find({}).toArray();
    global.food_items=res;
    global.foodCategory=result;
   // return res;
   // console.log(res);
}
module.exports=main();