import location from "../images/location.png";
import mail from "../images/mail.png";

const Contact = () => {
  const contactInfo = [
    { icon: location, type: "Location", address: "Katzrin, Israel" },
    { icon: mail, type: "Mail", address: "giladwe21@gmail.com" },
  ];

  return (
    <a id="contact" className="contact">
      <p className="title">CONTACT</p>
      <p className="semi-title">Don't be shy! Hit me up! 👇</p>
      <div className="info">
        {contactInfo.map((detail) => {
          return (
            <div className="detail">
              <div className="img-div">
                <img src={detail.icon} alt="" />
              </div>
              <div className="text">
                <p className="type">{detail.type}</p>
                <p className="address">{detail.address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </a>
  );
};

export default Contact;
