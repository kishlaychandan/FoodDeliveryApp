import style from './ChatBot.module.css'
import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import { FaRobot, FaTimes } from "react-icons/fa";

function ChatBots() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatBot = () => {
      setIsOpen(!isOpen);
    };
  
    const steps = [
      {
        id: 'Greet',
        message: 'Hello, Welcome to our website',
        trigger: 'Ask Name'
      },
      {
        id: 'Ask Name',
        message: 'What is your name?',
        trigger: 'Name'
      },
      {
        id: 'Name',
        user: true,
        trigger: 'AskPhoneNumber'
      },
      {
        id: "AskPhoneNumber",
        message: "Could you please provide your phone number?",
        trigger: "Phone",
      },
      {
        id: "Phone",
        user: true,
        trigger: "AskIssue",
      },
      {
        id: "AskIssue",
        message: "Please select your issue from the options below.",
        trigger: "issues",
      },
      {
        id: "issues",
        options: [
          {
            value: "Restaurant Enquiry",
            label: "Restaurant Enquiry",
            trigger: "RestaurantEnquiry",
          },
          {
            value: "Food Enquiry",
            label: "Food Enquiry",
            trigger: "FoodEnquiry",
          },
          {
            value: "Tiffin Enquiry",
            label: "Tiffin Enquiry",
            trigger: "TiffinEnquiry",
          },
          {
            value: "Delivery Issue",
            label: "Delivery Issue",
            trigger: "DeliveryIssue",
          },
        ],
      },
      {
        id: "RestaurantEnquiry",
        message: "Here is a brief about our restaurant:",
        trigger: "RestaurantDetails",
      },
      {
        id: "RestaurantDetails",
        message: "Restaurant Details...",
        trigger: "AnythingElse",
      },
      {
        id: "FoodEnquiry",
        message:
          "For food enquiry, please contact our restaurant at: 123-456-7890. You can also view our menu at: https://example.com/menu",
          trigger: "AnythingElse",
      },
      {
        id: "TiffinEnquiry",
        message:
          "For tiffin enquiries, please contact our restaurant at: 123-456-7890. You can find more details about our tiffin service at: https://example.com/tiffin",
          trigger: "AnythingElse",
      },
      {
        id: "DeliveryIssue",
        message: "Please provide your order ID.",
        trigger: "order",
      },
      {
        id: "order",
        user: true,
        trigger: "DeliveryIssueConfirmation",
      },
      {
        id: "DeliveryIssueConfirmation",
        message:
          "Thank you for providing your order ID. Our team will contact you shortly.",
          trigger: "AnythingElse",
      },
      {
        id: "AnythingElse",
        message: "Is there anything else I can help you with?",
        trigger: "FinalResponse",
      },
      {
        id: "FinalResponse",
        options: [
          { value: "Yes", label: "Yes", trigger: "AskIssue" },
          { value: "No", label: "No", trigger: "Goodbye" },
        ],
      },
      {
        id: "Goodbye",
        message: "Thank you for contacting us. Have a good day!",
        end: true,
      },
    ];
  
    return (
      <div className={style.chatbotContainer}>
        <div
          className={style.chatbotIcon}
          onClick={toggleChatBot}
        >
          {isOpen ? <FaTimes size="24" /> : <FaRobot size="24" />}
        </div>
        {isOpen && (
          <Segment className={style.chatbotSegment}>
            <ChatBot steps={steps} />
          </Segment>
        )}
      </div>
    );
  
}

export default ChatBots