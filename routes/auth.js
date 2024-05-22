// const express = require('express');
// const router = express.Router();
// const { register, login, forgetPassword, resetPassword, updateUser } = require('../controllers/auth');

// router.post("/signup", register);
// router.post("/signin", login);
// router.post("/auth/forget-password", forgetPassword);
// router.post("/auth/reset-password/:token", resetPassword);
// router.put('/update', updateUser);  // Make sure 'updateUser' is properly defined and imported

// module.exports = router;


const express = require('express');
const multer = require('multer');
const { getAdminById, getAdmins, updateAdmin, deleteAdmin, resetPasswordEmail, resetPasswordToken, changePassword, getImage, registerStepOne, registerStepTwo } = require('../controllers/auth');
const adminRouter = express.Router();
const storage = multer.memoryStorage()
const upload = multer({ storage })

// adminRouter.post("/admin/register", createAdmin)
adminRouter.post('/register/step-one', registerStepOne);
adminRouter.post('/register/step-two/:adminId', registerStepTwo);
adminRouter.get("/admin/get/:id", getAdminById)
adminRouter.patch("/admin/update/:id", updateAdmin)
adminRouter.get("/admin/all", getAdmins)
adminRouter.delete("/admin/delete/:id", deleteAdmin)
adminRouter.post("/admin/reset-email", resetPasswordEmail)
adminRouter.post("/admin/reset-new-password/:token", resetPasswordToken)
adminRouter.post("/admin/change-password/:id", changePassword)
adminRouter.get("/image/:id", getImage);
module.exports = adminRouter