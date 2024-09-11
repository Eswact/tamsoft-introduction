const mailsender = require("../services/mail-sender");

const sendMail = async (req, res) => {
  try {
    mailsender.sendFormMail(req.body);
    res.json({ message: 'E-posta başarıyla gönderildi.' });
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    res.status(500).send({
      message: error.message || 'E-posta gönderme işlemi sırasında bir hata oluştu.'
    });
  }
};

module.exports = {
  sendMail
};
