import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

function Contact() {
  return (
    <div className="contact w-full page">
      <div className="container">
        <div className="contact__container">
          <TooltipComponent
            content="Телеграм"
            position="TopCenter"
            style={{ display: "block" }}
          >
            <a href="https://t.me/dorama5bot">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png"
                alt="telegram image"
              />
            </a>
          </TooltipComponent>
          <TooltipComponent
            content="Инстаграм"
            position="TopCenter"
            style={{ display: "block" }}
          >
            <a href="https://www.instagram.com/5dorama.online/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                alt="instagram image"
              />
            </a>
          </TooltipComponent>
        </div>
      </div>
    </div>
  );
}

export default Contact;
