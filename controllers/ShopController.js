const Member = require("../models/Member");
let ShopController = module.exports;

ShopController.getSignupMyShop = async (req,res)=>{
  try {
    console.log("GET: cont/getSignupMyShop");
    res.render('signup')
  } catch (err) {
    console.log(`ERROR, cont/getSignupMyShop,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
}

ShopController.signupProcess = async (req, res) => {
  try {
    console.log("POST: cont/signupProcess");
    const data = req.body;
    const member = new Member();
    new_member = await member.signupData(data);
    res.json({ state: "success", data: new_member });
  } catch (err) {
    console.log(`ERROR, cont/signupProcess,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

ShopController.getLoginMyShop = async (req,res)=>{
  try {
    console.log("GET: cont/getLoginMyShop");
    res.render('login_page')
  } catch (err) {
    console.log(`ERROR, cont/getLoginMyShop,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
}

ShopController.loginProcess = async (req, res) => {
  try {
    console.log("POST: cont/loginProcess");
    const data = req.body;
    const member = new Member();
    result = await member.loginData(data);
    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`ERROR, cont/loginProcess,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

ShopController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("logout page");
};
